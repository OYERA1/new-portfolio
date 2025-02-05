import { z } from "zod";

const sendEmailValidate = z.object({
    email: z.string().email({ message: "Precisa ser um email válido!" }).nonempty({ message: "Você precisa inserir um email" }).transform((val) => val.replace(/[<>]/g, '')),
    name: z.string().min(2).nonempty().transform((val) => val.replace(/[<>]/g, '')),
    subject: z.string().nonempty().transform((val) => val.replace(/[<>]/g, '')),
    message: z.string().min(5).max(300).nonempty().transform((val) => val.replace(/[<>]/g, '')),
});

type schemaEmail = z.infer<typeof sendEmailValidate>;

export { type schemaEmail, sendEmailValidate };
