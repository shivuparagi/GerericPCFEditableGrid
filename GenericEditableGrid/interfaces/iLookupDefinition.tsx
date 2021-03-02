import { IInputs } from "../generated/ManifestTypes";
import iLookupFieldDefinition from "./iLookupFieldDefinition";

export default interface iLookupDefinition {
  lookupField?: iLookupFieldDefinition;
  context?: ComponentFramework.Context<IInputs>;
  selectedCell?: any;
  onLookupClose?(): void;
}
