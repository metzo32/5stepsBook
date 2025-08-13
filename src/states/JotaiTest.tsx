// import { Provider, atom, useAtom } from "jotai";
// import { atomWithStorage } from "jotai/utils";

// // const storage = atomWithStorage("keyName", "hello");
// // const textAtom = atom(storage);

// const textAtom = atomWithStorage("keyName", "hello");
// const textLengthAtom = atom((get) => get(textAtom).length);
// const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

// const Input = () => {
//   const [text, setText] = useAtom(textAtom);
//   return <input value={text} onChange={(e) => setText(e.target.value)} />;
// };

// const CharCount = () => {
//   const [leng] = useAtom(textLengthAtom);
//   return <div>길이: {leng}</div>;
// };

// const UpperCase = () => {
//   const [upper] = useAtom(uppercaseAtom);
//   return <div>대문자: {upper}</div>;
// };

// function JotaiTest() {
//   return (
//     <Provider>
//       <Input />
//       <CharCount />
//       <UpperCase />
//     </Provider>
//   );
// }

// export default JotaiTest;

import React from 'react'

export default function JotaiTest() {
  return (
    <div>
      
    </div>
  )
}
