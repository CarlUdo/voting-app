"use server";

import { revalidatePath } from "next/cache";
import { createService } from "./services";

export const addRepresentativeAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  try {
    await createService().add({ name, email });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/representatives");
};

export const removeRepresentativeAction = async (id: number) => {
  try {
    await createService().remove(id);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/representatives");
};

