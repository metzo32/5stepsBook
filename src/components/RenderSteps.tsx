import { Book } from "@/types/books";
import useHandleNextStep from "./hooks/useHandleNextStep";
import Step01 from "./step01/step01";
import Step02 from "./step02/step02";
import Step03 from "./step03/step03";
import Step04 from "./step04/step04";
import Step05 from "./step05/step05";

export default function RenderSteps({books}: {books: Book[]}) {
  const { currentStep } = useHandleNextStep();

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Step01 books={books}/>;
      case 2:
        return <Step02 />;
      case 3:
        return <Step03 />;
      case 4:
        return <Step04 books={books}/>;
      case 5:
        return <Step05 />;
      default:
        return <Step01 books={books}/>;
    }
  };
  return renderStepComponent();
}
