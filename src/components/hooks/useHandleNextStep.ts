import { useRouter } from "next/router";

export default function useHandleNextStep() {
  const router = useRouter();
  const { query } = router;

  const currentStep = Number(query.step || 1);

  const handleNextClick = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 5) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...query, step: nextStep },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return {
    currentStep,
    handleNextClick,
  };
}
