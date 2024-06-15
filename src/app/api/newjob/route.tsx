import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { auth } from '@/auth/auth';

async function getCurrentAuthorizationInfo(accessToken: string) {
    try {
        const response = await fetch('https://discord.com/api/oauth2/@me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error retrieving current authorization information: ${response.status} ${response.statusText}`);
        }

        const userInfo = await response.json();
        return userInfo;
    } catch (error) {
        console.error('Error retrieving authorization information:', error);
        throw error;
    }
}

export async function POST(request: { json: () => PromiseLike<{ money: any; jobTitle: any; jobDescription: any; }> | { money: any; jobTitle: any; jobDescription: any; }; }) {
    try {
        const session = await auth(); 
        if (!session || !session.user || !session.user.accessToken) {
            throw new Error("Usuario no autenticado");
        }

        const { money, jobTitle, jobDescription } = await request.json();

        if (!money || isNaN(money)) {
            throw new Error("Cantidad de dinero inválida");
        }
        if (!jobTitle) {
            throw new Error("El título del trabajo es obligatorio");
        }
        if (!jobDescription) {
            throw new Error("La descripción del trabajo es obligatoria");
        }

        const userInfo = await getCurrentAuthorizationInfo(session.user.accessToken);

        console.log(userInfo)
        await sql`
            INSERT INTO oferta (imagen, usuario, pago, descripcion, titulo)
            VALUES (${session.user.image}, ${session.user.name}, ${money}, ${jobDescription}, ${jobTitle})
        `;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: error }, { status: 400 });
    }
}
