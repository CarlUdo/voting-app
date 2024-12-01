import { RepresentativeType } from "@/libs";
import { faker } from "@faker-js/faker";

export const getPeople = (numberOfPeople: number): RepresentativeType[] => {
  const people = [];

  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }

  return people;
};

export const ISSUES_DATA = [
  {
    name: "Office Location Change",
    choices: [
      "Stay in current location",
      "Move to city center",
      "Move to suburbs",
    ],
  },
  {
    name: "Work From Home Policy",
    choices: ["Full remote", "Hybrid 3/2", "Office first with flexible remote"],
  },
  {
    name: "Company Benefits Package",
    choices: ["Health focused", "Financial focused", "Balanced approach"],
  },
  {
    name: "Environmental Initiative",
    choices: [
      "Solar panel installation",
      "Waste reduction program",
      "Green commute incentives",
    ],
  },
  {
    name: "Technology Stack Update",
    choices: [
      "Stay with current stack",
      "Gradual migration",
      "Complete overhaul",
    ],
  },
  {
    name: "Office Pet Policy",
    choices: ["No pets allowed", "Dogs only", "All pets welcome"],
  },
  {
    name: "Learning Budget",
    choices: [
      "Individual allocation",
      "Team-based pool",
      "Project-based funding",
    ],
  },
  {
    name: "Meeting Culture",
    choices: ["No meeting days", "Core hours only", "Flexible scheduling"],
  },
  {
    name: "Office Layout",
    choices: ["Open plan", "Mixed spaces", "Private offices"],
  },
  {
    name: "Company Events",
    choices: [
      "Monthly team events",
      "Quarterly celebrations",
      "Annual gatherings",
    ],
  },
];

// export const generateDateInPast = (yearsAgo = 4) => {
//   const start = subYears(new Date(), yearsAgo);
//   const end = new Date();
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// };
