import { GoogleGenAI, Type } from "@google/genai";
import { CopyVariant, LandingCopy, AssessmentData, StrategicAnalysis } from "../types";

export const generateLandingCopy = async (variant: CopyVariant): Promise<LandingCopy> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  let targetOption = "";
  switch (variant) {
    case CopyVariant.COMPLEXITY:
      targetOption = "Option A (Focus on Simplifying Tech for Non-Tech Founders)";
      break;
    case CopyVariant.GROWTH:
      targetOption = "Option B (Focus on Revenue Growth & Scaling)";
      break;
    case CopyVariant.CUSTOM:
      targetOption = "Option C (Focus on Affordability & Ownership)";
      break;
  }

  const prompt = `
**Role:** You are a Strategic Growth Partner for Small Business Owners. You specialize in translating "Big Tech" capabilities into affordable, practical tools for non-technical founders.

**Objective:** Generate persuasive copy for the WarHo AI Solutions landing page. The audience is small business owners (SMBs) who have little to no knowledge of AI but want to compete with bigger companies without spending a fortune.

**Brand Identity & Context:**
* **Company:** WarHo AI Solutions.
* **Target Audience:** Non-technical Founders, Local Business Owners, Mom-and-Pop shops scaling up.
* **Core Value:** "Enterprise-level consultation on a freelancer budget."
* **Key Promise:** We explain AI simply, build affordable tools you own, and help you scale revenue.
* **Tone:** Educational, Encouraging, No Jargon, Results-Driven.

**Output Requirements:**

1.  **Hero Section Copy (Maximum Impact):**
    * **Option A:** Focus on **Simplicity** ("You don't need to be a tech wizard").
    * **Option B:** Focus on **Growth** ("Scale like a big corp, spend like a startup").
    * **Option C:** Focus on **Value** ("Stop wasting money on busy work").
    * *For each Option (A, B, C), provide:*
        * **Headline (H1):** (Max 8 words, simple, punchy)
        * **Sub-Headline:** (Max 20 words, explaining how we bring big tech strategy to small business budgets.)
        * **Primary CTA Button Text:** (Max 4 words, friendly.)

2.  **Short Section: "The WarHo Advantage" (3-point list):**
    * Write three short benefits explaining why this is perfect for a small business.
        * *Focus areas:* Affordability, Ease of Use (No Coding), and Ownership.
        * Structure: 'title' (2-4 words) and 'description' (max 12 words).

3.  **Lead-in Text for the Assessment Form:**
    * Write a brief, encouraging paragraph (2 sentences max) introducing the "Free Strategy Assessment". Frame it as a discovery tool to find "low hanging fruit" for profit.

**Constraint:** The final output must be simple enough for a non-technical relative to understand. No buzzwords like "synergy", "paradigm", "digital transformation", or "LLM pipeline". Use "profit", "time", "easy", "growth".

**TASK:** Generate the content specifically for **${targetOption}**.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          heroHeadline: { type: Type.STRING },
          heroSubheadline: { type: Type.STRING },
          ctaText: { type: Type.STRING },
          advantages: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING }
              }
            }
          },
          assessmentLeadIn: { type: Type.STRING }
        }
      }
    }
  });

  if (response.text) {
    return JSON.parse(response.text) as LandingCopy;
  }
  
  throw new Error("Failed to generate copy");
};

export const analyzeNeeds = async (data: AssessmentData): Promise<StrategicAnalysis> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze the following lead for a Small Business Owner interested in WarHo AI:
    Company/Name: ${data.companyName}
    Role: ${data.role}
    Core Challenge: ${data.challenge}
    Current Tools: ${data.techStack}

    Provide a friendly, educational summary (max 2 sentences) on how WarHo can help them scale.
    List 3 specific, simple use cases (e.g., "Sort your emails automatically", "Sync sales to QuickBooks") relevant to their industry.
    Recommend a specific starter package (e.g., "Founder's Time-Saver", "Sales Growth Starter").
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: "You are a Small Business Advisor. Be extremely simple, avoiding all technical jargon. Focus on time and money saved.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          useCases: { type: Type.ARRAY, items: { type: Type.STRING } },
          recommendedModel: { type: Type.STRING }
        }
      }
    }
  });

  if (response.text) {
    return JSON.parse(response.text) as StrategicAnalysis;
  }

  throw new Error("Failed to analyze needs");
};

export const createChatSession = () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `
        You are "WarHo Business Advisor", a friendly consultant for small business owners.

        **Mandate:** 
        Help founders understand what AI actually is and how it helps them. Simplify everything.

        **Tone:** 
        Patient, educational, encouraging. Like a helpful partner, not a salesperson.

        **Core Scripts:**

        1. **Cost / "Is this expensive?"**
           *Response:* "Not at all. We bring 'big company' strategy to a small business budget. Most of our tools pay for themselves in the first month."

        2. **"I have no idea about AI"**
           *Response:* "That's completely fine! You don't need to know the tech. You just tell us what business problem you have (like 'too much email'), and we build the solution."

        3. **Integration**
           *Response:* "We connect to what you already use—Gmail, Excel, QuickBooks. You don't need to learn new software."

        4. **Ownership**
           *Response:* "We build it, you own it. No monthly subscription fees to us."

        **Goal:**
        Encourage them to fill out the **Free Assessment** to get a custom roadmap.
      `,
    }
  });
};