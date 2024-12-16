import { useState } from "react";
import "./MainUtility.css";
import Operations from "./pages/Operations/Operations";
import {
  EnumOperationsTypeArithmeticOptions,
  EnumOperationsTypeRSAOptions,
  OperationsPropsBase,
} from "../../../models/OperationsModels";
import Input from "./pages/Input/Input";
import { FormDetailsGeneratePrimeNumbers, FormDetailsInput } from "../../../models/FormModels";
import { ErrorFormDetailsInput } from "../../../models/ErrorModels";
import { validateFormDetailsGeneratePrimeNumbers } from "../../../services/ValidationService";

function MainUtility() {
  // Operation Configuration
  const [selectedOperationTabOption, setSelectedOperationsTabOption] = useState<string>("");
  const [operationsConfig] = useState<OperationsPropsBase>({
    updateSelectedTabOption: setSelectedOperationsTabOption,
    selectedTabOption: selectedOperationTabOption,
    tabMenuConfigArray: [
      { optionsArray: Object.values(EnumOperationsTypeArithmeticOptions), tabHeader: "Arithmetic Operations" },
      { optionsArray: Object.values(EnumOperationsTypeRSAOptions), tabHeader: "RSA Operations" },
    ],
  });

  // Input Configuration
  const [inputFormDetails, setInputFormDetails] = useState<FormDetailsInput>({});
  const [inputErrors, setInputErrors] = useState<ErrorFormDetailsInput>({});
  async function handleGeneralInputRequest(event: any) {
    event.preventDefault();

    let requestUrl: string = "";
    let validationErrors: ErrorFormDetailsInput = {};

    switch (selectedOperationTabOption) {
      case EnumOperationsTypeArithmeticOptions.GENERATE_PRIME_NUMBER:
        requestUrl = "/generatePrimeNumber";
        validationErrors = validateFormDetailsGeneratePrimeNumbers(inputFormDetails as FormDetailsGeneratePrimeNumbers);
    }

    // Input Validation
    setInputErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0 && inputFormDetails) {
    }
  }

  return (
    <>
      <div className="main-utility-container">
        <div className="main-operations">
          <Operations {...operationsConfig} selectedTabOption={selectedOperationTabOption} />
        </div>
        <div className="main-input">
          <Input
            onSubmitFormBtnClick={handleGeneralInputRequest}
            selectedOperation={selectedOperationTabOption}
            inputFormDetails={inputFormDetails}
            updateInputFormDetails={setInputFormDetails}
            inputErrors={inputErrors}
          />
        </div>
        <div className="main-output"></div>
      </div>
    </>
  );
}
export default MainUtility;
