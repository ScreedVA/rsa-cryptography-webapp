// Enums

export enum FormFieldElementsEnum {
  INPUT = "Input",
  TEXT_AREA = "Text Area",
  LABEL = "Label",
}

export enum FormInputTypesEnum {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  PASSWORD = "password",
  EMAIL = "email",
  RADIA = "radio",
  FILE = "file",
  SEARCH = "search",
}

// Field Input Configs
interface FormElementConfigModel {
  id?: string;
}

interface LabelConfigModel extends FormElementConfigModel {
  for: string;
  innerText: string;
}

interface InputConfigModel extends FormElementConfigModel {
  name: string;
  type: FormInputTypesEnum;
  placeholder: string;
}

interface OptionConfigModel extends FormElementConfigModel {
  value: string;
  innerText: string;
}

interface SelectConfigModel extends FormElementConfigModel {
  name: string;
  optionsConfigArray: OptionConfigModel[];
}

// Form Element Container Configs

type FormFieldConfigModel =
  | { label: LabelConfigModel; input: InputConfigModel; select?: never } // Case 1: Only `input`
  | { label: LabelConfigModel; select: SelectConfigModel; input?: never }; // Case 2: Only `select`

export interface FormBoxConfigModel {
  formFieldArray: FormFieldConfigModel[];
}

// Form Details

export interface FormDetailsGeneratePrimeNumbers {
  min: number;
  max: number;
}

export interface FormDetailsInput extends Partial<FormDetailsGeneratePrimeNumbers> {}
