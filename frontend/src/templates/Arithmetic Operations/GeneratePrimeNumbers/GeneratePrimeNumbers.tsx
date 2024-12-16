import {
  FormBoxConfigModel,
  FormDetailsGeneratePrimeNumbers,
  FormDetailsInput,
  FormInputTypesEnum,
} from "../../../models/FormModels";
import GeneralForm from "../../GeneralForms/GeneralForm";
import { ButtonConfigModel } from "../../../models/ButtonModels";

export interface GeneratePrimeNumbersProps {
  onSubmitFormBtnClick: (event: any) => void;
  formDetails: FormDetailsInput;
  updateFormDetails: (input: any) => void;
  errors: any;
}

const formConfiguration: FormBoxConfigModel[] = [
  {
    formFieldArray: [
      {
        label: { for: "min", innerText: "Minimum Lower Limit" },
        input: {
          name: "min",
          type: FormInputTypesEnum.NUMBER,
          placeholder: "0",
        },
      },
      {
        label: { for: "max", innerText: "Maximum Upper Limit" },
        input: {
          name: "max",
          type: FormInputTypesEnum.NUMBER,
          placeholder: "150",
        },
      },
    ],
  },
];

const GeneratePrimeNumbers: React.FC<GeneratePrimeNumbersProps> = ({
  onSubmitFormBtnClick,
  formDetails,
  updateFormDetails,
  errors,
}) => {
  return (
    <>
      <div className="generate-prime-numbers-container">
        <GeneralForm
          formConfig={formConfiguration}
          onSubmitFormBtnClick={onSubmitFormBtnClick}
          formDetails={formDetails}
          updateFormDetails={updateFormDetails}
          errors={errors}
        />
      </div>
    </>
  );
};
export default GeneratePrimeNumbers;
