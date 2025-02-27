import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export async function POST(req) {
  const { peso, altura, objetivos } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Genera un plan nutricional para una persona de ${peso}kg, ${altura}cm. Objetivos: ${objetivos}.` }],
    });

    const nutricion = completion.choices[0].message.content;
    const alimentos = nutricion.split('\n').filter(alimento => alimento.trim() !== '');

    return NextResponse.json({ alimentos });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}