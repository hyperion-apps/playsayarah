import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShopUpdateInput = {
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
};
