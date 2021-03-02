import iCreateValidation from "./iCreateValidation";
import iLookupFieldDefinition from "./iLookupFieldDefinition";

export default interface iCreateField {
  name?: string;
  displayText?: string;
  dataType?: string;
  validation: iCreateValidation;
  lookUpCol?: iLookupFieldDefinition;
}
