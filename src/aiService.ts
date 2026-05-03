
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleGenAI } from "@google/genai";

export async function askAlbertEinstein(term: string, context: string, userMessage: string, retryWithFlash = false): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const response = await ai.models.generateContent({
      model: retryWithFlash ? "gemini-1.5-flash" : "gemini-3.1-pro-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Ti je Albert Einstein, fizikani gjenial. 
        Shpjego në mënyrë të thjeshtë, interaktive dhe me humorin tënd karakteristik termat e fizikës. 
        Përdor një gjuhë inkurajuese dhe shkencore por të kuptueshme për nxënësit. 
        Termi për të cilin po flasim është: ${term}. 
        Përshkrimi i tij është: ${context}.
        Përgjigju vetëm në gjuhën shqipe.`,
        temperature: 0.8,
      },
    });

    return response.text || "Nuk u mor asnjë përgjigje.";
  } catch (error: any) {
    console.error("Gabim gjatë bisedës me Albert Einstein:", error);
    if (!retryWithFlash && error?.message?.includes("exceeded")) {
      console.log("Retrying with gemini-1.5-flash due to quota limits on pro...");
      return askAlbertEinstein(term, context, userMessage, true);
    }
    if (error?.message?.includes("exceeded")) {
        return "Kemi arritur limitin e kërkesave djalosh! Provo sërish pas pak.";
    }
    return "Më vjen keq, por unë (Albert Einstein) kam një problem teknik momentalisht. Provo përsëri pas pak!";
  }
}

export async function extractLessonFromImage(imageBase64: string, mimeType: string, interest: string, retryWithFlash = false): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const response = await ai.models.generateContent({
      model: retryWithFlash ? "gemini-2.5-flash" : "gemini-3.1-pro-preview",
      contents: [
        { text: `Kjo është një foto e një pjese të librit/mësimit tim të fizikës.\nStudent_Interest: ${interest}` },
        { inlineData: { data: imageBase64, mimeType } }
      ],
      config: {
        systemInstruction: `Role: Ti je instruktori më 'cool' i Fizikës, specialist në shpjegimin e koncepteve komplekse nëpërmjet asaj që të rinjtë duan më shumë (Gaming, Futboll, Muzikë, Gatim etj).

Detyra: Analizo foton e bashkangjitur për të kuptuar cili është koncepti kryesor i fizikës që po trajtohet. Zgjidh DETYRIMISHT vetëm një koncept ose formulë kryesore.
Pasi ta kesh identifikuar, shpjegoje atë me PËRPIKMËRI sipas 4 Seksioneve të mëposhtme, duke u lidhur ngushtë me interesin e nxënësit ("Student_Interest").

Output Requirements (Ndiq KËTO 4 Stile me rreptësi):
1. ### Ngjashmëria Kuptimore: Shpjego konceptin fizik duke përdorur *KRYESISHT* metafora dhe zhargon nga "Student_Interest". Bëje me vibrime pozitive dhe të lezetshme për moshën 15-16 vjeç.

2. ### Sfida e Mendimit: Krijo një skenar 1-një-fjali ku interesi i nxënësit ndesh një "anomali fizike".

3. ### Rrjedha e Ideve (Formati JSON për Mindmap VIZUAL INTERAKTIV): 
DETYRIMISHT kthe një strukturë JSON të detajuar për një Mind Map brenda bllokut \`\`\`json mindmap ... \`\`\`.
Kërkesat për JSON Mindmap:
- Hierarkia Vizuale: Organizo hartën në 3 nivele: Koncepti Bazë (Level 0), Parimet Kryesore (Level 1), dhe Zbatimet në Jetën Reale (Level 2).
- Node Metadata (për çdo node):
  - "id": String unikal.
  - "label": Emër tërheqës (Në Shqip).
  - "type": (psh. 'KONCEPT', 'FORMULA', 'SHEMBULL'). Përdor fjalë Shqip!
  - "color_theme": Hex code nga Tailwind (psh. #3b82f6 për core, #10b981 për zbatime, #ffafcc, #a2d2ff etj).
  - "icon": Emri i ikonës nga lista (Zap, Brain, Rocket, Atom, Flame, Target, Infinity, Activity, Anchor, Compass, Sun, Moon, Star, Droplet, Lightbulb, Magnet). MOS përdor emoji të thjeshta, përdor PIKËRISHT njërën nga këto fjalë.
  - "onHover": Fun Fact, Kuriozitet ose Tip i shpejtë për t'u shfaqur gjatë Hover-it.
- Edges (Lidhjet):
  - "strength": 'primary' (për lidhjen me formulën, të trasha) ose 'secondary' (për shembujt, të holla/dashed).
  - "type": 'smoothstep'.
  - "label": Folje/veprim që i lidh (Opcionial, por i rekomanduar).
- Smart Grouping: Bashko shembujt nëse ka disa, ose lidhi logjikisht.

Format Shembull i Output:
\`\`\`json mindmap
{ 
  "nodes": [
    { "id": "1", "data": { "label": "Forca", "type": "KONCEPT", "color_theme": "#a2d2ff", "icon": "Zap", "onHover": "Forca është shtytja ose tërheqja e një trupi!" } }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2", "label": "përcaktohet nga", "type": "smoothstep", "strength": "primary" }
  ]
}
\`\`\`
Lidhjet duhet të respektojnë ligjet e fizikës!

4. ### Pyetja e Mirëfilltë: Bëj një pyetje të thellë që nuk ka përgjigje "Po/Jo". Nxit imagjinatën e nxënësit!

Tone: Shumë entuziast, i lezetshëm (fun), aspak si libër shkolle, profesional për moshën. GJUHA: VETËM SHQIP! Mos përdor kurrë anglisht si "Learn Your Way".

Formatting & Formulas: 
- Sigurohu që fiks këto tituj të përdoren si headera me H3 markdown: "### Ngjashmëria Kuptimore", "### Sfida e Mendimit", "### Rrjedha e Ideve", "### Pyetja e Mirëfilltë". Place the content for sections 1, 2 and 4 inside a markdown blockquote (>) so that the frontend can style them as cute floating cards. 
- Blloku i JSON \`\`\`json mindmap ... \`\`\` NUK duhet të jetë brenda blockquote (>). 
- FORMATI I FORMULAVE: DETYRIMISHT shkruaji simbolet dhe formulat fizike në formatin matemakor LaTeX duke i mbështjellë me simbolin e dollarit (p.sh. $F = m \\cdot a$ ose $x = x_0 + vt$). Kjo është super kritike për paraqitjen e tyre të saktë!`,
        temperature: 0.7,
      },
    });

    return response.text || "Nuk u mor asnjë përgjigje.";
  } catch (error: any) {
    console.error("Gabim gjatë gjenerimit nga foto:", error);
    if (!retryWithFlash && error?.message?.includes("exceeded")) {
      console.log("Retrying with gemini-2.5-flash due to quota limits on pro...");
      return extractLessonFromImage(imageBase64, mimeType, interest, true);
    }
    if (error?.message?.includes("exceeded")) {
      return "Kemi arritur limitin e kërkesave. Provo përsëri pak më vonë!";
    }
    return "Ndodhi një gabim me shpjegimin e fotos. Provo përsëri!";
  }
}
export async function generateInterestExplanation(term: string, definition: string, interest: string, retryWithFlash = false): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const response = await ai.models.generateContent({
      model: retryWithFlash ? "gemini-2.5-flash" : "gemini-3.1-pro-preview",
      contents: `Physics_Term: ${term}\nCore_Definition: ${definition}\nStudent_Interest: ${interest}`,
      config: {
        systemInstruction: `Role: Ti je instruktori më 'cool' i Fizikës, specialist në shpjegimin e koncepteve komplekse nëpërmjet asaj që të rinjtë duan më shumë (Gaming, Futboll, Muzikë, Gatim etj).

Output Requirements (Ndiq KËTO 4 Stile me rreptësi):
1. ### Ngjashmëria Kuptimore: Shpjego konceptin fizik duke përdorur *KRYESISHT* metafora dhe zhargon nga "Student_Interest". Bëje me vibrime pozitive dhe të lezetshme për moshën 15-16 vjeç.

2. ### Sfida e Mendimit: Krijo një skenar 1-një-fjali ku interesi i nxënësit ndesh një "anomali fizike".

3. ### Rrjedha e Ideve (Formati JSON për Mindmap VIZUAL INTERAKTIV): 
DETYRIMISHT kthe një strukturë JSON të detajuar për një Mind Map brenda bllokut \`\`\`json mindmap ... \`\`\`.
Kërkesat për JSON Mindmap:
- Hierarkia Vizuale: Organizo hartën në 3 nivele: Koncepti Bazë (Level 0), Parimet Kryesore (Level 1), dhe Zbatimet në Jetën Reale (Level 2).
- Node Metadata (për çdo node):
  - "id": String unikal.
  - "label": Emër tërheqës (Në Shqip).
  - "type": (psh. 'KONCEPT', 'FORMULA', 'SHEMBULL'). Përdor fjalë Shqip!
  - "color_theme": Hex code nga Tailwind (psh. #3b82f6 për core, #10b981 për zbatime, #ffafcc, #a2d2ff etj).
  - "icon": Emri i ikonës nga lista (Zap, Brain, Rocket, Atom, Flame, Target, Infinity, Activity, Anchor, Compass, Sun, Moon, Star, Droplet, Lightbulb, Magnet). MOS përdor emoji të thjeshta, përdor PIKËRISHT njërën nga këto fjalë.
  - "onHover": Fun Fact, Kuriozitet ose Tip i shpejtë për t'u shfaqur gjatë Hover-it.
- Edges (Lidhjet):
  - "strength": 'primary' (për lidhjen me formulën, të trasha) ose 'secondary' (për shembujt, të holla/dashed).
  - "type": 'smoothstep'.
  - "label": Folje/veprim që i lidh (Opcionial, por i rekomanduar).
- Smart Grouping: Bashko shembujt nëse ka disa, ose lidhi logjikisht.

Format Shembull i Output:
\`\`\`json mindmap
{ 
  "nodes": [
    { "id": "1", "data": { "label": "Forca", "type": "KONCEPT", "color_theme": "#a2d2ff", "icon": "Zap", "onHover": "Forca është shtytja ose tërheqja e një trupi!" } }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2", "label": "përcaktohet nga", "type": "smoothstep", "strength": "primary" }
  ]
}
\`\`\`
Lidhjet duhet të respektojnë ligjet e fizikës!

4. ### Pyetja e Mirëfilltë: Bëj një pyetje të thellë që nuk ka përgjigje "Po/Jo". Nxit imagjinatën e nxënësit!

Tone: Shumë entuziast, i lezetshëm (fun), aspak si libër shkolle, profesional për moshën. GJUHA: VETËM SHQIP! Mos përdor kurrë anglisht si "Learn Your Way".

Formatting & Formulas: 
- Sigurohu që fiks këto tituj të përdoren si headera me H3 markdown: "### Ngjashmëria Kuptimore", "### Sfida e Mendimit", "### Rrjedha e Ideve", "### Pyetja e Mirëfilltë". Place the content for sections 1, 2 and 4 inside a markdown blockquote (>) so that the frontend can style them as cute floating cards. 
- Blloku i JSON \`\`\`json mindmap ... \`\`\` NUK duhet të jetë brenda blockquote (>). 
- FORMATI I FORMULAVE: DETYRIMISHT shkruaji simbolet dhe formulat fizike në formatin matemakor LaTeX duke i mbështjellë me simbolin e dollarit (p.sh. $F = m \\cdot a$ ose $x = x_0 + vt$). Kjo është super kritike për paraqitjen e tyre të saktë!`,
        temperature: 0.7,
      },
    });

    return response.text || "Nuk u mor asnjë përgjigje.";
  } catch (error: any) {
    console.error("Gabim gjatë gjenerimit të shpjegimit me interes:", error);
    if (!retryWithFlash && error?.message?.includes("exceeded")) {
      console.log("Retrying with gemini-2.5-flash due to quota limits on pro...");
      return generateInterestExplanation(term, definition, interest, true);
    }
    if (error?.message?.includes("exceeded")) {
      return "Kemi arritur limitin e kërkesave (Mbingarkesë e rrjetit). Ju lutem provoni përsëri pak më vonë!";
    }
    return "Ndodhi një gabim gjatë lidhjes me motorin tonë pedagogjik. Provo përsëri pas pak!";
  }
}
