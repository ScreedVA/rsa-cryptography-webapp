import { useEffect } from "react";
import {
  EnumOperationsTypeArithmeticOptions,
  EnumOperationsTypeRSAOptions,
} from "../../../../../models/OperationsModels";
import GeneratePrimeNumbers from "../../../../../templates/Arithmetic Operations/GeneratePrimeNumbers/GeneratePrimeNumbers";
import "./Input.css";
import { FormDetailsInput } from "../../../../../models/FormModels";
import { ErrorFormDetailsInput } from "../../../../../models/ErrorModels";
interface InputProps {
  selectedOperation: string;
  onSubmitFormBtnClick: (event: any) => void;
  inputFormDetails: FormDetailsInput;
  updateInputFormDetails: (inputFormDetails: FormDetailsInput) => void;
  inputErrors: ErrorFormDetailsInput;
}

const Input: React.FC<InputProps> = ({
  selectedOperation,
  onSubmitFormBtnClick,
  inputFormDetails,
  updateInputFormDetails,
  inputErrors,
}) => {
  useEffect(() => {}, [selectedOperation]);

  return (
    <>
      <div className="input-container">
        <h5 className="bordered-heading">Input</h5>
        <div className="input-body">
          {selectedOperation && EnumOperationsTypeArithmeticOptions.GENERATE_PRIME_NUMBER && (
            <GeneratePrimeNumbers
              onSubmitFormBtnClick={onSubmitFormBtnClick}
              formDetails={inputFormDetails}
              updateFormDetails={updateInputFormDetails}
              errors={inputErrors}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Input;
