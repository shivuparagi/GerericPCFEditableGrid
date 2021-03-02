import { IsEmpty, GetEditIconHTML } from "../utils/utils";

export default function commonFormatter(cell: any, isReadOnly: boolean) {
  var div = document.createElement("div");
  div.className = "grid-common-formatter";
  let divText = "---";
  if (!IsEmpty(cell.getValue())) {
    divText = cell.getValue();
  }
  if (isReadOnly) div.innerHTML = divText;
  else div.innerHTML = divText + GetEditIconHTML();
  return div;
}
