"use server";

import { revalidatePath } from "next/cache";
import { issuesService } from ".";

export const addIssueAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const choicesJson = formData.get("choices") as string;
  const choices = JSON.parse(choicesJson);

  try {
    await issuesService.add({ name, choices });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/issues");
};

export const updateIssueActiveAction = async (id: string, active: boolean) => {
  try {
    await issuesService.updateActive(id, active);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/issues");
};
