import { type ChangeEvent, type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { contactFormConfig, personalInfo } from "../data/portfolioData";
import { SocialLinks } from "../components/SocialLinks";
import { SectionHeader } from "../components/SectionHeader";
import { cn } from "../lib/utils";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const hasPlaceholderEndpoint = !contactFormConfig.endpoint;

  const validateForm = (values: FormValues) => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!validateEmail(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!values.message.trim()) nextErrors.message = "Please enter a message.";
    else if (values.message.trim().length < 20) {
      nextErrors.message = "Please add a little more detail so I have enough context.";
    }

    return nextErrors;
  };

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;

      setFormValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      if (submitState !== "idle") {
        setSubmitState("idle");
        setSubmitMessage("");
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      setSubmitMessage("Please fix the highlighted fields and try again.");
      return;
    }

    if (hasPlaceholderEndpoint) {
      setSubmitState("error");
      setSubmitMessage("The form endpoint is missing. Add your Formspree endpoint to enable submissions.");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      const response = await fetch(contactFormConfig.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
          _subject: `Portfolio Contact: ${formValues.subject}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmitState("success");
      setSubmitMessage("Message sent successfully. Thanks for reaching out.");
      setFormValues(initialValues);
      setErrors({});
    } catch {
      setSubmitState("error");
      setSubmitMessage(
        "Something went wrong while sending your message. You can try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-panel max-w-5xl">
        <SectionHeader title="Contact Me" framed />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <p className="theme-muted mx-auto mb-8 max-w-2xl text-center text-base leading-8 sm:text-lg">
            Have an opportunity, project, or collaboration in mind? Feel free to reach
            out.
          </p>
          <motion.div className="glass-card glass-card-black p-8 sm:p-10">
            <div className="glass-card-overlay" />
            <div className="glass-card-content">
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="theme-text mb-2 block text-sm font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="theme-input w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 ease-out"
                  />
                  {errors.name ? (
                    <span id="contact-name-error" className="mt-2 block text-sm text-red-300">
                      {errors.name}
                    </span>
                  ) : null}
                </label>

                <label className="block">
                  <span className="theme-text mb-2 block text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className="theme-input w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 ease-out"
                  />
                  {errors.email ? (
                    <span id="contact-email-error" className="mt-2 block text-sm text-red-300">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>

              <label className="block">
                <span className="theme-text mb-2 block text-sm font-medium">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange("subject")}
                  placeholder="What would you like to talk about?"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className="theme-input w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 ease-out"
                />
                {errors.subject ? (
                  <span id="contact-subject-error" className="mt-2 block text-sm text-red-300">
                    {errors.subject}
                  </span>
                ) : null}
              </label>

              <label className="block">
                <span className="theme-text mb-2 block text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me a bit about the opportunity, project, or idea."
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className="theme-input w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 ease-out"
                />
                {errors.message ? (
                  <span id="contact-message-error" className="mt-2 block text-sm text-red-300">
                    {errors.message}
                  </span>
                ) : null}
              </label>

              {submitMessage ? (
                <div
                  className={cn(
                    "flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
                    submitState === "success"
                      ? "theme-feedback-success"
                      : "theme-feedback-error",
                  )}
                >
                  {submitState === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
                  )}
                  <span>{submitMessage}</span>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="theme-btn-primary theme-interactive inline-flex w-full items-center justify-center gap-3 rounded-full border px-6 py-4 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="theme-button-icon h-5 w-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="theme-button-icon h-5 w-5" />
                  </>
                )}
              </button>
            </form>
            </div>
          </motion.div>

          <SocialLinks className="mt-6 justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
