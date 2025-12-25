"use client";

import React from "react";

function FormContainer({
  action,
  children,
}: {
  action: (formData: FormData) => void | Promise<void>;
  children: React.ReactNode;
}) {
  return <form action={action}>{children}</form>;
}

export default FormContainer;
