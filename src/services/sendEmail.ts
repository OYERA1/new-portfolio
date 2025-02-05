"use server";

import { Resend } from "resend";

const sendEmail = async ({ email, subject, name, message }: { email: string, subject: string, name: string, message: string }) => {
    const { emails } = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);



    const data = await emails.send({
        from: 'contact@oyera.dev',
        to: email,
        subject,
        html: `<p><strong>Nome:</strong> ${name}</p >
                <p><strong>Email: </strong> ${email}</p >
                <p><strong>Mensagem: </strong> ${message}</p >`
    })

    return data
}


export { sendEmail }