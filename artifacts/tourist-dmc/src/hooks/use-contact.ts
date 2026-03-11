import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate API call for static site
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Contact form submitted:", data);
      return { success: true, message: "Message sent successfully" };
    },
  });
}
