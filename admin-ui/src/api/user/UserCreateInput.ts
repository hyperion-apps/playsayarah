import { ShopCreateNestedManyWithoutUsersInput } from "./ShopCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  shops?: ShopCreateNestedManyWithoutUsersInput;
  username: string;
};
