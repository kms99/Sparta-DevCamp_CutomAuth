import AuthFormItem from "./AuthFormItem";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  type: string;
}
const AuthFormInput = <T extends Record<string, any>>({
  placeholder,
  type = "text",
  control,
  name,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <AuthFormItem>
          <Input placeholder={placeholder} type={type} {...field} />
        </AuthFormItem>
      )}
    />
  );
};

export default AuthFormInput;
