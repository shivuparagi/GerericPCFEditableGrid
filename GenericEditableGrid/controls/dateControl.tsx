import { IsEmpty } from "../utils/utils";
import { format, isDate } from "date-fns";

let dateControl = function (
  cell: any,
  onRendered: any,
  success: any,
  cancel: any,
  editorParams: any
) {
  var editor = document.createElement("input");
  editor.setAttribute("type", "date");
  editor.className = "customEditor";
  editor.setAttribute("aria-label", editorParams.ariaLabel);
  if (editorParams.ariaRequired) editor.setAttribute("aria-required", "true");

  try {
    if (!IsEmpty(cell.getValue())) {
      if (isDate(new Date(cell.getValue()))) {
        editor.value = format(new Date(cell.getValue()), "yyyy-MM-dd");
      } else {
        editor.value = cell.getValue();
      }
    }
  } catch {}

  onRendered(function () {
    editor.focus();
    editor.click();
    editor.style.width = "90%";
  });

  /* istanbul ignore next */
  function successFunc() {
    success(editor.value);
  }

  editor.addEventListener("change", successFunc);
  editor.addEventListener("blur", successFunc);

  return editor;
};

export default dateControl;
