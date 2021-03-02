import { IsEmpty, GetEditIconHTML } from "../utils/utils";

export default function navFormatter(
  cell: any,
  relativeUrl: string,
  primaryKeyField: string
) {
  let tmpAnchor = document.createElement("a");
  tmpAnchor.href = "#";
  tmpAnchor.id = "lnk" + cell.getRow().getPosition(true);
  tmpAnchor.tabIndex = -1;
  tmpAnchor.innerHTML = '<div class="gridNav"></div>';
  tmpAnchor.className = "editable_grid_title_link";
  tmpAnchor.setAttribute("aria-label", "Navigate");
  tmpAnchor.onclick = (e) => {
    e.preventDefault();
  };

  if (cell.getData()[primaryKeyField]) {
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
