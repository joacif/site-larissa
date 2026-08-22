import { z } from "zod";

export const agendamentoSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .max(20, "WhatsApp inválido")
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato inválido — use (XX) XXXXX-XXXX"),
  email: z
    .string()
    .email("E-mail inválido")
    .optional()
    .or(z.literal("")),
  servico_id: z
    .string()
    .min(1, "Selecione um serviço"),
  servico_nome: z.string().optional(),
  data_nascimento: z
    .string()
    .optional()
    .or(z.literal("")),
  horario_nascimento: z
    .string()
    .optional()
    .or(z.literal("")),
  cidade_nascimento: z
    .string()
    .optional()
    .or(z.literal("")),
  mensagem: z
    .string()
    .max(1000, "Máximo de 1000 caracteres")
    .optional()
    .or(z.literal("")),
  consentimento_lgpd: z
    .boolean()
    .refine((val) => val === true, {
      message: "Você precisa aceitar a Política de Privacidade para prosseguir",
    }),
});

export type AgendamentoFormData = z.infer<typeof agendamentoSchema>;
