import { TabMenuPropsBase } from "../../models/TabMenuModels";
import "./TabMenu.css";
import { useEffect, useState } from "react";

interface TabMenu extends TabMenuPropsBase {
  selectedTabOption: string;
  updateSelectedOption: (option: string) => void;
}

const TabMenu: React.FC<TabMenu> = ({ optionsArray, selectedTabOption, updateSelectedOption, tabHeader }) => {
  const [toggleTab, setToggleTab] = useState<boolean>(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  console.log(selectedTabOption);
  useEffect(() => {
    console.log(selectedTabOption);
  }, [selectedTabOption]);
  return (
    <>
      <ul className="tab-menu-container">
        {tabHeader ? (
          <>
            <li
              className="tab-header"
              onClick={() => setToggleTab((prevValue) => !prevValue)}
              onMouseEnter={() => setHoveredOption(tabHeader)}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                ...(hoveredOption == tabHeader ? { backgroundColor: "#E8F6ED" } : {}),
              }}
            >
              {tabHeader}
            </li>
            {toggleTab &&
              optionsArray.map((option, index) => (
                <li
                  key={`${option}-${index}`}
                  className="tab-item"
                  onClick={() => updateSelectedOption(option)}
                  onMouseEnter={() => setHoveredOption(option)}
                  onMouseLeave={() => setHoveredOption(null)}
                  style={{
                    ...(hoveredOption == option ? { backgroundColor: "#77A093" } : {}),
                    ...(selectedTabOption == option ? { backgroundColor: "#0E4B24", color: "white" } : {}),
                  }}
                >
                  {option}
                </li>
              ))}
          </>
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};
export default TabMenu;
