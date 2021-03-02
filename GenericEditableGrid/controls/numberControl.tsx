import { IsEmpty } from "./../utils/utils";

let numberControl = function (
  cell: any,
  onRendered: any,
  success: any,
  cancel: any,
  editorParams: any
) {
  var editor = document.createElement("input");
  editor.setAttribute("type", "number");
  editor.className = "customEditor grid-number-control";
  editor.setAttribute("aria-label", editorParams.ariaLabel);
  if (editorParams.ariaRequired) editor.setAttribute("aria-required", "true");

  if (!IsEmpty(cell.getValue())) {
    editor.value = cell.getValue();
  }

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

export default numberControl;
