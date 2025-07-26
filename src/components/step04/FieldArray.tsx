import { ColGapDiv } from "@/styles/divs";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function FieldArray() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, prepend, remove } = useFieldArray({
    name: "name",
    control,
  });

  return (
    <ColGapDiv>
      {fields.map((field, index) => (
        <input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
        />
      ))}

      <button
        type="button"
        onClick={() => {
          append({ name: "유저 1번" });
        }}
      >
        Append
      </button>
      <button
        type="button"
        onClick={() => {
          prepend({
            name: "유저 2번",
          });
        }}
      >
        Prepend
      </button>

      {/* <input type="text" {...register(`cart${index}.amount`)} /> */}
    </ColGapDiv>
  );
}
