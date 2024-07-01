'use server'
import { auth } from '@/src/auth/auth';
import { getUserID, getUserName } from '@/src/utils/userInfo';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function createJob(formData: FormData) {
  console.log('createJob', formData)

  const rawFormData = Object.fromEntries(formData.entries());
  
  const jobTitle = rawFormData.position as string;
  const money = rawFormData.salary as string;
  const jobDescription = rawFormData.description as string;

  try {
        const session = await auth(); 
        if (!session || !session.user || !session.user.accessToken) {
            throw new Error("Usuario no autenticado");
        }

        console.log(session);

        if (!money) {
            return ("Cantidad de dinero inválida");
        }
        if (!jobTitle) {
            return ("El título del trabajo es obligatorio");
        }
        if (!jobDescription) {
            return ("La descripción del trabajo es obligatoria");
        }

        const username = await getUserName();
        const userid = await getUserID();

        await sql`
            INSERT INTO oferta (identify, imagen, usuario, pago, descripcion, titulo)
            VALUES (${userid}, ${session.user.image}, ${username}, ${money}, ${jobDescription}, ${jobTitle})
        `;

        return "Succesful";
    } catch (error) {
        return "Error";
    }
}



