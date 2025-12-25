"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export type ActionResult = {
  success: boolean;
  message: string;
};

const initialState: ActionResult = {
  success: false,
  message: "",
};

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

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state.success, state.message]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
