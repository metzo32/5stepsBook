import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, OptionLi, OptionsUl } from "@/styles/textTags";
import { ColGapDivFull } from "@/styles/divs";

interface Option {
  label: string;
  value: string;
}

interface AutoCompleteProps {
  name: string;
  options: Option[];
}

export default function AutoComplete({ name, options }: AutoCompleteProps) {
  const { control } = useFormContext();
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false); // 옵션 표시 여부

  const filteredOptions = input
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(input.toLowerCase())
      )
    : options;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ColGapDivFull>
          <Input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowOptions(true);
              field.onChange("");
            }}
            // onFocus={() => setShowOptions(true)}
            placeholder="책 제목을 입력하세요"
          />

          {showOptions && filteredOptions.length > 0 && (
            <OptionsUl>
              {filteredOptions.map((opt) => (
                <OptionLi
                  key={opt.value}
                  onClick={() => {
                    field.onChange(opt.value);
                    setInput(""); // 선택 후 입력창 비우기
                    setShowOptions(false);
                  }}
                >
                  {opt.label}
                </OptionLi>
              ))}
            </OptionsUl>
          )}
        </ColGapDivFull>
      )}
    />
  );
}
