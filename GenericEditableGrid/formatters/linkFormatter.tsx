import { IsEmpty, GetEditIconHTML } from "../utils/utils";

export default function linkFormatter(
  cell: any,
  relativeUrl: string,
  primaryKeyField: string
) {
  let tmpCellVal = cell.getValue();
  let tmpCellValue =
    tmpCellVal === undefined ||
    tmpCellVal === null ||
    tmpCellVal.toString().trim().length === 0
      ? "---"
      : tmpCellVal;

  let tmpAnchor = document.createElement("a");
  tmpAnchor.href = "#";
  tmpAnchor.id = "lnk" + cell.getRow().getPosition(true);
  tmpAnchor.tabIndex = -1;
  tmpAnchor.innerText = tmpCellValue;
  tmpAnchor.className = "editable_grid_title_link";
  tmpAnchor.setAttribute("aria-label", tmpCellValue);
  tmpAnchor.onclick = (e) => {
    e.preventDefault();
  };
  if (tmpCellValue !== "---" && cell.getData()[primaryKeyField]) {
    try {
      let tmpLink = relativeUrl + cell.getData()[primaryKeyField];

      tmpAnchor.onclick = (e) => {
        e.preventDefault();
        window.open(tmpLink, "_self");
      };
    } catch {}
  }
  return tmpAnchor;
}
