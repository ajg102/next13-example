"use server";
import { revalidatePath } from "next/cache";
import getInstance from "./knex";

export const updateItem = async (formData: FormData, id: string) => {
  const knex = getInstance();
  const payload = {
    itemName: formData.get("itemName"),
    itemImageUrl: formData.get("itemImageUrl"),
  };
  await knex("item").update(payload).where({ id });
  revalidatePath(`/basic/${id}`);
};
