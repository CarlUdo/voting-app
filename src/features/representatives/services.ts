import { newRepresentativeSchema } from "./validation";

const db = [
  {
    name: "Carl",
    email: "carl@wbsweden.com"
  },
  {
    name: "Andrea",
    email: "a@hotmail.com"
  },
];

export const createService = () => {
  return {
    getAll: async () => db,
    add: async (rawData: {name: string, email: string}) => {
      const represenative = newRepresentativeSchema.parse({ rawData });
      db.push(represenative);
    }
  };
};