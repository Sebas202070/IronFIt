import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export async function POST(req) { // Exportar la función POST
  const { peso, altura, musculo, objetivos } = await req.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Genera una rutina para una persona de ${peso}kg, ${altura}cm, que quiere entrenar ${musculo}. Objetivos: ${objetivos}.` }],
    });

    const rutina = completion.choices[0].message.content;
    const ejercicios = rutina.split('\n').filter(ejercicio => ejercicio.trim() !== '');

    return NextResponse.json({ ejercicios });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}