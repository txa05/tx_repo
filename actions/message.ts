"use server";

import {
  ServerValidateError,
  createServerValidate,
} from "@tanstack/react-form-nextjs";

import { mail } from "@/lib/mail";

import { MessageSchema, messageFormOptions } from "@/lib/objects";

const validate = createServerValidate({
  ...messageFormOptions,
  onServerValidate: ({ value }) => {
    const result = MessageSchema.safeParse(value);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        fieldErrors[path] = issue.message;
      });
      return fieldErrors;
    }
  },
});

export async function AddMessage(prev: unknown, formData: FormData) {
  try {
    const data = await validate(formData);
    await mail.send(data);
    return { status: 200, message: ["Mensagem enviada com sucesso."] };
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState;
    }
    throw e;
  }
}
