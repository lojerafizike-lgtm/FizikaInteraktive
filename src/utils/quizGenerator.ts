import { PhysicsData } from '../types';

export function gjeneroKuizPerKategorine(kategoria: string, teDhenat: PhysicsData) {
    const madhesite = teDhenat[kategoria];
    if (!madhesite) return [];
    
    const kuizi: { pyetja: string, opsionet: string[], pergjgjjaESakte: string }[] = [];

    madhesite.forEach((madhesia, index) => {
        // Gjej një madhësi tjetër të rastësishme për përgjigje të gabuara
        const indexRastesishem = (index + 1) % madhesite.length;
        const madhesiaTjeter = madhesite[indexRastesishem];

        // Pyetja 1: Përkufizimi
        kuizi.push({
            pyetja: `Çfarë përfaqëson ${madhesia.name.split('. ')[1]}?`,
            opsionet: [madhesia.desc, madhesiaTjeter.desc, "Asnjë nga të mësipërmet"],
            pergjgjjaESakte: madhesia.desc
        });

        // Pyetja 2: Formula
        kuizi.push({
            pyetja: `Cila është formula e saktë për ${madhesia.name.split('. ')[1]}?`,
            opsionet: [madhesiaTjeter.form, madhesia.form, "Nuk ka formulë ekzakte"],
            pergjgjjaESakte: madhesia.form
        });

        // Pyetja 3: Njësia
        kuizi.push({
            pyetja: `Cila është njësia matëse për ${madhesia.name.split('. ')[1]}?`,
            opsionet: [madhesiaTjeter.unit, madhesia.otherUnits || "Nuk ka njësi tjetër", madhesia.unit],
            pergjgjjaESakte: madhesia.unit
        });
    });

    return kuizi;
}
