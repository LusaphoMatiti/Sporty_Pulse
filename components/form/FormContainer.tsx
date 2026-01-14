"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "sonner";

export type ActionResult = {
  success: boolean;
  message: string;
};

const initialState: ActionResult = {
  success: false,
  message: "",
};

export type ActionFunction = (
  prevState: ActionResult,
  formData: FormData
) => Promise<ActionResult>;

function FormContainer({
  action,
  children,
}: {
  action: ActionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (!state.message) return;
    state.success ? toast.success(state.message) : toast.error(state.message);
  }, [state]);

  return (
    <form action={formAction} aria-label="form">
      {children}
    </form>
  );
}

export default FormContainer;
