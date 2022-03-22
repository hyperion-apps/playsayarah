import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShopWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
};
