"use client";

import { Checkbox } from "@/components/ui/checkbox";

type CheckBoxInputValues = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

export default function CheckboxInput({
  name,
  label,
  defaultChecked = false,
}: CheckBoxInputValues) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text--sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
