"use client";
import { type schemaEmail, sendEmailValidate } from "@/app/(main)/contact/zod";
import { sendEmail } from "@/services/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import dompurify from "dompurify";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


const Form = () => {
    const { register, handleSubmit, watch, reset } = useForm<schemaEmail>({
        defaultValues: {
            email: "",
            message: "",
            name: "",
            subject: "",
        },
        resolver: zodResolver(sendEmailValidate),
    });

    const message = watch("message");

    const handleFormSubmit = async (data: schemaEmail) => {
        const { email, message, name, subject } = data;
        const emailClean = dompurify.sanitize(email);
        const messageClean = dompurify.sanitize(message);
        const nameClean = dompurify.sanitize(name);
        const subjectClean = dompurify.sanitize(subject);

        try {
            const res = await sendEmail({
                email: emailClean,
                message: messageClean,
                name: nameClean,
                subject: subjectClean,
            });
            if (res.error) throw new Error();

            reset();
            toast.success("Email enviado com sucesso!");
        } catch (e) {
            toast.error("Ops... Houve um erro ao enviar o email!");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col items-end p-6 "
        >
            <div className="w-full divide-y divide-neutral-600/20 dark:divide-neutral-400/25 [&_label]:flex [&_label]:gap-2 [&_label]:py-4 [&_label]:text-xl [&_label_input]:bg-transparent [&_label_input]:text-accent/90 [&_label_input]:text-lg [&_label_input]:caret-teal-800 [&_label_input]:outline-none [&_label_input]:placeholder:font-light [&_label_input]:placeholder:text-accent/50 dark:[&_label_input]:placeholder:text-accent/25">
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

                <label
                    htmlFor=""
                    className="col items-end"
                >
                    <textarea
                        {...register("message")}
                        className="flex h-56 w-full resize-none rounded-lg border border-neutral-400/50 bg-background/75 p-3 outline-none transition-all duration-500 placeholder:font-light placeholder:text-accent/30 dark:border-neutral-400/20"
                        maxLength={300}
                        placeholder="Escreva sua mensagem!"
                    />
                    <p
                        className={`font-light text-sm ${message.length >= 300 && "text-red-700"}
                `}
                    >
                        {message.length}/300
                    </p>
                </label>
            </div>

            <button
                className="btn w-max border-neutral-400/25 px-10 shadow-lg hover:bg-neutral-100 dark:shadow-black/90 dark:hover:bg-neutral-950/35"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
};

export { Form };
