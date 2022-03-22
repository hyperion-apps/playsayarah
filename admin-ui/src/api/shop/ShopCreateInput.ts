import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShopCreateInput = {
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
};
