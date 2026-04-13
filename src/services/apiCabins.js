import supabase, { supabaseUrl } from "./supaBase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }

  return data;
}
export async function createCabin(newCabin) {
  // https://zovsztyxgmjgrsmlcpel.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1  create cabin
  const { data, error } = await supabase
    .from("cabin")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }
  // 2.upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete the cabin if there was an error in uploading image
  if (storageError) {
    await supabase.from("cabin").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "cabin image could not be uploading cabin could not be created",
    );
  }

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }

  return data;
}
