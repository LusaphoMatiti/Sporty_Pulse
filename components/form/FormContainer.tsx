"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState = {
  success: false,
  message: "",
};

export type ActionResult = typeof initialState;

type ActionFunction = (
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

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
