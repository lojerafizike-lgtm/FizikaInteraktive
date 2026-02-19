
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askLibriFizikes(term: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
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
