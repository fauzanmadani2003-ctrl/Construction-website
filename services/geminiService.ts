
import { GoogleGenAI, Type } from "@google/genai";
import { CostEstimate } from '../types';

const getGeminiApiKey = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable not set.");
  }
  return apiKey;
};

export const fetchCostEstimate = async (
  city: string,
  propertyType: string,
  area: number,
  finishQuality: string
): Promise<CostEstimate> => {
  try {
    const ai = new GoogleGenAI({ apiKey: getGeminiApiKey() });
    const prompt = `
      Act as a construction cost estimator for India. Based on the following details, provide a brief, estimated cost breakdown for a construction project.
      City: ${city}
      Property Type: ${propertyType}
      Area: ${area} sq. ft.
      Finish Quality: ${finishQuality}

      Provide a total estimated cost range. Present the output as a clean, valid JSON object. Use Indian Rupees (₹) for all costs. For example: {"civilWorks": "₹XX,XX,XXX - ₹YY,YY,YYY", ...}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            civilWorks: { type: Type.STRING, description: "Cost for civil works" },
            finishingWorks: { type: Type.STRING, description: "Cost for finishing works like flooring, painting, etc." },
            electricalPlumbing: { type: Type.STRING, description: "Cost for electrical and plumbing" },
            landscaping: { type: Type.STRING, description: "Cost for landscaping if applicable" },
            miscFees: { type: Type.STRING, description: "Cost for miscellaneous fees and permits" },
            totalEstimateRange: { type: Type.STRING, description: "Total estimated cost range" },
          },
          required: ["civilWorks", "finishingWorks", "electricalPlumbing", "landscaping", "miscFees", "totalEstimateRange"],
        },
      },
    });
    
    const jsonString = response.text.trim();
    return JSON.parse(jsonString) as CostEstimate;

  } catch (error) {
    console.error("Error fetching cost estimate from Gemini API:", error);
    throw new Error("Failed to get cost estimate. Please check your inputs or API key.");
  }
};
