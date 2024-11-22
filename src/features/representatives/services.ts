import { newRepresentativeSchema } from "./validation";

const db = [
  {
    id: 1,
    name: "Carl",
    email: "carl@wbsweden.com",
  },
  {
    id: 2,
    name: "Andrea",
    email: "a@hotmail.com",
  },
  {
    id: 3,
    name: "Chriss",
    email: "c@hotmail.com",
  },
];

export const createService = () => {
  return {
    getAll: async () => db,
    add: async (rawData: { name: string; email: string }) => {
      const represenative = newRepresentativeSchema.parse(rawData);
      const id = Math.floor(Math.random() * 100000);
      db.push({ id, ...represenative });
    },
    remove: async(id: number) => {
      const index = db.findIndex(representative => representative.id === id);
      
      if (index !== -1) db.splice(index, 1);
    }
  };
};
