// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      //"@typescript-eslint/no-unused-vars": "off", // 사용하지 않은 변수에 대해 아무 표시를 하지 않는다.
      "@typescript-eslint/no-unused-vars": "warn" // 사용하지 않은 변수에 대해 경고 밑줄만 표시한다.
    },
  },
];

export default eslintConfig;
