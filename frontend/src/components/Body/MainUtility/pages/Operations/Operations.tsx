import TabMenu from "../../../../../templates/TabMenu/TabMenu";
import "./Operations.css";
import { OperationsPropsBase } from "../../../../../models/OperationsModels";
import React from "react";

interface OperationsProps extends OperationsPropsBase {}

const Operations: React.FC<OperationsProps> = ({ tabMenuConfigArray, selectedTabOption, updateSelectedTabOption }) => {
  console.log(selectedTabOption);
  return (
    <>
      <div className="operations-container">
        <div className="operation-test-tab">
          <h5 className="operation-header bordered-heading">Operations</h5>

          {tabMenuConfigArray.map((tabMenuConfig, index) => (
            <React.Fragment key={`${tabMenuConfig.tabHeader}-${index}`}>
              <TabMenu
                {...tabMenuConfig}
                selectedTabOption={selectedTabOption}
                updateSelectedOption={updateSelectedTabOption}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default Operations;
