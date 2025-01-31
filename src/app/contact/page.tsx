"use client";

import { sendEmail } from "@/services/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Resend } from "resend";
import { toast } from "sonner";
import { type schemaEmail, sendEmailValidate } from "./zod";

export default function ContactPage() {

    const { register, handleSubmit, watch, } = useForm<schemaEmail>({
        defaultValues: {
            email: "",
            message: "",
            name: "",
            subject: "",
        },
        resolver: zodResolver(sendEmailValidate),
    });

    const message = watch('message')

    const handleFormSubmit = async (data: schemaEmail) => {

        const { email, message, name, subject } = data


        try {
            const res = await sendEmail({ ...data })
            if (res.error) throw new Error()

            toast.success("Email enviado com sucesso!")
        } catch (e) {
            toast.error("Ops... Houve um erro ao enviar o email!")
        }
    }

    return (
        <div className="flex w-full flex-col items-center py-20">
            <div className="contains py-10">
                <h1 className="font-bold text-7xl text-white ">Entre em contato</h1>
            </div>
            <hr className="w-full border-neutral-400/20" />
            <div className="contains py-20">
                <div className="size-full min-h-72 divide-y-2 divide-neutral-400/25 rounded-xl border border-neutral-600/20 bg-neutral-800/50" >
                    <div className="flex w-full justify-center py-4 font-medium">
                        Nova mensagem
                    </div>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col items-end p-6 ">
                        <div className="w-full divide-y divide-neutral-400/25 [&_label]:flex [&_label]:gap-2 [&_label]:py-4 [&_label]:text-xl [&_label_input]:bg-transparent [&_label_input]:text-accent/90 [&_label_input]:text-lg [&_label_input]:caret-teal-800 [&_label_input]:outline-none [&_label_input]:placeholder:font-light [&_label_input]:placeholder:text-accent/25">
                            <label htmlFor="email">
                                Email:
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="w-full"
                                    placeholder="Insira seu email..."
                                />
                            </label>
                            <label htmlFor="name">
                                Name:
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Insira seu nome..."
                                    className=""
                                />
                            </label>
                            <label htmlFor="assunto">
                                Assunto:
                                <input
                                    {...register("subject")}
                                    type="text"
                                    placeholder="Insira o assunto..."
                                />
                            </label>

                            <label htmlFor="" className="col items-end">
                                <textarea
                                    {...register("message")}
                                    className="flex h-56 w-full resize-none rounded-lg border border-neutral-400/20 bg-background/75 p-3 outline-none placeholder:font-light placeholder:text-accent/30"
                                    maxLength={300}
                                    placeholder="Escreva sua mensagem!"
                                />
                                <p className={`font-light text-sm ${message.length >= 300 && "text-red-700"}
                                    `}>

                                    {message.length}/300
                                </p>
                            </label>
                        </div>

                        <button
                            className="btn w-max border-neutral-400/25 px-10 shadow-black/90 shadow-lg hover:brightness-75"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
