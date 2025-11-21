"use client";

import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { actionFunction } from "@/utils/types";
import { toast } from "sonner";

const initialState = {
  success: false,
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, functionAction] = useActionState(action, initialState);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    const file = formData.get("image") as File;
    if (file && file.size > 1024 * 1024) {
      toast.error("File size must be less than 1 MB");
      return;
    }

    (async () => {
      setPending(true);
      try {
        await functionAction(formData);
      } catch (err) {
        console.error(err);
      } finally {
        setPending(false);
      }
    })();
  };

  const childrenWithPending = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { pending });
    }
    return child;
  });

  return <form action={handleSubmit}>{childrenWithPending}</form>;
}

export default FormContainer;
