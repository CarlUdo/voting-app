"use server";

import { revalidatePath } from "next/cache";
import { represenativesService } from "./instance";

export const addRepresentativeAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  try {
    await represenativesService.add({ name, email });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/representatives");
};

export const removeRepresentativeAction = async (id: number) => {
  try {
    //await represenativesService.remove(id);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/representatives");
};
