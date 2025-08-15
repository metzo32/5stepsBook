import { Controller, useFormContext } from "react-hook-form";
import CommaSeparatedInput from "./CommaSeparatedInput";

interface CommaControllerProps {
  name: string;
}

export default function CommaController({ name }: CommaControllerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CommaSeparatedInput value={field.value} onChange={field.onChange} />
      )}
    />
  );
}
