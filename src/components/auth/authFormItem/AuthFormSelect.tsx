import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import AuthFormItem from "./AuthFormItem";
import { FormField } from "@/components/ui/form";
import { FieldValues, Control, Path } from "react-hook-form";
import { Role } from "@/types/auth.type";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  selectItems: Role[];
  placeholder: string;
  title: string;
  tabAble?: boolean;
}

const AuthFormSelect = <T extends Record<string, any>>({
  control,
  name,
  selectItems,
  placeholder,
  title,
  tabAble,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <AuthFormItem title={title}>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder={placeholder}
                tabIndex={tabAble ? 0 : -1}
              />
            </SelectTrigger>
          </AuthFormItem>
          <SelectContent>
            {selectItems.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default AuthFormSelect;
