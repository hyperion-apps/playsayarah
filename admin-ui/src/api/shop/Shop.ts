import { User } from "../user/User";

export type Shop = {
  createdAt: Date;
  id: string;
  name: string | null;
  owner?: User | null;
  updatedAt: Date;
};
