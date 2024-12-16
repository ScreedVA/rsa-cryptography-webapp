import { useEffect, useState } from "react";
import "./GeneralForm.css";
import { FormBoxConfigModel, FormDetailsGeneratePrimeNumbers } from "../../models/FormModels";
import { ButtonConfigModel } from "../../models/ButtonModels";
import Button from "../Button/Button";
import { ErrorFormDetailsGeneratePrimeNumbers } from "../../models/ErrorModels";

interface GeneralFormProps {
  formConfig: FormBoxConfigModel[];
  onSubmitFormBtnClick: (input: any) => void;
  formDetails: any;
  updateFormDetails: (input: any) => void;

  formSubmitBtnConfig?: ButtonConfigModel;
  errors?: ErrorFormDetailsGeneratePrimeNumbers;
  formHeading?: string;
  formSubheading?: string;
  formWidth?: string;
  formWidthAlt?: string;
  formBorder?: string;
}

const GeneralForm: React.FC<GeneralFormProps> = ({
  formConfig,
  formSubmitBtnConfig = { btnText: "Start", btnPadding: "10px 5px" },
  onSubmitFormBtnClick,

  formDetails,
  updateFormDetails,
  errors,
  formHeading,
  formSubheading,
  formWidth,
  formWidthAlt,
  formBorder,
}) => {
  const [vwWidth, setVwWidth] = useState(window.innerWidth);

  function handleFormFieldChange(e: any) {
    const { name, value, type } = e.target;
    if (updateFormDetails) {
      let parsedValue = value;

      parsedValue = type == "number" && +parsedValue; // Convert value to type number from string

      updateFormDetails((prevFields: any) => {
        return {
          ...prevFields,
          [name]: parsedValue,
        };
      });
      console.log(`Name ${name} Value: ${value}`);
      console.log(formDetails);
    } else {
      console.log("setFormDetails function is undefined");
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setVwWidth(window.innerWidth);
    };

    // Add event listener to update width on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="general-form-container"
        style={{ ...(formWidth && formWidthAlt ? { width: vwWidth > 1500 ? formWidth : formWidthAlt } : {}) }}
      >
        <form
          onSubmit={onSubmitFormBtnClick}
          className="form-grid"
          style={{ ...(formBorder ? { border: formBorder } : {}) }}
        >
          <h2 className="general-form-heading">{formHeading}</h2>
          <h4 className="general-form-subheading">{formSubheading}</h4>

          {/* Form Box Configuration */}
          {formConfig.map((formBox, index) => (
            <div
              key={`${formBox}-${index}`}
              className="form-item-box"
              style={{ gridTemplateColumns: `repeat(${formBox.formFieldArray.length}, 1fr)` }} // Will use grid to automatically space form fields per on each row
            >
              {/* Form Fields Configuration */}

              {formBox.formFieldArray.map((formField, index) => (
                <div className="form-item-field" key={`${formField}-${index}`}>
                  {/* Label Configuration */}
                  {formField.label && <label htmlFor={formField.label.for}>{formField.label.innerText}</label>}

                  {/* Input Configuration */}
                  {formField.input && (
                    <input
                      type={formField.input.type}
                      name={formField.input.name}
                      // Configure inputValue to loginDetails
                      value={(() => {
                        let inputName: string = formField.input.name;
                        let formDetailsAny: any = formDetails;

                        // Check if formDetails contains a key == to input's name
                        // If said key is found return it's value pair as objectValue else ""
                        let objectValue =
                          formDetails && Object.keys(formDetails).find((key) => key === inputName)
                            ? formDetailsAny[inputName]
                            : "";
                        return objectValue;
                      })()}
                      placeholder={formField.input.placeholder}
                      onChange={handleFormFieldChange}
                    />
                  )}

                  {/* Select Element Configuration */}
                  {formField.select && (
                    <select name={formField.select.name}>
                      {/* Option Element Configuration */}
                      {formField.select.optionsConfigArray.map((option) => (
                        <option value={option.value}>{option.innerText}</option>
                      ))}
                    </select>
                  )}

                  {/* Error Message Configuration */}
                  {(() => {
                    let fieldName: string = formField.label?.for;

                    // Check if formDetails contains a key == to label's 'for' value
                    // If said key is found return it's value pair as the objectValue, else ""
                    let errorsAny: any = errors || {};
                    let errorKey = Object.keys(errorsAny).find((key) => key === fieldName) || "";
                    let errorMsg = (errors && errorsAny[errorKey]) || "";
                    return <small style={{ color: "red" }}>{errorMsg}</small>;
                  })()}
                </div>
              ))}
            </div>
          ))}
          <Button {...formSubmitBtnConfig} />
        </form>
      </div>
    </>
  );
};
export default GeneralForm;
