import iField from "./iField";
export default interface iRelatedEntity {
  entity?: string;
  linkedFieldName?: string;
  pageUrl?: string;
  fieldsToShow?: iField[];
}
