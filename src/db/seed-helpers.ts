import type { Representative } from '@/features/representatives';
import { faker } from '@faker-js/faker';

export const getRepresentatives = (numberOfRepresenatives: number): Representative[] => {
  const represenatives = [];
  
  for (let i = 0; i < numberOfRepresenatives; i++) {
    represenatives.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(), 
      email: faker.internet.email(),
    });
  }

  return represenatives;
};
