import { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, OptionLi, OptionsUl } from "@/styles/textTags";
import { ColGapDivFull } from "@/styles/divs";

interface Option {
  label: string;
  value: string | number;
}

interface AutoCompleteProps {
  name: string; // RHF 필드 이름
  options: Option[];
}

export default function AutoComplete({ name, options }: AutoCompleteProps) {
  const { control, watch } = useFormContext();
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false); // 옵션 표시 여부

  // Watch the form value to update input display
  const selectedValue = watch(name);

  // Update input display when form value changes (e.g., on page reload or reset)
  useEffect(() => {
    if (selectedValue) {
      const selectedOption = options.find(opt => opt.value === selectedValue);
      if (selectedOption) {
        setInput(selectedOption.label);
      }
    } else {
      // Clear input when form value is null/undefined (e.g., after reset)
      setInput("");
    }
  }, [selectedValue, options]);

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
              // Only clear the form value if user is typing something different
              if (!e.target.value) {
                field.onChange(null);
              }
            }}
            onFocus={() => setShowOptions(true)}
            placeholder="책 제목을 입력하세요"
          />

          {showOptions && filteredOptions.length > 0 && (
            <OptionsUl>
              {filteredOptions.map((opt) => (
                <OptionLi
                  key={opt.value}
                  onClick={() => {
                    field.onChange(opt.value); // 해당 bookId 등록
                    setInput(opt.label); // Show the selected option label
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
