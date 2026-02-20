
import OpenAI from "openai";

let openaiInstance: OpenAI | null = null;

function getOpenAI() {
  if (!openaiInstance) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY is missing. Please set it in your environment variables.");
      return null;
    }
    openaiInstance = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true // Required for client-side calls
    });
  }
  return openaiInstance;
}

export async function askLibriFizikes(term: string, context: string) {
  try {
    const openai = getOpenAI();
    if (!openai) return "Më vjen keq, por çelësi i API-së për OpenAI nuk është vendosur. Ju lutem konfiguroni OPENAI_API_KEY.";

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { 
          role: "system", 
          content: `Ti je "Libri i Fizikës", një mësues virtual i dashur dhe shumë i ditur. 
          Shpjego në mënyrë të thjeshtë, interaktive dhe me shembuj nga jeta e përditshme termat e fizikës. 
          Përdor një gjuhë të ëmbël dhe inkurajuese për nxënësit. Përgjigju vetëm në gjuhën shqipe.` 
        },
        { 
          role: "user", 
          content: `Shpjego termin: ${term}. Përshkrimi aktual është: ${context}.` 
        }
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content || "Nuk u mor asnjë përgjigje.";
  } catch (error) {
    console.error("Gabim gjatë bisedës me OpenAI:", error);
    return "Më vjen keq, por Libri i Fizikës (OpenAI) ka një problem teknik momentalisht. Provo përsëri pas pak!";
  }
}
