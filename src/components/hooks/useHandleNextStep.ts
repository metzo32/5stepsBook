import { useRouter } from "next/router";

export default function useHandleNextStep() {
  const router = useRouter();
  const { query } = router;

  const currentStep = Number(query.step || 1);

  const handleNextClick = () => {
    const nextStep = currentStep + 1;
    if (nextStep <= 5) {
      router.push(`/?step=${nextStep}`, undefined, { shallow: true });
    }

    if (currentStep === 2) {
      const rating = Number(query.rating);

      if (rating === 5 || rating <= 1) {
        router.replace(`/?step=3`, undefined, { shallow: true });
      } else {
        router.replace(`/?step=4`, undefined, { shallow: true });
      }
      return;
    }
  };

  return {
    currentStep,
    handleNextClick,
  };
}
