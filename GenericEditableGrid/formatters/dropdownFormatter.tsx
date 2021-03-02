import { IsEmpty, GetEditIconHTML } from "../utils/utils";

export default function dropdownFormatter(cell: any, dataSource: any[]) {
  var div = document.createElement("div");
  div.className = "grid-common-formatter";
  let divText = "---";
  if (!IsEmpty(cell.getValue())) {
    let tmpOptions = dataSource.filter(
      (o) => o.Value.toString() === cell.getValue().toString()
    );
    if (tmpOptions.length > 0) {
      divText = tmpOptions[0].Label;
    }
  }
  div.innerHTML = divText + GetEditIconHTML();
  return div;
}
