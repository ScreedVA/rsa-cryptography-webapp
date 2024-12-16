import { FormDetailsGeneratePrimeNumbers, FormDetailsInput } from "./FormModels";

export type ErrorFormDetailsGeneratePrimeNumbers = {
  [K in keyof Partial<FormDetailsGeneratePrimeNumbers>]: string;
};

export interface ErrorFormDetailsInput extends Partial<ErrorFormDetailsGeneratePrimeNumbers> {}
