import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formShcema = authFormSchema("sign-up");

interface customInputPropos {
  control: Control<z.infer<typeof formShcema>>;
  name: FieldPath<z.infer<typeof formShcema>>;
  placeholder: string;
  label: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: customInputPropos) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label} </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  type={name === "password" ? "password" : "text"}
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2"></FormMessage>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;
