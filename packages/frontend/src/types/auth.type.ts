import { Path, FieldValues } from "react-hook-form";

/**
 * enum type
 */
export enum FormItem {
  "INPUT",
  "SELECT",
}

export enum Role {
  "ADMIN" = "관리자",
  "GENERAL" = "일반사용자",
}

/**
 *  type or interface
 */
export type InputType = "text" | "password" | "email" | "number";

export interface FormItemType<T extends FieldValues> {
  itemType: FormItem;
  name: Path<T>;
  type?: InputType;
  placeholder?: string;
  selectItems?: Role[];
  title: string;
}
