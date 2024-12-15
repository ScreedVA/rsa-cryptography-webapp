import { TabMenuPropsBase } from "./TabMenuModels";

export interface OperationsPropsBase {
  tabMenuConfigArray: TabMenuPropsBase[];
  updateSelectedTabOption: (option: string) => void;
  selectedTabOption: string;
}

export type OperationsTypeArithmeticOptions = [
  "Generate Prime Number",
  "Euclidean Algorithm",
  "Extended Euclidean Algorithm",
  "Find Coprime",
  "Solve Inveserse Modolu",
  "Find Prime Factor"
];

export type OperationsTypeRSAOptions = ["Create RSA Key Set"];
