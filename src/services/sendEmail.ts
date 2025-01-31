"use server";

import { Resend } from "resend";

const sendEmail = async ({ email, subject, name, message }: { email: string, subject: string, name: string, message: string }) => {
    const { emails } = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    const data = await emails.send({
        from: 'oyera@gmail.com',
        to: 'oyera@gmail.com',
        subject: subject,
        html: `${name} enviou: ${message} do email ${email}`
    })

    console.log(data)

    return data

}


export { sendEmail }