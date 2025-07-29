import { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { LeftStarBox, RightStarBox, StarDiv, StarWrapper } from "./styles";
import { useRouter } from "next/router";

interface StarRatingProps {
  value: number | null;
  onChangeValue: (value: number) => void;
}

export default function StarRating({ value, onChangeValue }: StarRatingProps) {
  const router = useRouter();

  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const renderStar = (index: number) => {
    const currentValue = hoveredValue ?? value ?? 0;

    if (currentValue >= index + 1) return <BsStarFill size={30} />;
    if (currentValue >= index + 0.5) return <BsStarHalf size={30} />;

    return <BsStar size={30} />;
  };

  const handleClick = (index: number) => {
    onChangeValue(index);

    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, rating: index.toString() },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleMouseEnter = (index: number) => setHoveredValue(index);

  const handleMouseLeave = () => setHoveredValue(null);

  return (
    <StarWrapper>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarDiv key={i}>
          <LeftStarBox
            onMouseEnter={() => handleMouseEnter(i + 0.5)}
            onClick={() => handleClick(i + 0.5)}
            onMouseLeave={handleMouseLeave}
          />

          <RightStarBox
            onMouseEnter={() => handleMouseEnter(i + 1)}
            onClick={() => handleClick(i + 1)}
            onMouseLeave={handleMouseLeave}
          />

          {renderStar(i)}
        </StarDiv>
      ))}
    </StarWrapper>
  );
}
