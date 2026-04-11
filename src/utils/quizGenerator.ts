import { PhysicsData, PhysicsTerm } from '../types';

interface QuizQuestion {
    pyetja: string;
    opsionet: string[];
    pergjgjjaESakte: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function përzieje<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * Merr `sasi` distraktore unike nga lista, duke shmangur indexin aktual
 * dhe vlerën e saktë (që të mos kemi dy përgjigje të sakta).
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
        .map(m => m[fusha] as string | undefined)
        .filter((v): v is string => !!v && v.trim() !== '' && v.trim() !== vlera_e_sakte);

    const unike = [...new Set(kandidatët)];
    return përzieje(unike).slice(0, sasi);
}

/**
 * Ndërto 4 opsione (1 i saktë + deri 3 distraktore) dhe i përzieje.
 * Nëse nuk ka mjaftueshëm distraktore, kthe null (pyetja hidhet).
 */
function ndërtoOpsione(
    sakte: string,
    distraktore: string[],
    minimumiDistraktore: number = 2
): string[] | null {
    const unike = [...new Set(distraktore)].filter(d => d !== sakte);
    if (unike.length < minimumiDistraktore) return null;
    return përzieje([sakte, ...unike.slice(0, 3)]);
}

// ── Gjeneratori kryesor ────────────────────────────────────────────────────

export function gjeneroKuizPerKategorine(
    kategoria: string,
    teDhenat: PhysicsData
): QuizQuestion[] {
    const madhesite = teDhenat[kategoria];
    if (!madhesite || madhesite.length < 2) return [];

    const kuizi: QuizQuestion[] = [];

    madhesite.forEach((madhesia, index) => {
        const emri = madhesia.name.split('. ').slice(1).join('. ').trim() || madhesia.name;

        // ── P1: Çfarë përfaqëson — kërkon njohje të saktë të definicionit ──
        const distrDesc = merrDistraktore(madhesite, index, 'desc', madhesia.desc, 3);
        const opsDesc = ndërtoOpsione(madhesia.desc, distrDesc);
        if (opsDesc) {
            kuizi.push({
                pyetja: `Cila nga përkufizimet e mëposhtme e përshkruan SAKTË madhësinë "${emri}"?`,
                opsionet: opsDesc,
                pergjgjjaESakte: madhesia.desc
            });
        }

        // ── P2: Formula — me distraktore nga formula të ngjashme ────────────
        if (madhesia.form && madhesia.form.trim()) {
            const distrForm = merrDistraktore(madhesite, index, 'form', madhesia.form, 3);

            // Shto formulë "false të afërt" duke manipuluar simbole
            const formulëFalse = madhesia.form
                .replace(/\//g, '·')
                .replace(/²/g, '³')
                .replace(/\+/g, '−')
                .replace(/−/g, '+');
            if (formulëFalse !== madhesia.form) {
                distrForm.push(formulëFalse);
            }

            const opsForm = ndërtoOpsione(madhesia.form, distrForm);
            if (opsForm) {
                kuizi.push({
                    pyetja: `Zgjidh formulën KRYESORE për "${emri}". Kujdes: formulat e ngjashme janë kurth!`,
                    opsionet: opsForm,
                    pergjgjjaESakte: madhesia.form
                });
            }
        }

        // ── P3: Njësia SI — otherUnits vendoset si kurth i qëllimshëm ────────
        if (madhesia.unit && madhesia.unit.trim()) {
            const distrUnit = merrDistraktore(madhesite, index, 'unit', madhesia.unit, 2);

            // Nëse ka njësi alternative, shto si kurth të eksplicitë
            if (madhesia.otherUnits && madhesia.otherUnits.trim()) {
                distrUnit.unshift(madhesia.otherUnits);
            }

            const opsUnit = ndërtoOpsione(madhesia.unit, distrUnit);
            if (opsUnit) {
                kuizi.push({
                    pyetja: `Cila është njësia BAZË SI për "${emri}"? (Njësitë alternative dhe të gabuara janë të inkluduara si kurth!)`,
                    opsionet: opsUnit,
                    pergjgjjaESakte: madhesia.unit
                });
            }
        }

        // ── P4: Natyra vektorial/skalar ───────────────────────────────────────
        if (madhesia.nature && madhesia.nature !== '-') {
            const natyraTjeter = madhesia.nature === 'Vektoriale' ? 'Skalare' : 'Vektoriale';
            const opsNature = përzieje([
                madhesia.nature,
                natyraTjeter,
                'As vektoriale, as skalare',
                'Varet nga situata'
            ]);
            kuizi.push({
                pyetja: `Madhësia fizike "${emri}" është madhësi:`,
                opsionet: opsNature,
                pergjgjjaESakte: madhesia.nature
            });
        }

        // ── P5: Gjej madhësinë nga njësia (inversim i P3) ────────────────────
        if (madhesia.unit && madhesia.unit.trim()) {
            const distrEmra = merrDistraktore(madhesite, index, 'name', madhesia.name, 3)
                .map(n => n.split('. ').slice(1).join('. ').trim() || n);

            const opsEmra = ndërtoOpsione(emri, distrEmra);
            if (opsEmra) {
                kuizi.push({
                    pyetja: `Njësia matëse "${madhesia.unit}" i përket cilës madhësi fizike?`,
                    opsionet: opsEmra,
                    pergjgjjaESakte: emri
                });
            }
        }
    });

    // Kthe pyetjet të përziera — nuk grupohen sipas madhësisë
    return përzieje(kuizi);
}
