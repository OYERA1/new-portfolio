import { z } from "zod";

const sendEmailValidate = z.object({
    email: z.string().email({ message: "Precisa ser um email válido!" }).nonempty({ message: "Você precisa inserir um email" }),
    name: z.string().min(2).nonempty(),
    subject: z.string().nonempty(),
    message: z.string().min(5).max(300).nonempty(),
});

type schemaEmail = z.infer<typeof sendEmailValidate>;

export { type schemaEmail, sendEmailValidate };
