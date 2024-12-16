import { ErrorFormDetailsGeneratePrimeNumbers, ErrorFormDetailsInput } from "../models/ErrorModels";
import { FormDetailsGeneratePrimeNumbers, FormDetailsInput } from "../models/FormModels";

export function validateFormDetailsGeneratePrimeNumbers(validationModel: FormDetailsGeneratePrimeNumbers) {
  const errors: ErrorFormDetailsGeneratePrimeNumbers = {};

  if (!validationModel || !validationModel.min) errors.min = "Minimum value is required";
  if (!validationModel || !validationModel.max) errors.max = "Maximum value is required";
  else if (validationModel.min >= validationModel.max) errors.min = "Minimum value must be smaller than maximum value";

  return errors as ErrorFormDetailsInput;
}
