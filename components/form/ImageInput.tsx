"use client";

import { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type ImageInputProps = {
  onChange?: (file: File) => void;
};

export default function ImageInput({ onChange }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onChange) {
      onChange(file);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="image">Product Image</Label>
      <Input
        ref={inputRef}
        id="image"
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
