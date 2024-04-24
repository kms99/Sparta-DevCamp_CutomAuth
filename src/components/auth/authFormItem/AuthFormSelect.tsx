import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { PropsWithChildren } from "react";
import AuthFormItem from "./AuthFormItem";
import { FormField } from "@/components/ui/form";
import { FieldValues, Control, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

const AuthFormSelect = <T extends Record<string, any>>({
  children,
  control,
  name,
}: PropsWithChildren<Props<T>>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <AuthFormItem>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" {...field} />
            </SelectTrigger>
            <SelectContent>{children}</SelectContent>
          </Select>
        </AuthFormItem>
      )}
    />
  );
};

export default AuthFormSelect;
