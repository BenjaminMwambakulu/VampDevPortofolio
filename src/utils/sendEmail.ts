import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export async function sendEmail(
  data: Record<string, unknown>,
): Promise<EmailJSResponseStatus> {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    const missing = [];
    if (!serviceId) missing.push("VITE_SERVICE_ID");
    if (!templateId) missing.push("VITE_TEMPLATE_ID");
    if (!publicKey) missing.push("VITE_PUBLIC_KEY");

    console.error(`[EmailJS Config Error] Missing keys: ${missing.join(", ")}`);
    throw new Error(
      `Email configuration error. Missing: ${missing.join(", ")}`,
    );
  }

  if (!data || Object.keys(data).length === 0) {
    throw new Error("Cannot send email: Submission data payload is empty.");
  }

  try {
    const response = await emailjs.send(serviceId, templateId, data, {
      publicKey: publicKey,
    });

    console.log("[EmailJS Success]", response.status, response.text);
    return response;
  } catch (error) {
    console.error("[EmailJS Delivery Failure]", error);

    if (error instanceof Error) {
      throw new Error(`Email delivery failed: ${error.message}`);
    } else if (typeof error === "object" && error !== null && "text" in error) {
      throw new Error(`EmailJS API Error: ${(error as { text: string }).text}`);
    }

    throw new Error("An unexpected error occurred while sending your message.");
  }
}
