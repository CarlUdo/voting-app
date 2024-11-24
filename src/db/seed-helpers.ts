
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
