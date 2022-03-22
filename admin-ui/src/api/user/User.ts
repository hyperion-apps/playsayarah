import { Shop } from "../shop/Shop";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  shops?: Array<Shop>;
  updatedAt: Date;
  username: string;
};
