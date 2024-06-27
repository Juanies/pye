import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth/auth';
import { getUserID, getUserName } from '@/utils/userInfo';

export async function POST(request: NextRequest) {
    try {
        const session = await auth(); 
        if (!session || !session.user || !session.user.accessToken) {
            throw new Error("Usuario no autenticado");
        }

        console.log(session);
        const { money, jobTitle, jobDescription } = await request.json();

        if (!money) {
            throw new Error("Cantidad de dinero inválida");
        }
        if (!jobTitle) {
            throw new Error("El título del trabajo es obligatorio");
        }
        if (!jobDescription) {
            throw new Error("La descripción del trabajo es obligatoria");
        }

        const username = await getUserName();
        const userid = await getUserID();

        await sql`
            INSERT INTO oferta (identify, imagen, usuario, pago, descripcion, titulo)
            VALUES (${userid}, ${session.user.image}, ${username}, ${money}, ${jobDescription}, ${jobTitle})
        `;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: error }, { status: 400 });
    }
}
