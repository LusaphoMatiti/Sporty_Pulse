"use client";

import { useState } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Option = {
  value: string;
  label: string;
};

type FormSelectProps = {
  name: string;
  label?: string;
  options: Option[];
  defaultValue?: string;
};

export default function FormSelect({
  name,
  label,
  options,
  defaultValue = "",
}: FormSelectProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>

      <input type="hidden" name={name} value={value} />

      <Select value={value} onValueChange={setValue} required>
        <SelectTrigger id={name}>
          <SelectValue placeholder={`Select ${label || name}`} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
