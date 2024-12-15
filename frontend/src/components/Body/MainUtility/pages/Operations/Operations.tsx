import { useState } from "react";
import TabMenu from "../../../../../templates/TabMenu/TabMenu";
import "./Operations.css";
import { OperationsPropsBase } from "../../../../../models/OperationsModels";

interface OperationsProps extends OperationsPropsBase {}

const Operations: React.FC<OperationsProps> = ({ tabMenuConfigArray, selectedTabOption, updateSelectedTabOption }) => {
  console.log(selectedTabOption);
  return (
    <>
      <div className="operations-container">
        <div className="operation-test-tab">
          <li className="operation-header">Operations</li>
          {tabMenuConfigArray.map((tabMenuConfig, index) => (
            <TabMenu
              {...tabMenuConfig}
              selectedTabOption={selectedTabOption}
              updateSelectedOption={updateSelectedTabOption}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Operations;
