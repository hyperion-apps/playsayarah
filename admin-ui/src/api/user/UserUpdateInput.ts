import { ShopUpdateManyWithoutUsersInput } from "./ShopUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  shops?: ShopUpdateManyWithoutUsersInput;
  username?: string;
};
