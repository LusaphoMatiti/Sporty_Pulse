import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useRef } from "react";

type ImageInputProps = {
  onChange?: (file: File) => void;
};

function ImageInput({ onChange }: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mb-2">
      <Label className="capitalize">Image</Label>
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && onChange) {
            onChange(file);
          }
        }}
      />
    </div>
  );
}

export default ImageInput;
