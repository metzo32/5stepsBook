import { atomWithStorage, createJSONStorage } from "jotai/utils";
import type { FormValues } from "@/types/defaultFormValues";
import { defaultFormValues } from "@/types/defaultFormValues";

export const formAtom = atomWithStorage<FormValues>(
  "formData",
  defaultFormValues,
  createJSONStorage(() => localStorage)
);


