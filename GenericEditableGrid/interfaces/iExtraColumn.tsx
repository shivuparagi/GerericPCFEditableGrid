import iModalDailog from "./iModalDailog";
import iRelatedEntity from "./iRelatedEntity";

export default interface iExtraColumn {
  displayName: string;
  name: string;
  width?: number;
  formatter?(cell: any, tmpGenericGrid: any): void;
  modalDailog?: iModalDailog;
  relatedEntity?: iRelatedEntity;
  height?: number;
  position?: number;
  options?: any;
}
