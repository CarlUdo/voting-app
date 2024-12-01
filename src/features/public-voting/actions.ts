"use server";

import { revalidatePath } from "next/cache";
import { publicVotingService } from ".";

export const addPublicVoteAction = async (formData: FormData) => {
  const publicVoterId = formData.get("publicVoterId") as string;
  const representativeId = formData.get("representativeId") as string;

  try {
    await publicVotingService.add({ publicVoterId, representativeId });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/public-voting");
};
