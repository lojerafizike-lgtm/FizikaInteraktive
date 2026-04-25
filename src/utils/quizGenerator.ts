import { ALL_PHYSICS_DATA } from '../constants';
import { PhysicsTerm, CategoryName } from '../types';

export interface QuizQuestion {
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
    const kandidatet = madhesite
        .filter((_, i) => i !== indexAktual)
        .map(m => {
            const v = m[fusha];
            return typeof v === 'string' ? v.trim() : '';
        })
        .filter(v => v !== '' && v !== vlera_e_sakte && v !== '-' && v !== '—');
    return përzieje([...new Set(kandidatet)]).slice(0, sasi);
}

/**
 * Ndërto 4 opsione të përziera (1 e saktë + deri 3 false).
 * Kthe null nëse distraktore janë < minimumi.
 */
function ndërtoOpsione(sakte: string, distraktore: string[], min = 2): string[] | null {
    const unike = [...new Set(distraktore)].filter(d => d !== sakte);
    if (unike.length < min) return null;
    return përzieje([sakte, ...unike.slice(0, 3)]);
}

// ── Llojet e pyetjeve (P1-P8) ───────────────────────────────────────────────

/** P1: Përshkrimi -> Name */
function p1_pershkrimi(m: PhysicsTerm, all: PhysicsTerm[]): QuizQuestion | null {
    if (!m.desc?.trim()) return null;
    const sakte = emriPastër(m.name);
    const distraktore = merrDistraktore(all, -1, 'name', m.name, 3).map(n => emriPastër(n));
    const ops = ndërtoOpsione(sakte, distraktore);
    if (!ops) return null;
    return {
        pyetja: `Cila madhësi fizike përshkruhet si: "${m.desc}"?`,
        opsionet: ops,
        pergjgjjaESakte: sakte
    };
}

/** P2: Name -> Njësia SI */
function p2_njesia(m: PhysicsTerm, all: PhysicsTerm[]): QuizQuestion | null {
    if (!m.unit?.trim() || m.unit === '-' || m.unit === '—') return null;
    const distraktore = merrDistraktore(all, -1, 'unit', m.unit, 3);
    const ops = ndërtoOpsione(m.unit, distraktore);
    if (!ops) return null;
    return {
        pyetja: `Cila është njësia bazë SI për "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: m.unit
    };
}

/** P3: Name -> Formula */
function p3_formula(m: PhysicsTerm, all: PhysicsTerm[]): QuizQuestion | null {
    if (!m.form?.trim() || m.form === '-' || m.form === '—') return null;
    const distraktore = merrDistraktore(all, -1, 'form', m.form, 3);
    const ops = ndërtoOpsione(m.form, distraktore);
    if (!ops) return null;
    return {
        pyetja: `Cila është formula kryesore për llogaritjen e "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: m.form
    };
}

/** P4: Name -> Natyra (Skalare/Vektoriale) */
function p4_natyra(m: PhysicsTerm): QuizQuestion | null {
    if (!m.nature?.trim() || m.nature === '-') return null;
    const ops = përzieje([m.nature, m.nature === 'Vektoriale' ? 'Skalare' : 'Vektoriale']);
    return {
        pyetja: `Madhësia fizike "${emriPastër(m.name)}" është madhësi:`,
        opsionet: ops,
        pergjgjjaESakte: m.nature
    };
}

/** P5: Name -> Simboli */
function p5_simboli(m: PhysicsTerm, all: PhysicsTerm[]): QuizQuestion | null {
    if (!m.sym?.trim() || m.sym === '-') return null;
    const distraktore = merrDistraktore(all, -1, 'sym', m.sym, 3);
    const ops = ndërtoOpsione(m.sym, distraktore);
    if (!ops) return null;
    return {
        pyetja: `Cili është simboli që përdoret rëndom për "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: m.sym
    };
}

/** P6: Outlieri (Cila NUK është e kësaj njësie) */
function p6_outlieriNjesia(m: PhysicsTerm, all: PhysicsTerm[]): QuizQuestion | null {
    if (!m.unit?.trim() || m.unit === '—') return null;
    const teNjejta = all.filter(x => x.unit === m.unit && x.name !== m.name);
    if (teNjejta.length < 2) return null;
    
    const outlierKandidat = all.find(x => x.unit !== m.unit && x.unit !== '—');
    if (!outlierKandidat) return null;

    const ops = përzieje([
        emriPastër(outlierKandidat.name),
        emriPastër(m.name),
        emriPastër(teNjejta[0].name),
        emriPastër(teNjejta[1].name)
    ]);

    return {
        pyetja: `Cila nga të mëposhtmet NUK matet me "${m.unit}"?`,
        opsionet: ops,
        pergjgjjaESakte: emriPastër(outlierKandidat.name)
    };
}

/** P7: Ndërtimi i formulës (E vërtetë/E gabuar) */
function p7_ndertimiFormules(m: PhysicsTerm): QuizQuestion | null {
    if (!m.form?.trim() || m.form === '-' || !m.sym?.trim() || m.sym === '-') return null;
    return {
        pyetja: `A është e saktë marrëdhënia: ${m.sym} = ${m.form}?`,
        opsionet: ['Po', 'Jo'],
        pergjgjjaESakte: 'Po'
    };
}

/** P8: Emri -> Përkufizimi */
function p8_perkufizimi(m: PhysicsTerm, all: PhysicsTerm[]): QuizQuestion | null {
    if (!m.desc?.trim()) return null;
    const distraktore = merrDistraktore(all, -1, 'desc', m.desc, 3);
    const ops = ndërtoOpsione(m.desc, distraktore);
    if (!ops) return null;
    return {
        pyetja: `Çfarë përfaqëson në fizikë madhësia "${emriPastër(m.name)}"?`,
        opsionet: ops,
        pergjgjjaESakte: m.desc
    };
}

/**
 * Shpërndaj pyetjet nëpër kategori.
 */
export function gjeneroKuizPerKategorine(emriKategorisë: CategoryName, sasia: number = 8): QuizQuestion[] {
    const madhesite = ALL_PHYSICS_DATA[emriKategorisë] || [];
    if (madhesite.length === 0) return [];

    const pyetjet: QuizQuestion[] = [];
    const gjeneruesit = [
        p1_pershkrimi, 
        p2_njesia, 
        p3_formula, 
        p4_natyra, 
        p5_simboli, 
        p6_outlieriNjesia, 
        p7_ndertimiFormules, 
        p8_perkufizimi
    ];
    
    // Përziejmë listat për variacion
    const madhesitePerziera = përzieje(madhesite);

    for (let i = 0; i < sasia; i++) {
        const madhesia = madhesitePerziera[i % madhesitePerziera.length];
        // Provojmë gjeneruesit deri sa njëri të kthejë pyetje
        const gjeneruesitPerziere = përzieje([...gjeneruesit]);
        let pyetje: QuizQuestion | null = null;
        
        for (const gen of gjeneruesitPerziere) {
            pyetje = gen(madhesia, madhesite);
            if (pyetje) break;
        }
        
        if (pyetje) pyetjet.push(pyetje);
    }

    return përzieje(pyetjet).slice(0, sasia);
}
