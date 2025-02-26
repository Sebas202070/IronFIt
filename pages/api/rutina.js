import { OpenAI } from 'openai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { peso, altura, musculo, objetivos } = req.body;
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Genera una rutina para una persona de ${peso}kg, ${altura}cm, que quiere entrenar ${musculo}. Objetivos: ${objetivos}.` }],
      });

      const rutina = completion.choices[0].message.content;
      const ejercicios = rutina.split('\n').filter(ejercicio => ejercicio.trim() !== ''); // Convert to array

      res.status(200).json({ ejercicios });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
}