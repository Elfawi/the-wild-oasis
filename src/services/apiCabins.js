import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1 : Create / edit a cabin
  let query = supabase.from("cabins");

  // A) Create a new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit an existing cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }
  if (hasImagePath) return data;
  // 2 : Upload the image
  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3 : Delete the cabin if the image upload failed
  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(uploadError);
    throw new Error(
      "cabin image could not be uploaded and cabin was not created"
    );
  }
  return data;
}
