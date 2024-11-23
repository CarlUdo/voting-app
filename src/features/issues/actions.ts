"use server";

import { revalidatePath } from "next/cache";
import { issuesService } from "./instance";

export const addIssueAction = async (formData: FormData) => {
  const name = formData.get("name") as string;

  try {
    await issuesService.add({ name, active: true });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/issues");
};
