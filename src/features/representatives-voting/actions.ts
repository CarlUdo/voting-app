"use server";

import { revalidatePath } from "next/cache";
import { representativesVotingService } from ".";

export const addRepresentativeVoteAction = async (formData: FormData) => {
  const representativeId = formData.get("representativeId") as string;
  const issueId = formData.get("issueId") as string;
  const choiceId = formData.get("choiceId") as string;

  try {
    await representativesVotingService.add({
      representativeId,
      issueId,
      choiceId,
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/representative-vote");
};
