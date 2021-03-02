import { IInputs } from "../generated/ManifestTypes";
import iField from "./iField";
export default interface iLookupFieldDefinition {
  entity?: string;
  primaryKey?: string;
  schemaName?: string;
  pageUrl?: string;
  fitlerTextField?: iField;
  fieldsToShow?: iField[];
}
