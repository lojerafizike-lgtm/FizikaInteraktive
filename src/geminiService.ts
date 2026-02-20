
import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing. Please set it in your environment variables.");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function askLibriFizikes(term: string, context: string) {
  try {
    const ai = getAI();
    if (!ai) return "Më vjen keq, por çelësi i API-së nuk është vendosur. Ju lutem konfiguroni GEMINI_API_KEY.";

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: `Përshëndetje! Ti je "Libri i Fizikës", një mësues virtual i dashur dhe shumë i ditur. 
      Shpjego në mënyrë të thjeshtë, interaktive dhe me shembuj nga jeta e përditshme termin: ${term}. 
      Përshkrimi aktual është: ${context}. 
      Përdor një gjuhë të ëmbël dhe inkurajuese për nxënësit. Përgjigju vetëm në gjuhën shqipe.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gabim gjatë bisedës:", error);
    return "Më vjen keq, por Libri i Fizikës ka një problem teknik momentalisht. Provo përsëri pas pak!";
  }
}
