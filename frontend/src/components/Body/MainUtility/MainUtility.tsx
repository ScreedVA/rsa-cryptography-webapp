import { useEffect, useState } from "react";
import "./MainUtility.css";
import Operations from "./pages/Operations/Operations";
import {
  OperationsPropsBase,
  OperationsTypeArithmeticOptions,
  OperationsTypeRSAOptions,
} from "../../../models/OperationsModels";

function MainUtility() {
  // Operation Configuration
  const [selectedOperationTabOption, setSelectedOperationsTabOption] = useState<string>("");
  const [operationsTypeArithmeticOptions] = useState<OperationsTypeArithmeticOptions>([
    "Generate Prime Number",
    "Euclidean Algorithm",
    "Extended Euclidean Algorithm",
    "Find Coprime",
    "Solve Inveserse Modolu",
    "Find Prime Factor",
  ]);
  const [operationsTypeRSAOptions] = useState<OperationsTypeRSAOptions>(["Create RSA Key Set"]);
  const [operationsConfig] = useState<OperationsPropsBase>({
    updateSelectedTabOption: setSelectedOperationsTabOption,
    selectedTabOption: selectedOperationTabOption,
    tabMenuConfigArray: [
      { optionsArray: operationsTypeArithmeticOptions, tabHeader: "Arithmetic Operations" },
      { optionsArray: operationsTypeRSAOptions, tabHeader: "RSA Operations" },
    ],
  });

  console.log(operationsConfig.selectedTabOption);

  return (
    <>
      <div className="main-utility-container">
        <div className="main-operations">
          <Operations {...operationsConfig} selectedTabOption={selectedOperationTabOption} />
        </div>
        <div className="main-input"></div>
        <div className="main-output"></div>
      </div>
    </>
  );
}
export default MainUtility;
