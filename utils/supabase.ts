import { createClient } from "@supabase/supabase-js";

const bucket = "loomora-bucket";

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  const path = url.split(`/object/public/${bucket}/`)[1];

  if (!path) throw new Error("Invalid Supabase public URL");

  return supabase.storage.from(bucket).remove([path]);
};
