import AuthFormItem from "./AuthFormItem";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { InputType } from "@/types/auth.type";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  type: InputType;
  title: string;
}
const AuthFormInput = <T extends Record<string, any>>({
  placeholder,
  type = "text",
  control,
  name,
  title,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <AuthFormItem title={title}>
          <Input placeholder={placeholder} type={type} {...field} />
        </AuthFormItem>
      )}
    />
  );
};

export default AuthFormInput;
