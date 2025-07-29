import styled from "@emotion/styled";
import { colGap, rowGap, centered, colGapLg } from "./utils";
import Image from "next/image";

export const ColGapDiv = styled.div`
//   width: 100%;
  ${colGap}
`;

export const ColGapDivLg = styled.div`
  width: 100%;
  ${colGapLg}
`;

export const RowGapDiv = styled.div`
  ${rowGap}
`;
export const RowGapCenterDiv = styled.div`
  ${rowGap}
  align-items: center;
`;

export const CenterDiv = styled.div`
  ${centered}
`;

export const ImageDiv = styled.div`
  width: 200px;
  height: 300px;
  background-color: #695959;
  position: relative;
`;

export const FitImage = styled(Image)`
    object-fit: cover;
`
