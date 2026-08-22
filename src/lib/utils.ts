export function formatWhatsAppNumber(raw: string): string {
  // Remove tudo que não é dígito
  const digits = raw.replace(/\D/g, "");
  // Se não começa com 55, adiciona DDI Brasil
  if (!digits.startsWith("55")) {
    return `55${digits}`;
  }
  return digits;
}

export function buildWhatsAppURL(
  phone: string,
  message: string
): string {
  const number = formatWhatsAppNumber(phone);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function buildAgendamentoMessage(data: {
  nome: string;
  servicoNome: string;
  dataNascimento?: string;
  horarioNascimento?: string;
  cidadeNascimento?: string;
}): string {
  const nascimento = [
    data.dataNascimento,
    data.horarioNascimento ? `às ${data.horarioNascimento}` : "",
    data.cidadeNascimento ? `em ${data.cidadeNascimento}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linhas = [
    `Olá, Larissa! Me chamo ${data.nome}, preenchi o formulário no seu site para agendar o serviço: *${data.servicoNome}*.`,
    nascimento
      ? `Meus dados de nascimento são: ${nascimento}.`
      : "",
    `Gostaria de confirmar meu agendamento!`,
  ].filter(Boolean);

  return linhas.join(" ");
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
