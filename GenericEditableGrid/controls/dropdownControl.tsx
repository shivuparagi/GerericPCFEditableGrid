import { IsEmpty, sortOptionSets } from "./../utils/utils";

let dropdownControl = function (
  cell: any,
  onRendered: any,
  success: any,
  cancel: any,
  editorParams: any
) {
  var editor = document.createElement("select");
  let options = "<option value='0'>---</option>";

  (editorParams.values as []).forEach((option: any) => {
    options =
      options +
      "<option value='" +
      option.Value +
      "'>" +
      option.Label +
      "</option>";
  });

  editor.innerHTML = options;
  editor.className = "selectDropDown";
  editor.setAttribute("aria-label", editorParams.ariaLabel);
  if (editorParams.ariaRequired) editor.setAttribute("aria-required", "true");

  editor.style.width = "90%";

  if (cell && cell.getValue()) editor.value = cell.getValue();

  /* istanbul ignore next */
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

export default dropdownControl;
