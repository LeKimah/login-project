import { z } from "zod";

export const FormSchema = z.object({
  nombre: z.string("El nombre es requerido").min(1, "El nombre es requerido"),
  email: z.string("El email no es válido").email("El email no es válido"),
  password: z
    .string("La contraseña debe tener al menos 6 caracteres")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
