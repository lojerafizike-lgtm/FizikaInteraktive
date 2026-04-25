import { PhysicsData, PhysicsTerm } from '../types';

interface QuizQuestion {
    pyetja: string;
    opsionet: string[];
    pergjgjjaESakte: string;
}

// ── Utilities ──────────────────────────────────────────────────────────────

function përzieje<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function emriPastër(name: string): string {
    return name.split('. ').slice(1).join('. ').trim() || name;
}

/**
 * Merr deri në `sasi` vlera të fushës nga elementë të tjerë,
 * duke garantuar se asnjë nuk është e barabartë me `vlera_e_sakte`.
 */
function merrDistraktore(
    madhesite: PhysicsTerm[],
    indexAktual: number,
    fusha: keyof PhysicsTerm,
    vlera_e_sakte: string,
    sasi: number
): string[] {
    const kandidatët = madhesite
        .filter((_, i) => i !== indexAktual)
        .map(m => {
            const v = m[fusha];
            return typeof v === 'string' ? v.trim() : '';
        })
        .filter(v => v !== '' && v !== vlera_e_sakte && v !== '-' && v !== '—');

    return përzieje([...new Set(kandidatët)]).slice(0, sasi);
}

/**
 * Nderto 4 opsione të përziera (1 e saktë + deri 3 false).
 * Kthe null nëse distraktore janë < minimumi.
 */
function ndërtoOpsione(
    sakte: string,
    distraktore: string[],
    min = 2
): string[] | null {
    const unike = [...new Set(distraktore)].filter(d => d !== sakte);
    if (unike.length < min) return null;
    return përzieje([sakte, ...unike.slice(0, 3)]);
}

// ── Llojet e pyetjeve ──────────────────────────────────────────────────────

/**
 * P1 — Cili PËRKUFIZIM i përket madhësisë X?
 * Drejtim: emër → desc  (definicionet janë unike)
 */
function p1_perkufizimi(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    if (!m.desc?.trim()) return null;
    const distr = merrDistraktore(all, idx, 'desc', m.desc, 3);
    const ops = ndërtoOpsione(m.desc, distr);
    if (!ops) return null;
    return {
        pyetja: `Cila nga përkufizimet e mëposhtme e përshkruan SAKTË madhësinë "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: m.desc
    };
}

/**
 * P2 — Cila FORMULË është korrekte për X?
 * Drejtim: emër → formula  (formulat janë unike)
 */
function p2_formula(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    const form = m.form?.split(/\s{2,}|,/)[0]?.trim(); // formula e parë nëse ka shumë
    if (!form || form === '—' || form === '-') return null;

    const distr = merrDistraktore(all, idx, 'form', form, 3);

    // Shto formulë "false të afërt" duke ndryshuar operatorë
    const falsë = form
        .replace(/\//g, '·')
        .replace(/²/g, '³')
        .replace(/\+/g, '−')
        .replace(/½/g, '¼');
    if (falsë !== form && !distr.includes(falsë)) distr.push(falsë);

    const ops = ndërtoOpsione(form, distr);
    if (!ops) return null;
    return {
        pyetja: `Zgjidh formulën KRYESORE për "${emriPastër(m.name)}".`,
        opsionet: ops,
        pergjgjjaESakte: form
    };
}

/**
 * P3 — Cila është NJËSIA bazë SI për X?
 * Drejtim: emër → unit
 * otherUnits vendoset si kurth eksplicit.
 */
function p3_njesia(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    if (!m.unit?.trim() || m.unit === '—' || m.unit === '-') return null;
    const distr = merrDistraktore(all, idx, 'unit', m.unit, 2);
    if (m.otherUnits?.trim()) {
        const alt = m.otherUnits.split(',')[0].trim();
        if (alt && alt !== m.unit && alt !== '-') distr.unshift(alt);
    }
    const ops = ndërtoOpsione(m.unit, distr);
    if (!ops) return null;
    return {
        pyetja: `Cila është njësia BAZË SI për "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: m.unit
    };
}

/**
 * P4 — X është madhësi vektoriale apo skalare?
 * Drejtim: emër → nature
 */
function p4_natyra(m: PhysicsTerm): QuizQuestion | null {
    if (!m.nature || m.nature === '-') return null;
    const tjeter = m.nature === 'Vektoriale' ? 'Skalare' : 'Vektoriale';
    return {
        pyetja: `Madhësia fizike "${emriPastër(m.name)}" është:`,
        opsionet: përzieje([m.nature, tjeter, 'As vektoriale, as skalare', 'Varet nga konteksti']),
        pergjgjjaESakte: m.nature
    };
}

/**
 * P5 — Formula [X] i përket cilës madhësi?
 * Drejtim: formula → emër  (formulat janë unike → nuk ka dyfishe)
 */
function p5_formulaInverse(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    const form = m.form?.split(/\s{2,}|,/)[0]?.trim();
    if (!form || form === '—' || form === '-') return null;

    const emri = emriPastër(m.name);
    const distrEmra = merrDistraktore(all, idx, 'name', m.name, 3)
        .map(n => emriPastër(n));
    const ops = ndërtoOpsione(emri, distrEmra);
    if (!ops) return null;
    return {
        pyetja: `Formula  "${form}"  i përket cilës madhësi fizike?`,
        opsionet: ops,
        pergjgjjaESakte: emri
    };
}

/**
 * P6 — Cila madhësi NUK matet në njësinë [unit]?
 * Logjikë: merr njësinë e m, gjej 3 madhësi të tjera me të njëjtën njësi,
 * pastaj merr 1 madhësi me njësi tjetër → ajo është "outlier" = e sakta.
 * Kjo pyetje është UNIKE sepse ka 1 e saktë dhe 3 gabime.
 */
function p6_outlieriNjesia(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    if (!m.unit?.trim() || m.unit === '—' || m.unit === '-') return null;

    // Madhësi me NJËJTËN njësi (gabime)
    const njeNjesie = all
        .filter((x, i) => i !== idx && x.unit?.trim() === m.unit)
        .map(x => emriPastër(x.name));

    if (njeNjesie.length < 2) return null; // nuk ka mjaftueshëm "gabime"

    // Madhësia me njësi TJETËR (e sakta!)
    const outlierKandidat = përzieje(
        all.filter((x, i) => i !== idx && x.unit?.trim() !== m.unit && x.unit?.trim() && x.unit !== '—')
    )[0];
    if (!outlierKandidat) return null;

    const outlier = emriPastër(outlierKandidat.name);
    const gabime = përzieje(njeNjesie).slice(0, 3);

    return {
        pyetja: `Cila nga madhësitë e mëposhtme NUK matet me njësinë "${m.unit}"?`,
        opsionet: përzieje([outlier, ...gabime]),
        pergjgjjaESakte: outlier
    };
}

/**
 * P7 — Cili SIMBOL paraqet madhësinë X?
 * Drejtim: emër → sym
 * SHËNIM: Simbolet jo gjithmonë janë unike (p.sh. P=Fuqia, P=Shtypja),
 * prandaj distraktore filtrohen vetëm brenda kategorisë aktuale.
 */
function p7_simboli(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    if (!m.sym?.trim()) return null;
    const sym = m.sym.split(',')[0].trim(); // simbol i parë nëse ka shumë

    const distrSym = merrDistraktore(all, idx, 'sym', sym, 3)
        .map(s => s.split(',')[0].trim())
        .filter(s => s !== sym);

    const ops = ndërtoOpsione(sym, distrSym);
    if (!ops) return null;
    return {
        pyetja: `Cili simbol fizik paraqet madhësinë "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: sym
    };
}

/**
 * P8 — Cila madhësi ka SIMBOLIN [sym]?
 * Drejtim: simbol → emër (i vështirë — kërkon memorizim të simboleve)
 * Bëhet vetëm nëse simboli është unik brenda kategorisë.
 */
function p8_simboliInverse(m: PhysicsTerm, all: PhysicsTerm[], idx: number): QuizQuestion | null {
    if (!m.sym?.trim()) return null;
    const sym = m.sym.split(',')[0].trim();

    // Kontrollo unicitëtin e simbolit BRENDA kategorisë
    const duplikat = all.some((x, i) => i !== idx && x.sym?.split(',')[0].trim() === sym);
    if (duplikat) return null; // hiq pyetjen nëse simboli i ndarë

    const emri = emriPastër(m.name);
    const distrEmra = merrDistraktore(all, idx, 'name', m.name, 3).map(n => emriPastër(n));
    const ops = ndërtoOpsione(emri, distrEmra);
    if (!ops) return null;

    return {
        pyetja: `Simboli fizik "${sym}" paraqet cilën madhësi?`,
        opsionet: ops,
        pergjgjjaESakte: emri
    };
}

// ── Eksporti kryesor ───────────────────────────────────────────────────────

export function gjeneroKuizPerKategorine(
    kategoria: string,
    teDhenat: PhysicsData
): QuizQuestion[] {
    const madhesite = teDhenat[kategoria];
    if (!madhesite || madhesite.length < 2) return [];

    const kuizi: QuizQuestion[] = [];

    madhesite.forEach((m, idx) => {
        const gjeneratorët = [
            () => p1_perkufizimi(m, madhesite, idx),
            () => p2_formula(m, madhesite, idx),
            () => p3_njesia(m, madhesite, idx),
            () => p4_natyra(m),
            () => p5_formulaInverse(m, madhesite, idx),
            () => p6_outlieriNjesia(m, madhesite, idx),
            () => p7_simboli(m, madhesite, idx),
            () => p8_simboliInverse(m, madhesite, idx),
        ];

        gjeneratorët.forEach(gjen => {
            const pyetja = gjen();
            if (pyetja) kuizi.push(pyetja);
        });
    });

    // Kthe pyetjet të përziera plotësisht
    return përzieje(kuizi);
} 
