import styled from "@emotion/styled";
import { colGap, rowGap, centered, colGapLg, rowBetween } from "./utils";
import Image from "next/image";

export const ColGapDiv = styled.div`
  ${colGap}
`;

export const ColGapDivFull = styled.div`
  width: 100%;
  ${colGap}
  position: relative;
`;

export const ColGapDivLg = styled.div`
  width: 100%;
  ${colGapLg}
`;

export const RowGapDiv = styled.div`
  ${rowGap}
`;

export const RowGapDivFull = styled.div`
  width: 100%;
  ${rowGap}
`;

export const RowBetween = styled.div`
  width: 100%;
  ${rowBetween}
`;

export const RowBetweenMain = styled.div`
  width: 100%;
  min-width: 508px;
  ${rowBetween}
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
`;
