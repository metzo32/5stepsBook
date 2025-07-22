import styled from "@emotion/styled";

export const StarWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const StarDiv = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const LeftStarBox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;
`

export const RightStarBox = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;
`
