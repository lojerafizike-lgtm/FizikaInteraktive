import { FillBlankQ, McqQ, MatchPair, BuildFormulaQ, TrueFalseQ } from "./minigames";

// ===================== PLOTËSO FJALËN =====================
const fillData: Record<number, FillBlankQ[]> = {
  1: [
    { sentence: "Forca përkufizohet si masa e bashkëveprimit midis trupave që shkakton ndryshimin e gjendjes së lëvizjes ose ______ e trupit.", answer: "shformimin" },
    { sentence: "Sipas ligjit të dytë të Njutonit, përshpejtimi është në përpjesëtim të zhdrejtë me ______.", answer: "masën" },
    { sentence: "Nëse mbi një trup veprojnë disa forca, efekti i tyre përshkruhet nga forca ______, e cila është shuma vektoriale e tyre.", answer: "rezultante" },
    { sentence: "Njësia e forcës në SI është njuton (N), ku 1 N është forca që i jep një trupi me masë 1 kg një përshpejtim prej ______.", answer: "1 m/s²" },
  ],
  2: [
    { sentence: "Masa e trupit tregon sasinë e ______ që ai përmban.", answer: "lëndës" },
    { sentence: "Masa matet me ______ dhe njësia e saj në SI është kilogrami.", answer: "peshore" },
    { sentence: "Formula e masës është m = d × V, ku d përfaqëson ______ e trupit.", answer: "dendësinë" },
    { sentence: "Masa është madhësi ______, pra ka vetëm vlerë numerike.", answer: "skalare" },
  ],
  3: [
    { sentence: "Pesha është forca me të cilën trupi ______ mbi mbështetësen.", answer: "mëshon" },
    { sentence: "Pesha matet me ______ dhe njësia e saj është njutoni.", answer: "dinamometër" },
    { sentence: "Pesha e trupit varet nga ______ dhe nxitimi i rënies së lirë.", answer: "masa" },
    { sentence: "Në gjendje pashpeshësie, pesha e trupit është e barabartë me ______.", answer: "zero" },
  ],
  4: [
    { sentence: "Forca e rëndesës është forca me të cilën ______ tërheq trupat drejt qendrës së saj.", answer: "Toka" },
    { sentence: "Formula e forcës së rëndesës është G = ______.", answer: "mg" },
    { sentence: "Forca e rëndesës është gjithmonë e drejtuar ______ drejt qendrës së Tokës.", answer: "vertikalisht" },
    { sentence: "Nëse masa e trupit dyfishohet, forca e rëndesës ______.", answer: "dyfishohet" },
  ],
  5: [
    { sentence: "Forca e fërkimit lind gjatë sipërfaqes ______ të dy trupave.", answer: "fërkuese" },
    { sentence: "Forca e fërkimit gjithmonë e ______ lëvizjen e trupit.", answer: "kundërshton" },
    { sentence: "Formula e forcës së fërkimit është F_f = ______.", answer: "μN" },
    { sentence: "Sa më e ashpër sipërfaqja, aq më e ______ forca e fërkimit.", answer: "madhe" },
  ],
  6: [
    { sentence: "Koeficienti i fërkimit është madhësi ______ që tregon ashpërsinë e sipërfaqeve.", answer: "pa njësi" },
    { sentence: "Formula për llogaritjen e koeficientit të fërkimit është μ = ______.", answer: "F_f / N" },
    { sentence: "Koeficienti i fërkimit varet nga ______ e sipërfaqeve në kontakt.", answer: "natyra" },
    { sentence: "Nëse F_f = 30 N dhe N = 100 N, atëherë μ = ______.", answer: "0,3" },
  ],
  7: [
    { sentence: "Forca elastike lind në një trup të ______ dhe tenton ta kthejë në gjendjen fillestare.", answer: "shformuar" },
    { sentence: "Sipas ligjit të Hukut, forca elastike është proporcionale me ______.", answer: "zgjatjen" },
    { sentence: "Shenja negative në formulën F = -kx tregon se forca elastike ka drejtim ______ me zhvendosjen.", answer: "të kundërt" },
    { sentence: "Forca elastike matet me ______.", answer: "dinamometër" },
  ],
  8: [
    { sentence: "Konstanta elastike tregon ______ e trupit ndaj shformimit.", answer: "rezistencën" },
    { sentence: "Njësia e konstantës elastike në SI është ______.", answer: "N/m" },
    { sentence: "Sa më e madhe konstanta k, aq më i ______ është trupi.", answer: "ngurtë" },
    { sentence: "Nëse F = 60 N dhe x = 0,2 m, atëherë k = ______.", answer: "300 N/m" },
  ],
  9: [
    { sentence: "Forca qendërsynuese detyron trupin të lëvizë sipas një trajektoreje ______.", answer: "rrethore" },
    { sentence: "Formula e forcës qendërsynuese është F_c = ______.", answer: "mv²/r" },
    { sentence: "Forca qendërsynuese është gjithmonë e drejtuar drejt ______ të rrethit.", answer: "qendrës" },
    { sentence: "Nëse shpejtësia dyfishohet, forca qendërsynuese bëhet ______ herë më e madhe.", answer: "4" },
  ],
  10: [
    { sentence: "Forca gravitacionale është forca ______ universale midis dy trupave me masë.", answer: "tërheqëse" },
    { sentence: "Sipas ligjit të Njutonit, forca gravitacionale është proporcionale me prodhimin e ______.", answer: "masave" },
    { sentence: "Nëse largësia midis trupave dyfishohet, forca gravitacionale ______ 4 herë.", answer: "zvogëlohet" },
    { sentence: "Konstanta gravitacionale G ka vlerën ______.", answer: "6,67×10⁻¹¹" },
  ],
  11: [
    { sentence: "Impulsi i forcës është prodhimi i forcës me ______ e veprimit.", answer: "kohën" },
    { sentence: "Njësia e impulsit të forcës në SI është ______.", answer: "N·s" },
    { sentence: "Impulsi i forcës shkakton ndryshimin e ______ të trupit.", answer: "impulsit" },
    { sentence: "Nëse F = 50 N dhe Δt = 4 s, atëherë impulsi i forcës është ______.", answer: "200 N·s" },
  ],
  12: [
    { sentence: "Impulsi i trupit është prodhimi i masës me ______.", answer: "shpejtësinë" },
    { sentence: "Impulsi i trupit është madhësi ______ që ka drejtimin e shpejtësisë.", answer: "vektoriale" },
    { sentence: "Njësia e impulsit të trupit në SI është ______.", answer: "kg·m/s" },
    { sentence: "Nëse m = 5 kg dhe v = 10 m/s, impulsi i trupit është ______.", answer: "50 kg·m/s" },
  ],
  13: [
    { sentence: "Momenti i forcës mat aftësinë e forcës për të shkaktuar ______ e trupit.", answer: "rrotullimin" },
    { sentence: "Formula e momentit të forcës është M = ______.", answer: "Fd" },
    { sentence: "Njësia e momentit të forcës në SI është ______.", answer: "N·m" },
    { sentence: "Momenti i forcës varet nga madhësia e forcës dhe ______ i forcës.", answer: "krahu" },
  ],
  14: [
    { sentence: "Krahu i forcës është largësia më e ______ nga boshti i rrotullimit deri te vija e veprimit.", answer: "shkurtër" },
    { sentence: "Krahu i forcës shënohet me ______ dhe matet në metra.", answer: "d" },
    { sentence: "Sa më i gjatë krahu i forcës, aq më i ______ momenti.", answer: "madh" },
    { sentence: "Nëse forca kalon nëpër boshtin e rrotullimit, krahu i forcës është ______.", answer: "zero" },
  ],
  15: [
    { sentence: "Shtypja është forca që ushtrohet ______ mbi njësinë e sipërfaqes.", answer: "pingul" },
    { sentence: "Njësia e shtypjes në SI është ______ (Pa).", answer: "paskali" },
    { sentence: "Formula e shtypjes është P = ______.", answer: "F/S" },
    { sentence: "Nëse forca mbetet e njëjtë dhe sipërfaqja zvogëlohet, shtypja ______.", answer: "rritet" },
  ],
};

export function generateFillBlanks(id: number): FillBlankQ[] {
  return fillData[id] || [];
}

// ===================== FAKTE & LLOGARITJE (MCQ) =====================
const mcqData: Record<number, McqQ[]> = {
  1: [
    { question: "Një trup me masë 8 kg fillon të lëvizë me përshpejtim 2,5 m/s². Sa është forca?", options: ["10 N", "20 N", "32 N", "3,2 N"], correct: 1, solution: "F = m·a = 8 × 2,5 = 20 N" },
    { question: "Një forcë 45 N vepron mbi një trup 9 kg. Gjeni përshpejtimin.", options: ["5 m/s²", "4 m/s²", "0,2 m/s²", "54 m/s²"], correct: 0, solution: "a = F/m = 45/9 = 5 m/s²" },
  ],
  2: [
    { question: "Dendësia e ujit është 1000 kg/m³, vëllimi 0,5 m³. Sa është masa?", options: ["200 kg", "500 kg", "2000 kg", "50 kg"], correct: 1, solution: "m = d × V = 1000 × 0,5 = 500 kg" },
    { question: "Masa e trupit është 200 kg, vëllimi 0,1 m³. Gjeni dendësinë.", options: ["20 kg/m³", "200 kg/m³", "2000 kg/m³", "0,5 kg/m³"], correct: 2, solution: "d = m/V = 200/0,1 = 2000 kg/m³" },
  ],
  3: [
    { question: "Masa e trupit është 10 kg, g = 9,8 m/s². Sa është pesha?", options: ["98 N", "100 N", "9,8 N", "10 N"], correct: 0, solution: "P = mg = 10 × 9,8 = 98 N" },
    { question: "Pesha e trupit është 49 N. Gjeni masën (g = 9,8 m/s²).", options: ["4,9 kg", "5 kg", "10 kg", "49 kg"], correct: 1, solution: "m = P/g = 49/9,8 = 5 kg" },
  ],
  4: [
    { question: "Masa e trupit është 20 kg, g = 9,8 m/s². Sa është forca e rëndesës?", options: ["196 N", "200 N", "19,6 N", "2 N"], correct: 0, solution: "G = mg = 20 × 9,8 = 196 N" },
    { question: "Forca e rëndesës është 147 N, g = 9,8 m/s². Gjeni masën.", options: ["14,7 kg", "15 kg", "150 kg", "10 kg"], correct: 1, solution: "m = G/g = 147/9,8 = 15 kg" },
  ],
  5: [
    { question: "μ = 0,3 dhe N = 100 N. Sa është forca e fërkimit?", options: ["30 N", "33 N", "300 N", "3 N"], correct: 0, solution: "F_f = μN = 0,3 × 100 = 30 N" },
    { question: "F_f = 50 N, N = 200 N. Gjeni koeficientin e fërkimit.", options: ["0,25", "0,5", "4", "2,5"], correct: 0, solution: "μ = F_f/N = 50/200 = 0,25" },
  ],
  6: [
    { question: "F_f = 40 N, N = 160 N. Gjeni koeficientin e fërkimit.", options: ["0,25", "0,4", "4", "120 N"], correct: 0, solution: "μ = F_f/N = 40/160 = 0,25" },
    { question: "μ = 0,5 dhe N = 80 N. Gjeni forcën e fërkimit.", options: ["40 N", "160 N", "0,006 N", "80 N"], correct: 0, solution: "F_f = μ × N = 0,5 × 80 = 40 N" },
  ],
  7: [
    { question: "k = 200 N/m, x = 0,1 m. Sa është forca elastike?", options: ["20 N", "2000 N", "2 N", "0,5 N"], correct: 0, solution: "F = kx = 200 × 0,1 = 20 N" },
    { question: "F = 50 N, k = 250 N/m. Gjeni zgjatjen.", options: ["0,2 m", "5 m", "200 m", "12500 N"], correct: 0, solution: "x = F/k = 50/250 = 0,2 m" },
  ],
  8: [
    { question: "F = 100 N, x = 0,5 m. Gjeni konstantën elastike.", options: ["200 N/m", "50 N/m", "500 N/m", "0,005 N/m"], correct: 0, solution: "k = F/x = 100/0,5 = 200 N/m" },
    { question: "k = 300 N/m, x = 0,2 m. Gjeni forcën elastike.", options: ["60 N", "150 N", "1500 N", "6 N"], correct: 0, solution: "F = kx = 300 × 0,2 = 60 N" },
  ],
  9: [
    { question: "m = 2 kg, v = 10 m/s, r = 5 m. Sa është forca qendërsynuese?", options: ["40 N", "20 N", "100 N", "4 N"], correct: 0, solution: "F_c = mv²/r = 2 × 100/5 = 40 N" },
    { question: "F_c = 80 N, m = 4 kg, r = 2 m. Gjeni shpejtësinë.", options: ["≈ 6,3 m/s", "10 m/s", "40 m/s", "20 m/s"], correct: 0, solution: "v² = F_c·r/m = 80×2/4 = 40 → v ≈ 6,3 m/s" },
  ],
  10: [
    { question: "m₁ = 100 kg, m₂ = 200 kg, r = 1 m. Sa është F_G? (G = 6,67×10⁻¹¹)", options: ["1,33×10⁻⁶ N", "1,33 N", "6,67 N", "0 N"], correct: 0, solution: "F = G·m₁·m₂/r² = 6,67×10⁻¹¹ × 100 × 200/1 = 1,33×10⁻⁶ N" },
    { question: "Çfarë ndodh me F_G nëse largësia dyfishohet?", options: ["Zvogëlohet 4 herë", "Përgjysmohet", "Dyfishohet", "Mbetet njëlloj"], correct: 0, solution: "F ∝ 1/r², nëse r → 2r, atëherë F → F/4" },
  ],
  11: [
    { question: "F = 50 N, Δt = 2 s. Sa është impulsi i forcës?", options: ["100 N·s", "25 N·s", "52 N·s", "48 N·s"], correct: 0, solution: "Δp = F·Δt = 50 × 2 = 100 N·s" },
    { question: "Δp = 200 N·s, Δt = 4 s. Gjeni forcën.", options: ["50 N", "800 N", "196 N", "204 N"], correct: 0, solution: "F = Δp/Δt = 200/4 = 50 N" },
  ],
  12: [
    { question: "m = 3 kg, v = 8 m/s. Sa është impulsi i trupit?", options: ["24 kg·m/s", "11 kg·m/s", "5 kg·m/s", "0,375 kg·m/s"], correct: 0, solution: "p = mv = 3 × 8 = 24 kg·m/s" },
    { question: "p = 60 kg·m/s, m = 10 kg. Gjeni shpejtësinë.", options: ["6 m/s", "600 m/s", "50 m/s", "70 m/s"], correct: 0, solution: "v = p/m = 60/10 = 6 m/s" },
  ],
  13: [
    { question: "F = 40 N, d = 0,5 m. Sa është momenti i forcës?", options: ["20 N·m", "80 N·m", "0,0125 N·m", "40,5 N·m"], correct: 0, solution: "M = F·d = 40 × 0,5 = 20 N·m" },
    { question: "M = 30 N·m, F = 15 N. Gjeni krahun e forcës.", options: ["2 m", "450 m", "0,5 m", "15 m"], correct: 0, solution: "d = M/F = 30/15 = 2 m" },
  ],
  14: [
    { question: "M = 50 N·m, F = 25 N. Gjeni krahun e forcës.", options: ["2 m", "1250 m", "25 m", "0,5 m"], correct: 0, solution: "d = M/F = 50/25 = 2 m" },
    { question: "Nëse d rritet 2 herë dhe F mbetet njëlloj, çfarë ndodh me M?", options: ["Dyfishohet", "Përgjysmohet", "Mbetet njëlloj", "Katërfishohet"], correct: 0, solution: "M = F·d → nëse d → 2d, atëherë M → 2M" },
  ],
  15: [
    { question: "F = 200 N, S = 0,5 m². Sa është shtypja?", options: ["400 Pa", "100 Pa", "0,0025 Pa", "200,5 Pa"], correct: 0, solution: "P = F/S = 200/0,5 = 400 Pa" },
    { question: "P = 1000 Pa, S = 2 m². Gjeni forcën.", options: ["2000 N", "500 N", "0,002 N", "998 N"], correct: 0, solution: "F = P × S = 1000 × 2 = 2000 N" },
  ],
};

export function generateMcqs(id: number): McqQ[] {
  return mcqData[id] || [];
}

// ===================== LIDH ÇIFTET =====================
const matchContent: Record<number, MatchPair[]> = {
  1: [
    { left: "Forca", right: "Shkakton ndryshim lëvizjeje" },
    { left: "F = ma", right: "Ligji i dytë i Njutonit" },
    { left: "Newton", right: "Njësia SI e forcës" },
    { left: "Vektoriale", right: "Ka drejtim, kah dhe pikë veprimi" },
  ],
  2: [
    { left: "Masa", right: "Sasia e lëndës së trupit" },
    { left: "m = d × V", right: "Formula e masës" },
    { left: "kg", right: "Njësia SI e masës" },
    { left: "Skalare", right: "Ka vetëm vlerë numerike" },
  ],
  3: [
    { left: "Pesha", right: "Forca mbi mbështetësen" },
    { left: "P = mg", right: "Formula e peshës" },
    { left: "Dinamometri", right: "Mjeti matës i peshës" },
    { left: "N (Njuton)", right: "Njësia SI e peshës" },
  ],
  4: [
    { left: "G = mg", right: "Formula e forcës së rëndesës" },
    { left: "Rëndesa", right: "Tërheqja e Tokës" },
    { left: "Vertikale", right: "Drejtimi i forcës" },
    { left: "Vektoriale", right: "Lloji i madhësisë" },
  ],
  5: [
    { left: "Fërkimi", right: "Pengon rrëshqitjen" },
    { left: "F_f = μN", right: "Formula e fërkimit" },
    { left: "μ", right: "Koeficienti i fërkimit" },
    { left: "Sipërfaqja", right: "Ndikon në forcën e fërkimit" },
  ],
  6: [
    { left: "μ", right: "Koeficienti i fërkimit" },
    { left: "Pa njësi", right: "Karakteristikë e μ" },
    { left: "μ = F_f/N", right: "Formula e koeficientit" },
    { left: "Ashpërsia", right: "Varet nga sipërfaqja" },
  ],
  7: [
    { left: "F = -kx", right: "Ligji i Hukut" },
    { left: "Elastike", right: "Lloji i forcës" },
    { left: "Shformim", right: "Shkaku i forcës elastike" },
    { left: "-", right: "Drejtim i kundërt me zhvendosjen" },
  ],
  8: [
    { left: "k", right: "Konstanta elastike" },
    { left: "N/m", right: "Njësia SI e k" },
    { left: "k = F/x", right: "Formula e konstantës" },
    { left: "Ngurtësia", right: "Çfarë tregon k" },
  ],
  9: [
    { left: "F_c", right: "Forca qendërsynuese" },
    { left: "mv²/r", right: "Formula e F_c" },
    { left: "Qendra", right: "Drejtimi i F_c" },
    { left: "Rrethore", right: "Lloji i trajektores" },
  ],
  10: [
    { left: "F_G", right: "Forca gravitacionale" },
    { left: "G·m₁m₂/r²", right: "Formula e F_G" },
    { left: "6,67×10⁻¹¹", right: "Vlera e G" },
    { left: "Tërheqëse", right: "Natyra e forcës" },
  ],
  11: [
    { left: "Δp", right: "Impulsi i forcës" },
    { left: "F·Δt", right: "Formula e impulsit" },
    { left: "N·s", right: "Njësia SI" },
    { left: "Vektoriale", right: "Lloji i madhësisë" },
  ],
  12: [
    { left: "p = mv", right: "Formula e impulsit të trupit" },
    { left: "kg·m/s", right: "Njësia SI e impulsit" },
    { left: "Impulsi", right: "Sasia e lëvizjes" },
    { left: "Shpejtësia", right: "Drejtimi i impulsit" },
  ],
  13: [
    { left: "M = Fd", right: "Formula e momentit" },
    { left: "N·m", right: "Njësia SI e momentit" },
    { left: "Rrotullimi", right: "Efekti i momentit" },
    { left: "Boshti", right: "Pika e rrotullimit" },
  ],
  14: [
    { left: "d", right: "Simboli i krahut të forcës" },
    { left: "m (metër)", right: "Njësia e krahut" },
    { left: "Pingulja", right: "Largësia më e shkurtër" },
    { left: "Boshti", right: "Nga ku matet krahu" },
  ],
  15: [
    { left: "P = F/S", right: "Formula e shtypjes" },
    { left: "Pa (Paskal)", right: "Njësia SI e shtypjes" },
    { left: "Pingul", right: "Drejtimi i forcës mbi sipërfaqen" },
    { left: "1 Pa", right: "= 1 N/m²" },
  ],
};

export function generateMatchPairs(id: number): MatchPair[] {
  return matchContent[id] || [];
}

// ===================== NDËRTO FORMULËN =====================
const buildContent: Record<number, { pieces: string[]; apps: { question: string; answer: string }[] }> = {
  1: { pieces: ["F", "=", "m", "·", "a"], apps: [
    { question: "m = 12 kg, a = 3 m/s². Gjej forcën.", answer: "F = 12 × 3 = 36 N" },
    { question: "F = 100 N, m = 20 kg. Gjej përshpejtimin.", answer: "a = F/m = 100/20 = 5 m/s²" },
  ]},
  2: { pieces: ["m", "=", "d", "×", "V"], apps: [
    { question: "d = 1000 kg/m³, V = 0,5 m³. Gjej masën.", answer: "m = 1000 × 0,5 = 500 kg" },
    { question: "m = 200 kg, V = 0,1 m³. Gjej dendësinë.", answer: "d = m/V = 200/0,1 = 2000 kg/m³" },
  ]},
  3: { pieces: ["P", "=", "m", "g"], apps: [
    { question: "m = 10 kg, g = 9,8 m/s². Gjej peshën.", answer: "P = 10 × 9,8 = 98 N" },
    { question: "P = 49 N. Gjej masën (g = 9,8).", answer: "m = P/g = 49/9,8 = 5 kg" },
  ]},
  4: { pieces: ["G", "=", "m", "g"], apps: [
    { question: "m = 20 kg, g = 9,8 m/s². Gjej G.", answer: "G = 20 × 9,8 = 196 N" },
    { question: "G = 147 N. Gjej masën.", answer: "m = G/g = 147/9,8 = 15 kg" },
  ]},
  5: { pieces: ["F_f", "=", "μ", "N"], apps: [
    { question: "μ = 0,3, N = 100 N. Gjej F_f.", answer: "F_f = 0,3 × 100 = 30 N" },
    { question: "F_f = 50 N, N = 200 N. Gjej μ.", answer: "μ = 50/200 = 0,25" },
  ]},
  6: { pieces: ["μ", "=", "F_f", "/", "N"], apps: [
    { question: "F_f = 40 N, N = 160 N. Gjej μ.", answer: "μ = 40/160 = 0,25" },
    { question: "μ = 0,5, N = 80 N. Gjej F_f.", answer: "F_f = 0,5 × 80 = 40 N" },
  ]},
  7: { pieces: ["F", "=", "-", "k", "x"], apps: [
    { question: "k = 200 N/m, x = 0,1 m. Gjej F.", answer: "F = 200 × 0,1 = 20 N" },
    { question: "F = 50 N, k = 250 N/m. Gjej x.", answer: "x = F/k = 50/250 = 0,2 m" },
  ]},
  8: { pieces: ["k", "=", "F", "/", "x"], apps: [
    { question: "F = 100 N, x = 0,5 m. Gjej k.", answer: "k = 100/0,5 = 200 N/m" },
    { question: "k = 300 N/m, x = 0,2 m. Gjej F.", answer: "F = 300 × 0,2 = 60 N" },
  ]},
  9: { pieces: ["F_c", "=", "m", "v²", "/", "r"], apps: [
    { question: "m = 2 kg, v = 10 m/s, r = 5 m. Gjej F_c.", answer: "F_c = 2 × 100/5 = 40 N" },
    { question: "F_c = 80 N, m = 4 kg, r = 2 m. Gjej v.", answer: "v² = 80×2/4 = 40 → v ≈ 6,3 m/s" },
  ]},
  10: { pieces: ["F", "=", "G", "(m₁m₂)", "/", "r²"], apps: [
    { question: "m₁=100 kg, m₂=200 kg, r=1 m. Gjej F_G.", answer: "F = 6,67×10⁻¹¹ × 100 × 200 = 1,33×10⁻⁶ N" },
    { question: "Çfarë ndodh nëse r dyfishohet?", answer: "F zvogëlohet 4 herë (F ∝ 1/r²)" },
  ]},
  11: { pieces: ["Δp", "=", "F", "Δt"], apps: [
    { question: "F = 50 N, Δt = 2 s. Gjej Δp.", answer: "Δp = 50 × 2 = 100 N·s" },
    { question: "Δp = 200 N·s, Δt = 4 s. Gjej F.", answer: "F = 200/4 = 50 N" },
  ]},
  12: { pieces: ["p", "=", "m", "v"], apps: [
    { question: "m = 3 kg, v = 8 m/s. Gjej p.", answer: "p = 3 × 8 = 24 kg·m/s" },
    { question: "p = 60 kg·m/s, m = 10 kg. Gjej v.", answer: "v = 60/10 = 6 m/s" },
  ]},
  13: { pieces: ["M", "=", "F", "d"], apps: [
    { question: "F = 40 N, d = 0,5 m. Gjej M.", answer: "M = 40 × 0,5 = 20 N·m" },
    { question: "M = 30 N·m, F = 15 N. Gjej d.", answer: "d = 30/15 = 2 m" },
  ]},
  14: { pieces: ["d"], apps: [
    { question: "M = 50 N·m, F = 25 N. Gjej d.", answer: "d = M/F = 50/25 = 2 m" },
    { question: "Nëse d dyfishohet dhe F njëlloj, çfarë ndodh me M?", answer: "M dyfishohet (M = Fd)" },
  ]},
  15: { pieces: ["P", "=", "F", "/", "S"], apps: [
    { question: "F = 200 N, S = 0,5 m². Gjej P.", answer: "P = 200/0,5 = 400 Pa" },
    { question: "P = 1000 Pa, S = 2 m². Gjej F.", answer: "F = P × S = 1000 × 2 = 2000 N" },
  ]},
};

export function generateBuildFormula(id: number, termName: string, formula: string): BuildFormulaQ {
  const data = buildContent[id];
  if (!data) return { termName, formula, pieces: [formula], applications: [] };
  const shuffled = [...data.pieces].sort(() => Math.random() - 0.5);
  return { termName, formula, pieces: shuffled, applications: data.apps };
}

// ===================== E VËRTETË / E GABUAR =====================
const tfContent: Record<number, TrueFalseQ[]> = {
  1: [
    { statement: "Nëse forca rezultante është zero, trupi nuk lëviz.", correct: false, explanation: "Mund të lëvizë me shpejtësi konstante (ligji i parë i Njutonit)." },
    { statement: "Përshpejtimi ka gjithmonë të njëjtin drejtim me forcën rezultante.", correct: true, explanation: "Sipas ligjit të dytë, a = F/m, pra kanë të njëjtin drejtim." },
    { statement: "Dyfishimi i masës, me forcë konstante, përgjysmon përshpejtimin.", correct: true, explanation: "a = F/m → nëse m → 2m, atëherë a → a/2." },
    { statement: "Forca është madhësi skalare.", correct: false, explanation: "Forca është madhësi vektoriale — ka vlerë, drejtim dhe kah." },
    { statement: "Një trup me masë më të madhe kërkon forcë më të madhe për të njëjtin përshpejtim.", correct: true, explanation: "F = ma, pra masa më e madhe kërkon forcë më të madhe." },
    { statement: "Njësia e forcës është kg.", correct: false, explanation: "Njësia e forcës është N (njuton), jo kg." },
    { statement: "Forca mund të ndryshojë vetëm shpejtësinë, jo drejtimin.", correct: false, explanation: "Forca mund të ndryshojë edhe drejtimin e lëvizjes." },
    { statement: "Forca rezultante është shuma algjebrike e forcave kolineare.", correct: true, explanation: "Kur forcat janë në të njëjtën vijë, mblidhen algjebrikishtë." },
    { statement: "Në mungesë të forcës, trupi ndalon.", correct: false, explanation: "Sipas ligjit të parë, trupi ruan gjendjen e lëvizjes." },
    { statement: "Forca mund të shkaktojë edhe shformim.", correct: true, explanation: "Po, forca shkakton ndryshim lëvizjeje ose shformim." },
  ],
  2: [
    { statement: "Masa ndryshon kur trupi ndodhet në Hënë.", correct: false, explanation: "Masa mbetet e njëjtë kudo; ndryshon pesha." },
    { statement: "Masa matet me peshore.", correct: true, explanation: "Po, peshorja mat masën e trupit." },
    { statement: "Njësia SI e masës është grami.", correct: false, explanation: "Njësia SI është kilogrami (kg), jo grami." },
    { statement: "Masa është madhësi vektoriale.", correct: false, explanation: "Masa është madhësi skalare — ka vetëm vlerë numerike." },
    { statement: "Masa tregon inertësinë e trupit.", correct: true, explanation: "Po, sa më e madhe masa, aq më i madh rezistenca ndaj ndryshimit." },
    { statement: "Dendësia e ujit është 1000 kg/m³.", correct: true, explanation: "Po, dendësia e ujit të pastër është afërsisht 1000 kg/m³." },
    { statement: "Masa e trupit mund të jetë negative.", correct: false, explanation: "Masa është gjithmonë pozitive." },
    { statement: "1 ton = 1000 kg.", correct: true, explanation: "Po, 1 tonë = 1000 kilogramë." },
    { statement: "Masa varet nga forca gravitacionale.", correct: false, explanation: "Masa nuk varet nga gravitetit; është veti e trupit." },
    { statement: "Dendësia llogaritet me formulën d = m/V.", correct: true, explanation: "Po, dendësia = masa / vëllimi." },
  ],
  3: [
    { statement: "Pesha dhe forca e rëndesës janë e njëjta gjë.", correct: false, explanation: "Pesha është forca mbi mbështetësen; rëndesa është tërheqja e Tokës." },
    { statement: "Pesha matet me dinamometër.", correct: true, explanation: "Po, dinamometri mat forcën, pra edhe peshën." },
    { statement: "Pesha e trupit në Hënë është e njëjtë me atë në Tokë.", correct: false, explanation: "Pesha ndryshon sipas g; në Hënë g ≈ 1,6 m/s²." },
    { statement: "Pesha ka drejtim dhe kah.", correct: true, explanation: "Po, pesha është madhësi vektoriale." },
    { statement: "Në gjendje pashpeshësie, pesha është zero.", correct: true, explanation: "Po, në rënie të lirë trupi nuk mëshon mbi mbështetësen." },
    { statement: "Njësia e peshës është kilogrami.", correct: false, explanation: "Njësia e peshës është njutoni (N)." },
    { statement: "Pesha është gjithmonë e drejtuar poshtë.", correct: true, explanation: "Po, pesha drejtohet nga trupi drejt mbështetëses." },
    { statement: "Pesha varet nga masa dhe nxitimi i rënies.", correct: true, explanation: "Po, P = mg." },
    { statement: "Dy trupa me masë të njëjtë kanë gjithmonë peshë të njëjtë.", correct: false, explanation: "Vetëm nëse ndodhen në të njëjtin vend (i njëjti g)." },
    { statement: "Pesha mund të jetë negative.", correct: false, explanation: "Pesha si madhësi ka vlerë pozitive." },
  ],
  4: [
    { statement: "Forca e rëndesës vepron vetëm në sipërfaqen e Tokës.", correct: false, explanation: "Ajo vepron edhe lart sipërfaqes, por zvogëlohet me largësinë." },
    { statement: "Forca e rëndesës është gjithmonë e drejtuar drejt qendrës së Tokës.", correct: true, explanation: "Po, G drejtohet vertikalisht poshtë." },
    { statement: "G = mg ku g ≈ 9,8 m/s².", correct: true, explanation: "Po, kjo është formula e forcës së rëndesës." },
    { statement: "Forca e rëndesës nuk varet nga masa e trupit.", correct: false, explanation: "G = mg, pra varet drejtpërdrejt nga masa." },
    { statement: "Nxitimi i rënies së lirë është i njëjtë për të gjithë trupat.", correct: true, explanation: "Po, g nuk varet nga masa e trupit (pa rezistencë ajrore)." },
    { statement: "Forca e rëndesës është madhësi skalare.", correct: false, explanation: "Është madhësi vektoriale." },
    { statement: "Në Hënë, g ≈ 1,6 m/s².", correct: true, explanation: "Po, nxitimi i rënies në Hënë është ≈ 1,6 m/s²." },
    { statement: "Forca e rëndesës dhe pesha kanë gjithmonë vlerë të njëjtë.", correct: false, explanation: "Vetëm kur trupi është në prehje mbi mbështetëse horizontale." },
    { statement: "Nëse masa dyfishohet, G dyfishohet.", correct: true, explanation: "G = mg, pra G ∝ m." },
    { statement: "Rëndesa vepron vetëm mbi trupa të rëndë.", correct: false, explanation: "Rëndesa vepron mbi çdo trup me masë." },
  ],
  5: [
    { statement: "Forca e fërkimit gjithmonë e kundërshton lëvizjen.", correct: true, explanation: "Po, fërkimi vepron në drejtim të kundërt me lëvizjen." },
    { statement: "Fërkimi varet nga sipërfaqja e kontaktit.", correct: false, explanation: "Fërkimi varet nga natyra e sipërfaqeve dhe forca normale, jo nga madhësia." },
    { statement: "Pa fërkim nuk do të mund të ecnim.", correct: true, explanation: "Po, fërkimi mundëson ecjen duke penguar rrëshqitjen." },
    { statement: "Forca e fërkimit është gjithmonë e dëmshme.", correct: false, explanation: "Fërkimi mund të jetë edhe i dobishëm (ecja, frenimi)." },
    { statement: "F_f = μN.", correct: true, explanation: "Po, kjo është formula e forcës së fërkimit." },
    { statement: "Forca e fërkimit nuk varet nga forca normale.", correct: false, explanation: "Varet drejtpërdrejt: F_f = μN." },
    { statement: "Fërkimi statik është më i madh se fërkimi kinetik.", correct: true, explanation: "Po, koeficienti i fërkimit statik > kinetik." },
    { statement: "Fërkimi zvogëlohet me lubrifikantë.", correct: true, explanation: "Po, vajrat zvogëlojnë fërkimin." },
    { statement: "Forca e fërkimit është madhësi skalare.", correct: false, explanation: "Është madhësi vektoriale." },
    { statement: "Fërkimi vepron vetëm kur trupi lëviz.", correct: false, explanation: "Ekziston edhe fërkimi statik kur trupi nuk lëviz." },
  ],
  6: [
    { statement: "Koeficienti i fërkimit ka njësi.", correct: false, explanation: "μ është madhësi pa njësi." },
    { statement: "μ varet nga natyra e sipërfaqeve.", correct: true, explanation: "Po, sipërfaqet e ndryshme kanë μ të ndryshëm." },
    { statement: "μ mund të jetë më i madh se 1.", correct: true, explanation: "Po, disa materiale kanë μ > 1 (p.sh., goma mbi asfalt)." },
    { statement: "μ = F_f / N.", correct: true, explanation: "Po, kjo është formula e koeficientit të fërkimit." },
    { statement: "Sa më i lëmuar sipërfaqja, aq më i madh μ.", correct: false, explanation: "Sa më e lëmuar, aq më i vogël μ." },
    { statement: "Koeficienti i fërkimit statik është më i vogël se ai kinetik.", correct: false, explanation: "Koeficienti statik është zakonisht më i madh." },
    { statement: "μ varet nga madhësia e sipërfaqes së kontaktit.", correct: false, explanation: "μ nuk varet nga sipërfaqja e kontaktit." },
    { statement: "Nëse F_f = 20 N dhe N = 80 N, atëherë μ = 0,25.", correct: true, explanation: "μ = 20/80 = 0,25." },
    { statement: "Koeficienti i fërkimit është gjithmonë pozitiv.", correct: true, explanation: "Po, μ ≥ 0." },
    { statement: "μ ndryshon me shpejtësinë e lëvizjes.", correct: false, explanation: "Në modelin bazë, μ nuk varet nga shpejtësia." },
  ],
  7: [
    { statement: "Forca elastike vepron në drejtim të kundërt me zhvendosjen.", correct: true, explanation: "Po, shenja minus në F = -kx tregon këtë." },
    { statement: "Ligji i Hukut vlen për çdo shformim.", correct: false, explanation: "Vlen vetëm për shformime elastike (brenda kufirit elastik)." },
    { statement: "Forca elastike tenton ta kthejë trupin në gjendjen fillestare.", correct: true, explanation: "Po, kjo është vetia kryesore e forcës elastike." },
    { statement: "Njësia e forcës elastike është N/m.", correct: false, explanation: "Njësia e forcës elastike është N (njuton); N/m është njësia e k." },
    { statement: "Sa më e madhe zgjatja, aq më e madhe forca elastike.", correct: true, explanation: "F = kx, pra F ∝ x." },
    { statement: "Forca elastike është madhësi skalare.", correct: false, explanation: "Forca elastike është madhësi vektoriale." },
    { statement: "Susta e fortë ka konstantë k më të madhe.", correct: true, explanation: "Po, k e madhe do të thotë rezistencë më e lartë ndaj shformimit." },
    { statement: "Forca elastike lind vetëm në susta.", correct: false, explanation: "Lind në çdo trup që shformohet elastikisht." },
    { statement: "Pas kufirit elastik, trupi kthehet në formën fillestare.", correct: false, explanation: "Pas kufirit elastik ndodh shformimi plastik." },
    { statement: "k = F/x.", correct: true, explanation: "Po, konstanta llogaritet nga raporti i forcës me zgjatjen." },
  ],
  8: [
    { statement: "Konstanta elastike ka njësinë N/m.", correct: true, explanation: "Po, k matet në njuton për metër." },
    { statement: "Sa më e madhe k, aq më lehtë shformohet trupi.", correct: false, explanation: "Sa më e madhe k, aq më vështirë shformohet (më i ngurtë)." },
    { statement: "Konstanta elastike varet nga materiali i sustës.", correct: true, explanation: "Po, materiale të ndryshme kanë k të ndryshëm." },
    { statement: "Nëse F dyfishohet dhe x mbetet njëlloj, k dyfishohet.", correct: true, explanation: "k = F/x, nëse F → 2F, atëherë k → 2k." },
    { statement: "Konstanta elastike është madhësi vektoriale.", correct: false, explanation: "k është madhësi skalare." },
    { statement: "k varet nga gjatësia e sustës.", correct: true, explanation: "Po, sustat më të shkurtra kanë zakonisht k më të madhe." },
    { statement: "k është gjithmonë pozitive.", correct: true, explanation: "Po, k > 0 gjithmonë." },
    { statement: "Dy susta paralele kanë k_total = k₁ + k₂.", correct: true, explanation: "Po, në lidhje paralele konstantat mblidhen." },
    { statement: "k matet me dinamometër.", correct: false, explanation: "k llogaritet nga matja e F dhe x." },
    { statement: "Nëse k = 500 N/m dhe x = 0,04 m, atëherë F = 20 N.", correct: true, explanation: "F = kx = 500 × 0,04 = 20 N." },
  ],
  9: [
    { statement: "Forca qendërsynuese drejtohet drejt qendrës së rrethit.", correct: true, explanation: "Po, F_c është gjithmonë drejt qendrës." },
    { statement: "Forca qendërsynuese është një forcë e veçantë e natyrës.", correct: false, explanation: "Nuk është forcë e veçantë; mund të jetë rëndesa, fërkimi etj." },
    { statement: "Nëse shpejtësia dyfishohet, F_c katërfishohet.", correct: true, explanation: "F_c = mv²/r, pra F_c ∝ v²." },
    { statement: "F_c = mv²/r.", correct: true, explanation: "Po, kjo është formula e forcës qendërsynuese." },
    { statement: "Forca qendërsynuese mund të jetë zero gjatë lëvizjes rrethore.", correct: false, explanation: "Nëse F_c = 0, trupi nuk lëviz rrethor." },
    { statement: "Sa më i madh rrezja, aq më e madhe F_c (me v konstante).", correct: false, explanation: "F_c = mv²/r, pra F_c zvogëlohet kur r rritet." },
    { statement: "Forca qendërsynuese bën punë mbi trupin.", correct: false, explanation: "F_c është pingule me shpejtësinë, pra nuk bën punë." },
    { statement: "Satelitët rrethorë kanë F_c = F_G.", correct: true, explanation: "Po, graviteti siguron forcën qendërsynuese." },
    { statement: "Forca qendërsynuese është madhësi vektoriale.", correct: true, explanation: "Po, ka drejtim drejt qendrës." },
    { statement: "Nëse masa përgjysmohet, F_c përgjysmohet.", correct: true, explanation: "F_c = mv²/r, pra F_c ∝ m." },
  ],
  10: [
    { statement: "Forca gravitacionale është gjithmonë tërheqëse.", correct: true, explanation: "Po, graviteti vetëm tërheq, nuk shtyn." },
    { statement: "Forca gravitacionale vepron vetëm në distanca të shkurtra.", correct: false, explanation: "Vepron në çdo largësi, por zvogëlohet me r²." },
    { statement: "Nëse largësia trefishohet, F_G zvogëlohet 9 herë.", correct: true, explanation: "F ∝ 1/r², pra 3² = 9 herë." },
    { statement: "Konstanta G ndryshon nga planeti.", correct: false, explanation: "G është konstante universale, e njëjtë kudo." },
    { statement: "Dy trupa me masë tërheqin njëri-tjetrin.", correct: true, explanation: "Po, sipas ligjit të gravitacionit universal." },
    { statement: "Forca gravitacionale varet nga madhësia e trupave.", correct: false, explanation: "Varet nga masa, jo nga madhësia fizike." },
    { statement: "F_G = G·m₁·m₂/r².", correct: true, explanation: "Po, kjo është formula e ligjit të gravitacionit." },
    { statement: "Forca gravitacionale midis dy njerëzve është e papërfillshme.", correct: true, explanation: "Po, masat janë shumë të vogla krahasuar me trupat qiellorë." },
    { statement: "Forca gravitacionale është madhësi skalare.", correct: false, explanation: "Është madhësi vektoriale." },
    { statement: "G = 6,67 × 10⁻¹¹ N·m²/kg².", correct: true, explanation: "Po, kjo është vlera e konstantës gravitacionale." },
  ],
  11: [
    { statement: "Impulsi i forcës mat efektin e forcës gjatë kohës.", correct: true, explanation: "Po, Δp = F·Δt." },
    { statement: "Njësia e impulsit të forcës është kg.", correct: false, explanation: "Njësia është N·s (ose kg·m/s)." },
    { statement: "Impulsi i forcës shkakton ndryshimin e impulsit të trupit.", correct: true, explanation: "Po, Δp = F·Δt = Δ(mv)." },
    { statement: "Nëse forca dyfishohet dhe koha përgjysmohet, impulsi mbetet njëlloj.", correct: true, explanation: "Δp = F·Δt = 2F × Δt/2 = F·Δt." },
    { statement: "Impulsi i forcës është madhësi skalare.", correct: false, explanation: "Impulsi i forcës është madhësi vektoriale." },
    { statement: "Airbag-u rrit kohën e goditjes duke zvogëluar forcën.", correct: true, explanation: "Δp = F·Δt: nëse Δt rritet, F zvogëlohet." },
    { statement: "Impulsi i forcës mund të jetë zero.", correct: true, explanation: "Po, nëse F = 0 ose Δt = 0." },
    { statement: "Dy forca të ndryshme nuk mund të japin të njëjtin impuls.", correct: false, explanation: "Po, nëse F₁·Δt₁ = F₂·Δt₂." },
    { statement: "Impulsi i forcës ka të njëjtin drejtim me forcën.", correct: true, explanation: "Po, Δp = F·Δt ka drejtimin e F." },
    { statement: "Nëse F = 100 N dhe Δt = 0,5 s, impulsi = 200 N·s.", correct: false, explanation: "Δp = 100 × 0,5 = 50 N·s." },
  ],
  12: [
    { statement: "Impulsi i trupit ka drejtimin e shpejtësisë.", correct: true, explanation: "Po, p = mv ka drejtimin e v." },
    { statement: "Impulsi i trupit në prehje është zero.", correct: true, explanation: "Po, nëse v = 0, atëherë p = 0." },
    { statement: "Njësia e impulsit është N·m.", correct: false, explanation: "Njësia është kg·m/s (ose N·s)." },
    { statement: "Ligji i ruajtjes së impulsit vlen vetëm në sisteme të mbyllura.", correct: true, explanation: "Po, impulsi ruhet vetëm kur forca e jashtme = 0." },
    { statement: "Dy trupa me masë dhe shpejtësi të ndryshme mund të kenë impuls të njëjtë.", correct: true, explanation: "Po, nëse m₁v₁ = m₂v₂." },
    { statement: "Impulsi i trupit është madhësi skalare.", correct: false, explanation: "Impulsi është madhësi vektoriale." },
    { statement: "Pas goditjes elastike, impulsi total ruhet.", correct: true, explanation: "Po, impulsi ruhet në çdo lloj goditjeje." },
    { statement: "Nëse shpejtësia dyfishohet, impulsi dyfishohet.", correct: true, explanation: "p = mv, pra p ∝ v." },
    { statement: "Impulsi i trupit matet me dinamometër.", correct: false, explanation: "Impulsi llogaritet nga p = mv." },
    { statement: "Në goditje, impulsi total para = impulsi total pas.", correct: true, explanation: "Po, ky është ligji i ruajtjes së impulsit." },
  ],
  13: [
    { statement: "Momenti i forcës shkakton rrotullimin e trupit.", correct: true, explanation: "Po, momenti mat aftësinë rrotulluese." },
    { statement: "Njësia e momentit është N/m.", correct: false, explanation: "Njësia është N·m, jo N/m." },
    { statement: "Nëse forca kalon nëpër bosht, momenti është zero.", correct: true, explanation: "Po, sepse d = 0, pra M = 0." },
    { statement: "Momenti i forcës varet vetëm nga forca.", correct: false, explanation: "Varet edhe nga krahu i forcës: M = Fd." },
    { statement: "Kushti i ekuilibrit të rrotullimit është ΣM = 0.", correct: true, explanation: "Po, shuma e momenteve duhet të jetë zero." },
    { statement: "Momenti i forcës është madhësi skalare.", correct: false, explanation: "Është madhësi vektoriale." },
    { statement: "Sa më i gjatë krahu, aq më i madh momenti.", correct: true, explanation: "M = Fd, pra M ∝ d." },
    { statement: "Momenti rrotullues pozitiv ka kah kundërorar.", correct: true, explanation: "Zakonisht, drejtimi kundërorar merret pozitiv." },
    { statement: "Dy forca të barabarta prodhojnë gjithmonë moment të njëjtë.", correct: false, explanation: "Vetëm nëse kanë krahë të njëjtë." },
    { statement: "Çelësi i dado-s punon sipas parimit të momentit.", correct: true, explanation: "Po, krahu i gjatë rrit momentin e forcës." },
  ],
  14: [
    { statement: "Krahu i forcës është largësia nga boshti deri te pika e veprimit.", correct: false, explanation: "Është pingulja nga boshti deri te vija e veprimit, jo pika." },
    { statement: "Krahu i forcës matet në metra.", correct: true, explanation: "Po, njësia SI është metri." },
    { statement: "Nëse forca ndryshon drejtimin, krahu mund të ndryshojë.", correct: true, explanation: "Po, krahu varet nga drejtimi i vijës së veprimit." },
    { statement: "Krahu i forcës është gjithmonë pozitiv.", correct: true, explanation: "Po, largësia është gjithmonë ≥ 0." },
    { statement: "Krahu i forcës është madhësi vektoriale.", correct: false, explanation: "Krahu i forcës është madhësi skalare (largësi)." },
    { statement: "Sa më i madh krahu, aq më e lehtë rrotullimi.", correct: true, explanation: "Momenti rritet me krahun, pra duhet më pak forcë." },
    { statement: "Dy forca me krahë të ndryshme japin gjithmonë momente të ndryshme.", correct: false, explanation: "Jo, nëse F₁d₁ = F₂d₂, momentet janë të njëjta." },
    { statement: "Krahu i forcës mund të jetë zero.", correct: true, explanation: "Po, kur forca kalon nëpër boshtin e rrotullimit." },
    { statement: "Krahu i forcës varet nga pozicioni i boshtit.", correct: true, explanation: "Po, ndryshimi i boshtit ndryshon krahun." },
    { statement: "Krahu i forcës matet me dinamometër.", correct: false, explanation: "Matet me vizore ose metër." },
  ],
  15: [
    { statement: "Shtypja rritet kur sipërfaqja zvogëlohet.", correct: true, explanation: "P = F/S, nëse S zvogëlohet, P rritet." },
    { statement: "Njësia SI e shtypjes është N.", correct: false, explanation: "Njësia SI është Pa (Paskal), jo N." },
    { statement: "1 Pa = 1 N/m².", correct: true, explanation: "Po, kjo është përkufizimi i paskalit." },
    { statement: "Shtypja është madhësi vektoriale.", correct: false, explanation: "Shtypja është madhësi skalare." },
    { statement: "Thika pret sepse ka sipërfaqe të vogël kontakti.", correct: true, explanation: "Po, sipërfaqja e vogël rrit shtypjen." },
    { statement: "Shtypja atmosferike vepron vetëm nga lart.", correct: false, explanation: "Vepron nga të gjitha drejtimet." },
    { statement: "Nëse forca dyfishohet dhe sipërfaqja mbetet njëlloj, shtypja dyfishohet.", correct: true, explanation: "P = F/S, pra P ∝ F." },
    { statement: "Shtypja e lëngut rritet me thellësinë.", correct: true, explanation: "Po, P = ρgh, pra P ∝ h." },
    { statement: "1 atm ≈ 101325 Pa.", correct: true, explanation: "Po, kjo është vlera e shtypjes atmosferike standarde." },
    { statement: "Shtypja nuk varet nga sipërfaqja.", correct: false, explanation: "Varet drejtpërdrejt: P = F/S." },
  ],
};

export function generateTrueFalse(id: number): TrueFalseQ[] {
  return tfContent[id] || [];
}
