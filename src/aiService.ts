
import { GoogleGenAI } from "@google/genai";

export async function askAlbertEinstein(term: string, context: string, userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
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
  } catch (error) {
    console.error("Gabim gjatë bisedës me Albert Einstein:", error);
    return "Më vjen keq, por unë (Albert Einstein) kam një problem teknik momentalisht. Provo përsëri pas pak!";
  }
}
