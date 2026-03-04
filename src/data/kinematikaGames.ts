import { FillBlankQ, McqQ, MatchPair, BuildFormulaQ, TrueFalseQ, UnitQ } from "./minigames";

// ===================== PLOTËSO FJALËN =====================
const fillData: Record<number, FillBlankQ[]> = {
  3: [
    { sentence: "Koha është madhësi fizike ______ që tregon zgjatjen e një ngjarjeje.", answer: "skalare" },
    { sentence: "Njësia bazë e kohës në sistemin SI është ______.", answer: "sekonda" },
    { sentence: "Koha matet me instrumentin e quajtur ______.", answer: "kronometër" },
  ],
  4: [
    { sentence: "Intervali kohor është ndryshimi midis kohës përfundimtare dhe kohës ______.", answer: "fillestare" },
    { sentence: "Formula për intervalin kohor është Δt = t₂ - ______.", answer: "t₁" },
    { sentence: "Intervali kohor nuk mund të jetë asnjëherë ______.", answer: "negativ" },
  ],
  5: [
    { sentence: "Shpejtësia mesatare është raporti i rrugës së plotë me ______ e plotë.", answer: "kohën" },
    { sentence: "Formula e shpejtësisë mesatare është v = ______ / t.", answer: "s" },
    { sentence: "Njësia e shpejtësisë në SI është ______.", answer: "m/s" },
  ],
  6: [
    { sentence: "Shpejtësia e çastit është shpejtësia në një moment të ______ kohe.", answer: "caktuar" },
    { sentence: "Në makinë, shpejtësia e çastit tregohet nga ______.", answer: "takimetri" },
    { sentence: "Në lëvizjen e njëtrajtshme, shpejtësia e çastit është e ______ me shpejtësinë mesatare.", answer: "barabartë" },
  ],
  7: [
    { sentence: "Nxitimi tregon se sa shpejt ndryshon ______ e trupit.", answer: "shpejtësia" },
    { sentence: "Formula e nxitimit është a = Δv / ______.", answer: "Δt" },
    { sentence: "Njësia e nxitimit në sistemin SI është ______.", answer: "m/s²" },
  ],
  8: [
    { sentence: "Nxitimi i rënies së lirë shënohet me shkronjën ______.", answer: "g" },
    { sentence: "Vlera e nxitimit të rënies së lirë në Tokë është afërsisht ______ m/s².", answer: "9.8" },
    { sentence: "Në rënie të lirë, trupat lëvizin vetëm nën veprimin e forcës së ______.", answer: "rëndesës" },
  ]
};

export function generateFillBlanks(id: number): FillBlankQ[] {
  return fillData[id] || [];
}

// ===================== FAKTE & LLOGARITJE (MCQ) =====================
const mcqData: Record<number, McqQ[]> = {
  3: [
    { question: "Sa sekonda ka një orë?", options: ["60 s", "3600 s", "1000 s", "24 s"], correct: 1, solution: "1 orë = 60 minuta × 60 sekonda = 3600 s" },
    { question: "Cila është njësia bazë e kohës në SI?", options: ["Minuta", "Ora", "Sekonda", "Dita"], correct: 2, solution: "Në Sistemin Ndërkombëtar (SI), koha matet në sekonda (s)." },
  ],
  4: [
    { question: "Nëse një ngjarje fillon në t₁ = 2s dhe mbaron në t₂ = 7s, sa është intervali kohor?", options: ["9 s", "5 s", "3.5 s", "14 s"], correct: 1, solution: "Δt = t₂ - t₁ = 7s - 2s = 5s" },
    { question: "A mund të jetë intervali kohor negativ?", options: ["Po", "Jo", "Varet nga lëvizja", "Vetëm në hapësirë"], correct: 1, solution: "Koha ecën vetëm përpara, kështu që Δt është gjithmonë pozitiv." },
  ],
  5: [
    { question: "Një makinë përshkon 100 m për 5 s. Sa është shpejtësia mesatare?", options: ["20 m/s", "500 m/s", "105 m/s", "15 m/s"], correct: 0, solution: "v = s / t = 100 m / 5 s = 20 m/s" },
    { question: "Cila është njësia e shpejtësisë në SI?", options: ["km/h", "m/s", "cm/s", "m/s²"], correct: 1, solution: "Njësia standarde është metri për sekondë (m/s)." },
  ],
  6: [
    { question: "Çfarë tregon takimetri i makinës?", options: ["Shpejtësinë mesatare", "Shpejtësinë e çastit", "Nxitimin", "Rrugën e përshkruar"], correct: 1, solution: "Takimetri tregon shpejtësinë në atë moment të caktuar (shpejtësinë e çastit)." },
    { question: "Në lëvizjen drejtvizore të njëtrajtshme, shpejtësia e çastit është:", options: ["Më e madhe se shpejtësia mesatare", "Më e vogël se shpejtësia mesatare", "E barabartë me shpejtësinë mesatare", "Zero"], correct: 2, solution: "Meqë shpejtësia nuk ndryshon, vlera e saj në çdo çast është e njëjtë me mesataren." },
  ],
  7: [
    { question: "Një makinë rrit shpejtësinë nga 10 m/s në 30 m/s për 4 s. Sa është nxitimi?", options: ["5 m/s²", "10 m/s²", "20 m/s²", "40 m/s²"], correct: 0, solution: "a = (v - v₀) / t = (30 - 10) / 4 = 20 / 4 = 5 m/s²" },
    { question: "Cila është njësia e nxitimit në SI?", options: ["m/s", "km/h", "m/s²", "N/kg"], correct: 2, solution: "Nxitimi matet në metra për sekondë në katror (m/s²)." },
  ],
  8: [
    { question: "Sa është vlera e përafërt e nxitimit të rënies së lirë në Tokë?", options: ["9.8 m/s²", "1.6 m/s²", "100 m/s²", "0 m/s²"], correct: 0, solution: "Në sipërfaqen e Tokës, g ≈ 9.8 m/s²." },
    { question: "Në mungesë të rezistencës së ajrit, cili trup bie më shpejt: një pendë apo një gur?", options: ["Guri", "Penda", "Bien njëkohësisht", "Varet nga lartësia"], correct: 2, solution: "Të gjithë trupat bien me të njëjtin nxitim (g) në mungesë të rezistencës së ajrit." },
  ]
};

export function generateMcqs(id: number): McqQ[] {
  return mcqData[id] || [];
}

// ===================== LIDH ÇIFTET =====================
const matchContent: Record<number, MatchPair[]> = {
  3: [
    { left: "Koha", right: "Zgjatja e një ngjarjeje" },
    { left: "Sekonda (s)", right: "Njësia SI e kohës" },
    { left: "Kronometri", right: "Mjeti matës i kohës" },
    { left: "Skalare", right: "Koha ka vetëm vlerë numerike" },
  ],
  4: [
    { left: "Intervali kohor", right: "Δt = t₂ - t₁" },
    { left: "t₁", right: "Koha fillestare" },
    { left: "t₂", right: "Koha përfundimtare" },
    { left: "Pozitiv", right: "Vlera e intervalit kohor" },
  ],
  5: [
    { left: "Shpejtësia mesatare", right: "v = s / t" },
    { left: "m/s", right: "Njësia SI e shpejtësisë" },
    { left: "s", right: "Rruga e përshkruar" },
    { left: "t", right: "Koha e lëvizjes" },
  ],
  6: [
    { left: "Shpejtësia e çastit", right: "Shpejtësia në një moment" },
    { left: "Takimetri", right: "Mat shpejtësinë e çastit" },
    { left: "Lëvizje e njëtrajtshme", right: "Shpejtësia e çastit = Shpejtësia mesatare" },
    { left: "Vektoriale", right: "Shpejtësia ka drejtim dhe kah" },
  ],
  7: [
    { left: "Nxitimi", right: "Ndryshimi i shpejtësisë" },
    { left: "a = Δv / Δt", right: "Formula e nxitimit" },
    { left: "m/s²", right: "Njësia SI e nxitimit" },
    { left: "Nxitim negativ", right: "Frenim (ngadalësim)" },
  ],
  8: [
    { left: "g", right: "Nxitimi i rënies së lirë" },
    { left: "9.8 m/s²", right: "Vlera e g në Tokë" },
    { left: "Rënie e lirë", right: "Lëvizje vetëm nën ndikimin e rëndesës" },
    { left: "Galileo Galilei", right: "Studioi rënien e lirë" },
  ]
};

export function generateMatchPairs(id: number): MatchPair[] {
  return matchContent[id] || [];
}

// ===================== NDËRTO FORMULËN =====================
const buildContent: Record<number, { pieces: string[]; apps: { question: string; answer: string }[] }> = {
  3: { pieces: ["t", "=", "s", "/", "v"], apps: [
    { question: "s = 100 m, v = 20 m/s. Gjej kohën.", answer: "t = 100 / 20 = 5 s" },
  ]},
  4: { pieces: ["Δt", "=", "t₂", "-", "t₁"], apps: [
    { question: "t₁ = 3 s, t₂ = 8 s. Gjej Δt.", answer: "Δt = 8 - 3 = 5 s" },
  ]},
  5: { pieces: ["v", "=", "s", "/", "t"], apps: [
    { question: "s = 200 m, t = 10 s. Gjej v.", answer: "v = 200 / 10 = 20 m/s" },
  ]},
  6: { pieces: ["v", "=", "v₀", "+", "a", "t"], apps: [
    { question: "v₀ = 0, a = 2 m/s², t = 5 s. Gjej v.", answer: "v = 0 + 2 × 5 = 10 m/s" },
  ]},
  7: { pieces: ["a", "=", "(", "v", "-", "v₀", ")", "/", "t"], apps: [
    { question: "v₀ = 10 m/s, v = 30 m/s, t = 4 s. Gjej a.", answer: "a = (30 - 10) / 4 = 5 m/s²" },
  ]},
  8: { pieces: ["h", "=", "g", "t²", "/", "2"], apps: [
    { question: "g = 10 m/s², t = 3 s. Gjej h.", answer: "h = 10 × 3² / 2 = 45 m" },
  ]}
};

export function generateBuildFormula(id: number, termName: string, formula: string): BuildFormulaQ {
  const data = buildContent[id];
  if (!data) return { termName, formula, pieces: [formula], applications: [] };
  const shuffled = [...data.pieces].sort(() => Math.random() - 0.5);
  return { termName, formula, pieces: shuffled, applications: data.apps };
}

// ===================== E VËRTETË / E GABUAR =====================
const tfContent: Record<number, TrueFalseQ[]> = {
  3: [
    { statement: "Koha mund të rrjedhë mbrapsht.", correct: false, explanation: "Në fizikën klasike, koha ecën vetëm përpara." },
    { statement: "Njësia e kohës në SI është ora.", correct: false, explanation: "Njësia bazë është sekonda (s)." },
  ],
  4: [
    { statement: "Intervali kohor është gjithmonë pozitiv.", correct: true, explanation: "Koha përfundimtare është gjithmonë më e madhe se ajo fillestare." },
    { statement: "Intervali kohor matet me metra.", correct: false, explanation: "Matet me sekonda (s)." },
  ],
  5: [
    { statement: "Shpejtësia mesatare tregon shpejtësinë në çdo moment të lëvizjes.", correct: false, explanation: "Tregon vetëm mesataren e gjithë rrugës; shpejtësia mund të ketë ndryshuar." },
    { statement: "Nëse rruga është 0, shpejtësia mesatare është 0.", correct: true, explanation: "v = s / t. Nëse s = 0, atëherë v = 0." },
  ],
  6: [
    { statement: "Takimetri i makinës tregon shpejtësinë e çastit.", correct: true, explanation: "Tregon shpejtësinë pikërisht në atë moment." },
    { statement: "Shpejtësia e çastit është gjithmonë e barabartë me shpejtësinë mesatare.", correct: false, explanation: "Kjo ndodh vetëm në lëvizjen e njëtrajtshme." },
  ],
  7: [
    { statement: "Nxitimi tregon sa shpejt ndryshon shpejtësia.", correct: true, explanation: "Është raporti i ndryshimit të shpejtësisë me kohën." },
    { statement: "Kur makina frenon, nxitimi është pozitiv.", correct: false, explanation: "Gjatë frenimit, shpejtësia zvogëlohet, pra nxitimi është negativ." },
  ],
  8: [
    { statement: "Në rënie të lirë, trupat e rëndë bien më shpejt se të lehtët (pa ajër).", correct: false, explanation: "Të gjithë trupat bien me të njëjtin nxitim g." },
    { statement: "Nxitimi i rënies së lirë në Tokë është rreth 9.8 m/s².", correct: true, explanation: "Kjo është vlera mesatare në sipërfaqen e Tokës." },
  ]
};

export function generateTrueFalse(id: number): TrueFalseQ[] {
  return tfContent[id] || [];
}
