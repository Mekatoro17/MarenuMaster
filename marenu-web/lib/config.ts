// Número de WhatsApp de MARENÚ: código de país + número, solo dígitos (sin "+", espacios ni símbolos).
// Se define con NEXT_PUBLIC_MARENU_WHATSAPP_NUMBER; si falta o es inválido, el canal queda deshabilitado.
const raw = (process.env.NEXT_PUBLIC_MARENU_WHATSAPP_NUMBER ?? "").trim();

export const whatsappNumber: string | null = /^\d{8,15}$/.test(raw) ? raw : null;
