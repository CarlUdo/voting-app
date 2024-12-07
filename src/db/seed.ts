import { represenativesService, issuesService, publicVotingService, representativesVotingService } from "@/features";
import { getPeople, ISSUES_DATA } from "./seed-helpers";

const TOTAL_NUMBER_OF_PEOPLE = 100;
const NUMBER_OF_REPRESENTATIVES = 10;

const seed = async () => {
  console.log("Starting seed process...");
  const allPeople = getPeople(TOTAL_NUMBER_OF_PEOPLE);
  const representatives = allPeople.slice(0, NUMBER_OF_REPRESENTATIVES);

  try {
    console.log("Clearing existing data...");
    await represenativesService.deleteAll();
    await issuesService.deleteAll();
    await publicVotingService.deleteAll();
    await representativesVotingService.deleteAll();

    console.log("Adding representatives...");
    await Promise.all(
      representatives.map(async (rep) => {
        return await represenativesService.add(rep);
      }),
    );

    console.log("Adding public voters...");
    await Promise.all(
      allPeople.map(async (voter) => {
        return await publicVotingService.addPublicVoter(voter);
      }),
    );

    console.log("Creating issues...");
    const createdIssues = [];
    for (const issueData of ISSUES_DATA) {
      const issueId = await issuesService.add({
        name: issueData.name,
        choices: issueData.choices.map((name) => ({ name })),
      });

      const issue = await issuesService.getById(issueId);
      if (issue) {
        createdIssues.push(issue);
      }
    }

    console.log("Seed completed successfully!");
  } catch (error) {
    console.log(`Error seeding representatives`, error);
  }
};

seed();
