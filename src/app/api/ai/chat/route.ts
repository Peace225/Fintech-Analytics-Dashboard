import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function POST(req: Request){
  const { prompt } = await req.json();
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{role:"system", content:"Tu es analyste fintech. Analyse les transactions."}, {role:"user", content: prompt}]
  });
  return Response.json({ answer: res.choices[0].message.content });
}
