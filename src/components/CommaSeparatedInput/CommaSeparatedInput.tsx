import { useRef } from "react";

interface CommaSeparatedInputProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}

export default function CommaSeparatedInput({
  value,
  onChange,
}: CommaSeparatedInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const formatNumber = (num: number | undefined): string => {
    return num !== undefined ? num.toLocaleString() : "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value.replace(/,/g, "");
    const cursorPos = input.selectionStart ?? 0;

    const prevLength = input.value.length;

    // 마지막 문자열까지 지우기 가능
    if (rawValue === "") {
      onChange(undefined);
      return;
    }

    const num = rawValue === "" ? undefined : Number(rawValue);

    if (!isNaN(num as number)) {
      onChange(num);

      // 리렌더링 후 커서 위치 복원
      requestAnimationFrame(() => {
        const formatted = formatNumber(num);
        const newLength = formatted.length;
        const diff = newLength - prevLength;

        if (inputRef.current) {
          const newCursor = cursorPos + diff;
          inputRef.current.setSelectionRange(newCursor, newCursor);
        }
      });
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={formatNumber(value)}
      onChange={handleChange}
    />
  );
}

// import { useRef } from "react";

// interface CommaSeparatedInputProps {
//   value: number | undefined;
//   onChange: (value: number | undefined) => void;
// }

// export default function CommaSeparatedInput({
//   value,
//   onChange,
// }: CommaSeparatedInputProps) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   // 1000 단위마다 콤마 넣어주는 문자열로 바꾸기
//   const inputWithComma = (num: number | undefined): string => {
//     return num !== undefined ? num.toLocaleString() : "";
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const rawValue = e.target.value.replace(/,/g, "");
//     const num = rawValue === "" ? undefined : Number(rawValue);
//     if (!isNaN(num as number)) {
//       onChange(num);
//     }
//   };

//   return (
//     <input type="text" value={inputWithComma(value)} onChange={handleChange} />
//   );
// }
