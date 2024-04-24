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
}

const AuthFormSelect = <T extends Record<string, any>>({
  control,
  name,
  selectItems,
  placeholder,
  title,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <AuthFormItem title={title}>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={placeholder} {...field} />
            </SelectTrigger>
            <SelectContent>
              {selectItems.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </AuthFormItem>
      )}
    />
  );
};

export default AuthFormSelect;
