import { PhysicsData } from '../types';

interface Pyetje {
    pyetja: string;
    opsionet: string[];
    pergjigjjaESakte: string;
    vështirësia: 'mesatare' | 'e vështirë';
}

function përzieje<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function merrDistraktore(
    madhesite: any[],
    indexAktual: number,
    fusha: keyof typeof madhesite[0],
    sasi: number = 2
): string[] {
    const kandidatët = madhesite
        .filter((_, i) => i !== indexAktual)
        .map(m => m[fusha])
        .filter((v): v is string => typeof v === 'string' && v.trim() !== '');

    // Përziejë dhe merr distraktore unike
    const unike = [...new Set(kandidatët)];
    return përzieje(unike).slice(0, sasi);
}

export function gjeneroKuizPerKategorine(kategoria: string, teDhenat: PhysicsData): Pyetje[] {
    const madhesite = teDhenat[kategoria];
    if (!madhesite || madhesite.length === 0) return [];

    const kuizi: Pyetje[] = [];

    madhesite.forEach((madhesia, index) => {
        const emri = madhesia.name.split('. ').slice(1).join('. ') || madhesia.name;

        // ── Pyetja 1: Çfarë përfaqëson (e vështirë — 4 opsione) ──────────────
        const distr1 = merrDistraktore(madhesite, index, 'desc', 3);
        if (distr1.length >= 2) {
            kuizi.push({
                pyetja: `Cili nga përkufizimet e mëposhtme e përshkruan saktë "${emri}"?`,
                opsionet: përzieje([madhesia.desc, ...distr1]),
                pergjigjjaESakte: madhesia.desc,
                vështirësia: 'e vështirë'
            });
        }

        // ── Pyetja 2: Formula (e vështirë — formulë alternative false) ────────
        const distrForm = merrDistraktore(madhesite, index, 'form', 3);
        if (distrForm.length >= 2 && madhesia.form) {
            // Krijo një formulë "të ngjashme" por të gabuar duke ndryshuar operatorë
            const formulëFalse = madhesia.form
                .replace(/\//g, '·')
                .replace(/²/g, '³')
                .replace(/\+/g, '−');

            const opsionetFormulës = përzieje([
                madhesia.form,
                ...distrForm.slice(0, 2),
                formulëFalse !== madhesia.form ? formulëFalse : distrForm[2] ?? distrForm[0]
            ].filter((v, i, arr) => arr.indexOf(v) === i)); // unike

            kuizi.push({
                pyetja: `Identifiko formulën e saktë matematikore për "${emri}":`,
                opsionet: opsionetFormulës.slice(0, 4),
                pergjigjjaESakte: madhesia.form,
                vështirësia: 'e vështirë'
            });
        }

        // ── Pyetja 3: Njësia SI (me kurth — otherUnits është gabim) ──────────
        const distrUnit = merrDistraktore(madhesite, index, 'unit', 2);
        if (distrUnit.length >= 1) {
            const opsionetNjësisë = përzieje([
                madhesia.unit,
                ...distrUnit,
                // Shto njësinë alternative si kurth (nëse ekziston)
                ...(madhesia.otherUnits ? [madhesia.otherUnits] : [])
            ].filter((v, i, arr) => v && arr.indexOf(v) === i)).slice(0, 4);

            kuizi.push({
                pyetja: `Cila është njësia bazë SI për madhësinë "${emri}"? (Kujdes: njësitë alternative janë kurth!)`,
                opsionet: opsionetNjësisë,
                pergjigjjaESakte: madhesia.unit,
                vështirësia: 'e vështirë'
            });
        }

        // ── Pyetja 4: Lidhja midis madhësive (sfiduese) ───────────────────────
        const tjetër = madhesite.find((m, i) => i !== index && m.form?.includes(madhesia.symbol ?? ''));
        if (tjetër) {
            const distrL = merrDistraktore(madhesite, index, 'name', 3)
                .map(n => n.split('. ').slice(1).join('. ') || n);

            kuizi.push({
                pyetja: `Madhësia "${emri}" shfaqet drejtpërdrejt në formulën e cilës madhësi tjetër?`,
                opsionet: përzieje([
                    tjetër.name.split('. ').slice(1).join('. ') || tjetër.name,
                    ...distrL.slice(0, 3)
                ]).slice(0, 4),
                pergjigjjaESakte: tjetër.name.split('. ').slice(1).join('. ') || tjetër.name,
                vështirësia: 'e vështirë'
            });
        }

        // ── Pyetja 5: E/Jo — fakt specifik ────────────────────────────────────
        if (madhesia.desc) {
            const fjalëKyçe = madhesia.desc.split(' ').slice(0, 4).join(' ');
            kuizi.push({
                pyetja: `Vlerëso: "${fjalëKyçe}..." është fillimi i saktë i përkufizimit për "${emri}".`,
                opsionet: përzieje(['E vërtetë', 'E gabuar']),
                pergjigjjaESakte: 'E vërtetë',
                vështirësia: 'mesatare'
            });
        }
    });

    // Kthe pyetjet të përziera — nuk grumbullohen pyetjet e së njëjtës madhësi
    return përzieje(kuizi);
}
