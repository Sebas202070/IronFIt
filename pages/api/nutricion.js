import { OpenAI } from 'openai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { peso, altura, objetivos } = req.body;
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Genera un plan nutricional para una persona de ${peso}kg, ${altura}cm. Objetivos: ${objetivos}.` }],
      });

      const nutricion = completion.choices[0].message.content;
      const alimentos = nutricion.split('\n').filter(alimento => alimento.trim() !== '');

      res.status(200).json({ alimentos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}