import { toast } from "react-toastify";

export function handleApiError(response, data, fallbackMessage) {
  const apiErrors = data?.errors;
  const hasApiErrors = apiErrors && Object.keys(apiErrors).length > 0;

  if (response?.ok && !hasApiErrors) return false;

  const rateLimitReached =
    response?.status === 429 ||
    Boolean(apiErrors?.rateLimit) ||
    (typeof apiErrors?.requests === "string" &&
      /limit|request|quota/i.test(apiErrors.requests));

  console.error("[API-Football] La solicitud devolvió un error", {
    url: response?.url,
    status: response?.status,
    statusText: response?.statusText,
    errors: apiErrors || null,
    parameters: data?.parameters || null,
    results: data?.results ?? null,
    requestId:
      response?.headers?.get("x-request-id") ||
      response?.headers?.get("x-apisports-request-id") ||
      null,
  });

  toast.error(
    rateLimitReached
      ? "La API tiene un límite reducido de consultas en su plan gratuito y ya lo alcanzamos por ahora. Esperá un rato y volvé a intentar."
      : fallbackMessage,
    { toastId: "football-api-error", autoClose: 5500 }
  );

  return true;
}

export function notifyNetworkError() {
  toast.error(
    "No pudimos conectar con el servicio de fútbol. Revisá tu conexión e intentá de nuevo.",
    { toastId: "football-api-network-error", autoClose: 5500 }
  );
}
