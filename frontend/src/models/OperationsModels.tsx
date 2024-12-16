import { TabMenuPropsBase } from "./TabMenuModels";

export interface OperationsPropsBase {
  tabMenuConfigArray: TabMenuPropsBase[];
  updateSelectedTabOption: (option: string) => void;
  selectedTabOption: string;
}

export enum EnumOperationsTypeArithmeticOptions {
  GENERATE_PRIME_NUMBER = "Generate Prime Number",
  EUCLIDEAN_ALGORITHM = "Euclidean Algorithm",
  EXTENDED_EUCLIDEAN_ALGORITHM = "Extended Euclidean Algorithm",
  FIND_COPRIME = "Find Coprime",
  SOLVE_INVERSE_MODULO = "Solve Inverse Modulo",
  FIND_PRIME_FACTOR = "Find Prime Factor",
}

export enum EnumOperationsTypeRSAOptions {
  CREATE_RSA_KEY_SET = "Create RSA Key Set",
}
