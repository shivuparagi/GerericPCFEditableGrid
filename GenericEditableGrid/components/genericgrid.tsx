import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactTabulator } from "react-tabulator";

import { IInputs } from "../generated/ManifestTypes";
import iPropsInput from "../interfaces/iPropsInput";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
import textControl from "../controls/textControl";
import dateControl from "../controls/dateControl";
import numberControl from "../controls/numberControl";
import dropdownControl from "../controls/dropdownControl";
import dropdownFormatter from "../formatters/dropdownFormatter";
import commonFormatter from "../formatters/commonFormatter";
import GetSampleEngagements from "../sampledata/myEngagementData";
import { GetGridButtons } from "../utils/getGridButtons";
import iGridButton from "../interfaces/iGridButton";
import iColumnDefintion from "../interfaces/iColumnDefinition";
import iMessage from "../interfaces/iMessage";
import iRowsByPosition from "../interfaces/iRowsByPosition";
import { IsEmpty, IsTexChanged, IsDropdownChanged } from "../utils/utils";
import ValidationMessages from "./ValidationMessages";
import linkFormatter from "../formatters/linkFormatter";
import navFormatter from "../formatters/navFormatter";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
  Link,
  Modal,
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  DefaultButton,
  IDragOptions,
  IconButton,
  IIconProps,
  initializeIcons,
} from "office-ui-fabric-react";
import iExtraColumn from "../interfaces/iExtraColumn";
import iModalDialog from "../interfaces/iModalDailog";
import { differenceInDays, parse, format } from "date-fns";
import LookupComponent from "./LookupComponent";
import iField from "../interfaces/iField";

var sortJsonArray = require("sort-json-array");
const isEqual = require("react-fast-compare");

initializeIcons();

const theme = getTheme();
const cancelIcon: IIconProps = { iconName: "Cancel" };
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
  },
  header: [
    // eslint-disable-next-line deprecation/deprecation
    theme.fonts.xLargePlus,
    {
      flex: "1 1 auto",
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 },
    },
  },
});
const toggleStyles = { root: { marginBottom: "20px" } };
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};

const headerMenu = [
  {
    label: "<i class='hideIcon'></i> Hide Column",
    action: function (e: any, column: any) {
      column.hide();
    },
  },
  {
    label: "<i class='fas fa-arrows-alt'></i> Move Column",
    action: function (e: any, column: any) {
      try {
        column.move(column.getNextColumn().getField());
      } catch {}
    },
  },
];

type DataSet = ComponentFramework.PropertyTypes.DataSet;
const STR_ROW_STATE = "rowstate";
const IS_SELECTED = "is_selected";

class GenericGrid extends React.Component<iPropsInput> {
  ref: any = null;
  _context: ComponentFramework.Context<IInputs>;
  _data: any[] = [];
  _originalData: any[] = [];
  _editableColumns: any[] = [];
  _optionSetCollection: any[] = [];
  _parentEntityId: string = "";
  _parentEntityTypeName: string = "";
  _entityTypeName: string = "";
  _primaryKeyName: string = "";
  _primaryFieldName: string = "";
  _parentLinkedEntityColumnId: string = "";
  _relativeUrl: string = "";
  _groupBy: string[] = [];
  _gridOptions: any = {
    layoutColumnsOnNewData: true,
    tooltips: true,
    addRowPos: "top",
    history: true,
    resizableRows: true,
    height: 400,
    downloadDataFormatter: (data: any) => data,
    downloadReady: (fileContents: any, blob: any) => blob,
    clipboard: true,
    clipboardPasteAction: "replace",
    clipboardCopyConfig: {
      columnHeaders: false, //do not include column headers in clipboard output
      columnGroups: false, //do not include column groups in column headers for printed table
      rowGroups: false, //do not include row groups in clipboard output
      columnCalcs: false, //do not include column calculation rows in clipboard output
      dataTree: false, //do not include data tree in printed table
      formatCells: false, //show raw cell values without formatter
    },
  };

  _gridConfig: any = undefined;
  _hygiene: any = undefined;
  _relatedEntities: any[] = [];
  _showValidationsMessage: boolean = true;

  state = {
    data: this._data,
    validations: [],
    warnings: [],
    saveSuccesses: [],
    saveErrors: [],
    isOpen: false,
    iframeURL: "",
    isLookupOpen: false,

    lookupField: undefined,
    selectedCell: undefined,

    clonedRowNumber: undefined,
    cloneClicked: false,
    addNewClicked: false,
  };
  constructor(props: iPropsInput) {
    super(props);
    this._context = props.context;
    this._gridConfig = props.gridConfig?.config;
    this._hygiene = props.hygiene;
    if (
      this._gridConfig?.ShowValidationsMessage !== null &&
      this._gridConfig.ShowValidationsMessage !== undefined
    )
      this._showValidationsMessage = this._gridConfig?.ShowValidationsMessage;

    this._parentEntityId = (props.context as any)?.page?.entityId;
    this._parentEntityTypeName = (props.context as any)?.page?.entityTypeName;
    if (props.context.parameters.EntityName.raw)
      this._entityTypeName = props.context.parameters.EntityName.raw;
    else this._entityTypeName = this._parentEntityTypeName;

    this._primaryKeyName = props.context.parameters.PrimaryKeyName.raw ?? "";
    this._relativeUrl = props.context.parameters.RelativeUrl.raw ?? "";

    this._primaryFieldName =
      props.context.parameters.PrimaryFieldName.raw ?? "";
    this._parentLinkedEntityColumnId =
      props.context.parameters.ParentLinkedEntityColumnId.raw ?? "";

    this._optionSetCollection = props.optionSets;
    //this._context.parameters.sampleDataSet.columns = GetSampleEngagements().columns;

    if (this._gridConfig?.GroupBy) this._groupBy = this._gridConfig?.GroupBy;
    if (this._gridConfig?.Options) {
      this._gridOptions = Object.assign(
        this._gridOptions,
        this._gridConfig?.Options
      );
    }
    this.LoadColumns();
    this.GetExtraColumns();
    this.LoadData();
  }
  getConfig = () => {};
  getOptionSets = (option: string) => {
    if (this._optionSetCollection.length > 0) {
      let tmpOptionSets = this._optionSetCollection.filter(
        (optionset) => optionset.attributeDescriptor.LogicalName === option
      );
      if (tmpOptionSets.length > 0) {
        return tmpOptionSets[0].attributeDescriptor.OptionSet;
      }
    }
    return [];
  };

  GetHeaderFilterParams = (option: string) => {
    let tmpOptions = this.getOptionSets(option);

    let tmpReturnObject: any = {};

    (tmpOptions as []).forEach((option: any) => {
      tmpReturnObject[option.Value] = option.Label;
    });
    return tmpReturnObject;
  };

  LoadColumns = () => {
    let thisRef = this;
    let boolIsFrozen = this._gridConfig?.IsFrozen ?? false;

    this._editableColumns.push({
      title:
        "<input class='grid-header-checkbox' type='checkbox' id='chkHeader'>",
      field: IS_SELECTED,
      align: "center",
      width: 60,
      formatter: this.checkBoxFormatter,
      frozen: true,
      headerSort: false,
      headerClick: function (e: any, column: any) {
        if (e.srcElement.id.toString().length === 0) {
          thisRef.SelectOrDeselectAllRows(false);
        } else {
          thisRef.SelectOrDeselectAllRows(true);
        }
      },
      cellClick: function (e: any, cell: any) {
        if (e.srcElement.id.toString().length === 0) {
          try {
            cell.getRow().update({
              is_selected: !cell?.getElement()?.firstChild.checked,
            });
          } catch {}
        }
      },
    });

    let boolShowRowState = this._gridConfig?.ShowRowState ?? true;

    if (boolShowRowState)
      this._editableColumns.push({
        formatter: function (cell: any) {
          let tmpDiv = document.createElement("div");
          tmpDiv.tabIndex = -1;
          tmpDiv.className = "gridNewText";
          tmpDiv.setAttribute("aria-label", "New Record");
          tmpDiv.innerText = cell.getValue();
          return tmpDiv;
        },
        field: "rowstate",
        align: "center",
        headerSort: false,
        width: 100,
        frozen: boolIsFrozen,
        title: "Row State",
        headerMenu: this.headerMenu,
      });

    this._context.parameters.sampleDataSet.columns.forEach(
      (column: DataSetInterfaces.Column) => {
        let tmpColDef = this.GetCustomColumnDefinition(column.name);
        let tmpCol: any = {
          title: column.displayName,
          field: column.name.replace(".", "_"),
          headerTooltip: column.displayName,
        };
        if (!tmpColDef?.isHidden) {
          if (tmpColDef?.displayName) {
            tmpCol["title"] = tmpColDef.displayName;
            tmpCol["headerTooltip"] = tmpColDef.displayName;
          }

          tmpCol["headerMenu"] = this.headerMenu;
          tmpCol["formatter"] = (cell: any) =>
            commonFormatter(cell, tmpColDef?.readonly ?? false);
          if (tmpColDef?.linkTo)
            tmpCol["formatter"] = (cell: any) =>
              linkFormatter(cell, tmpColDef?.linkTo!, this._primaryKeyName);
          if (!tmpColDef?.readonly)
            tmpCol["cellEdited"] = (cell: any) =>
              this.OnCellEdited(cell, tmpColDef);

          tmpCol["editable"] = (cell: any) => this.OnEditCheck(cell, tmpColDef);

          if (tmpColDef?.headerFilter) {
            tmpCol["headerFilter"] = "input";
            if (
              column.dataType === "OptionSet" ||
              column.dataType === "TwoOptions"
            ) {
              tmpCol["headerFilter"] = dropdownControl;
              tmpCol["headerFilterParams"] = {
                values: this.getOptionSets(column.name),
              };
            }
          }

          if (tmpColDef?.isFrozen) {
            tmpCol["frozen"] = tmpColDef?.isFrozen;
          }

          if (tmpColDef?.formatter)
            tmpCol["formatter"] = (cell: any) =>
              this.CallCustomFormatter(cell, tmpColDef);

          if (tmpColDef?.modalDailog) {
            tmpColDef.readonly = true;
            tmpCol["formatter"] = (cell: any) => {
              return this.ModelFormatter(cell, tmpColDef);
            };
          }

          tmpCol["width"] = column.visualSizeFactor;
          if (tmpColDef?.lookUpCol) {
            tmpColDef.readonly = true;
            tmpCol["formatter"] = (cell: any) =>
              this.LookupFormatter(cell, tmpColDef);
            tmpCol["width"] = column.visualSizeFactor + 25;
          }
          if (tmpColDef?.hygiene) {
            tmpColDef.readonly = true;
            tmpCol["formatter"] = (cell: any) => {
              return this.HygieneFormatter(cell, tmpColDef);
            };
          }

          if (tmpColDef?.width) {
            tmpCol["width"] = tmpColDef?.width ?? column.visualSizeFactor;
          }
          if (tmpColDef?.options) {
            tmpCol = Object.assign(tmpCol, tmpColDef.options);
          }
          if (tmpColDef?.customEditor || tmpColDef?.tabulatorEditorUsed) {
            if (tmpColDef?.customEditor) {
              tmpCol["editor"] = (
                cell: any,
                onRendered: any,
                success: any,
                cancel: any
              ) =>
                this.CallCustomEditor(
                  cell,
                  onRendered,
                  success,
                  cancel,
                  tmpColDef
                );
            }
          } else {
            switch (column.dataType) {
              case "SingleLine.Text":
              case "SingleLine.Phone":
              case "SingleLine.Email":
              case "SingleLine.TextArea":
              case "SingleLine.URL":
              case "Multiple":
                if (!tmpColDef?.readonly) tmpCol["editor"] = textControl;
                break;
              case "DateAndTime.DateAndTime":
              case "DateAndTime.DateOnly":
                if (!tmpColDef?.readonly) tmpCol["editor"] = dateControl;
                break;
              case "Decimal":
              case "Currency":
              case "Whole.None":
                if (!tmpColDef?.readonly) tmpCol["editor"] = numberControl;
                break;
              case "TwoOptions":
              case "OptionSet":
                if (!tmpColDef?.readonly) {
                  tmpCol["editor"] = dropdownControl;
                  tmpCol["editorParams"] = {
                    values: this.getOptionSets(column.name),
                    sortOptions: true,
                  };
                }
                if (!tmpColDef?.formatter) {
                  tmpCol["formatter"] = (cell: any) =>
                    dropdownFormatter(cell, this.getOptionSets(column.name));
                }
                break;
            }
          }
          this._editableColumns.push(tmpCol);
        }
      }
    );
    if (this._relativeUrl.length > 0) {
      this._editableColumns.push({
        formatter: (cell: any) =>
          navFormatter(cell, this._relativeUrl, this._primaryKeyName),
        align: "center",
        width: 70,
      });
    }
  };

  checkBoxFormatter = (cell: any) => {
    let tmpCheckBox = document.createElement("input");
    tmpCheckBox.id = "chk" + cell.getRow().getPosition(true);
    tmpCheckBox.type = "checkbox";
    tmpCheckBox.className = "EditableGrid_CheckBox";
    tmpCheckBox.tabIndex = -1;
    tmpCheckBox.setAttribute("aria-label", "Select Milestone");
    if (cell.getValue()) {
      cell.getRow().select();
      tmpCheckBox.checked = true;
    } else {
      cell.getRow().deselect();
      tmpCheckBox.checked = false;
    }

    tmpCheckBox.onclick = () => {
      try {
        cell.getRow().update({ is_selected: tmpCheckBox.checked });
        cell?.getElement()?.firstChild?.focus();
      } catch {}
    };

    return tmpCheckBox;
  };

  headerMenu = () => {
    var menu = [];
    var columns = this.ref.table.getColumns();
    for (let column of columns) {
      let tmpFieldName = (column as any).getDefinition().field;
      if (tmpFieldName !== "rowstate" && tmpFieldName !== IS_SELECTED) {
        let tmpText = (column as any).getDefinition().title;
        if ((column as any).getDefinition().headerTooltip)
          tmpText = (column as any).getDefinition().headerTooltip;

        let icon = document.createElement("input");
        icon.type = "checkbox";
        icon.className = "grid-header-menu-checkbox";
        if ((column as any).isVisible()) icon.checked = true;
        else icon.checked = false;
        let label = document.createElement("span");
        label.className = "grid-header-menu-span";
        let title = document.createElement("label");
        title.textContent = " " + tmpText;
        label.appendChild(icon);
        label.appendChild(title);
        menu.push({
          label: label,
          action: function (e: any) {
            e.stopPropagation();

            (column as any).toggle();

            if ((column as any).isVisible()) {
              icon.checked = true;
            } else {
              icon.checked = false;
            }
          },
        });
      }
    }
    return menu;
  };

  GetRelatedEntityData = async (tmpId: string, tmpColumn: iExtraColumn) => {
    let tmpSelect = "?$select=";
    tmpColumn.relatedEntity?.fieldsToShow?.forEach((tmp: iField, index) => {
      tmpSelect = tmpSelect + tmp.name;
      if (index < (tmpColumn.relatedEntity?.fieldsToShow?.length ?? 0) - 1) {
        tmpSelect = tmpSelect + ",";
      }
    });
    let tmpQueryFilter =
      "&$filter=" + tmpColumn.relatedEntity?.linkedFieldName + " eq " + tmpId;

    var results = await this._context.webAPI.retrieveMultipleRecords(
      tmpColumn.relatedEntity?.entity ?? "",
      tmpSelect + tmpQueryFilter
    );
    return {
      id: tmpId,
      entity: tmpColumn.relatedEntity?.entity,
      data: results.entities,
    };
  };
  PopulateChildItems = (cell: any, tmpColumn: iExtraColumn) => {
    let divRet = document.createElement("div");
    try {
      let arrEntities = this._relatedEntities.filter((tmpEntity: any) => {
        return (
          tmpEntity.id === cell.getData()[this._primaryKeyName] &&
          tmpEntity.entity === tmpColumn.relatedEntity?.entity
        );
      });

      let strTmpe =
        '<table cellpadding="5px" style="width:' +
        tmpColumn.width?.toString() +
        "px;height:" +
        tmpColumn.height?.toString() +
        'px">';
      if (arrEntities.length > 0) {
        arrEntities[0].data.entities.forEach((childItem: any) => {
          strTmpe = strTmpe + "<tr>";
          tmpColumn.relatedEntity?.fieldsToShow?.forEach((tmpField: iField) => {
            let tmpVal = childItem[tmpField.name ?? ""];

            if (
              childItem[
                (tmpField.name ?? "") +
                  "@OData.Community.Display.V1.FormattedValue"
              ]
            )
              tmpVal =
                childItem[
                  (tmpField.name ?? "") +
                    "@OData.Community.Display.V1.FormattedValue"
                ];

            strTmpe =
              strTmpe +
              '<td style="width:' +
              tmpField.width?.toString() +
              'px;">' +
              tmpVal +
              "</td>";
          });
          strTmpe = strTmpe + "</tr>";
        });
      }
      strTmpe = strTmpe + "</table>";
      divRet.innerHTML = strTmpe;
    } catch (ex) {}
    return divRet;
  };
  GetExtraColumns = () => {
    if (this._gridConfig?.ExtraColumns) {
      this._gridConfig?.ExtraColumns.forEach((column: iExtraColumn) => {
        let tmpCol: any = { title: column.displayName, field: column.name };

        tmpCol["headerMenu"] = this.headerMenu;
        if (column?.options) {
          tmpCol = Object.assign(tmpCol, column.options);
        }
        if (column?.formatter) {
          let tmpColDef: iColumnDefintion = {
            name: tmpCol.name,
            formatter: column?.formatter,
          };
          tmpCol["formatter"] = (cell: any) =>
            this.CallCustomFormatter(cell, tmpColDef);
        }
        if (column?.modalDailog)
          tmpCol["formatter"] = (cell: any) =>
            this.ModelDailogFormatter(cell, column?.modalDailog);
        if (column?.relatedEntity) {
          if (!column?.modalDailog) {
            tmpCol["formatter"] = (cell: any) =>
              this.PopulateChildItems(cell, column);
          }
        }

        tmpCol.width = column?.width ?? 100;

        if (column.position)
          this._editableColumns.splice(column.position, 0, tmpCol);
        else this._editableColumns.push(tmpCol);
      });
    }
  };

  GetCustomColumnDefinition = (col: string) => {
    let tmpCol = this._gridConfig?.Columns?.filter((e: any) => e.name === col);
    if (tmpCol?.length > 0) {
      let tmpColDef: iColumnDefintion = { name: col };
      if (tmpCol[0].readonly) tmpColDef.readonly = tmpCol[0].readonly;
      if (tmpCol[0].tabulatorEditorUsed)
        tmpColDef.tabulatorEditorUsed = tmpCol[0].tabulatorEditorUsed;
      if (tmpCol[0].width) tmpColDef.width = tmpCol[0].width;
      if (tmpCol[0].headerFilter)
        tmpColDef.headerFilter = tmpCol[0].headerFilter;
      if (tmpCol[0].isFrozen) tmpColDef.isFrozen = tmpCol[0].isFrozen;
      if (tmpCol[0].autoGenerated)
        tmpColDef.autoGenerated = tmpCol[0].autoGenerated;
      if (tmpCol[0].isRequired) tmpColDef.isRequired = tmpCol[0].isRequired;
      if (tmpCol[0].isLinkColumn)
        tmpColDef.isLinkColumn = tmpCol[0].isLinkColumn;
      if (tmpCol[0].linkTo) tmpColDef.linkTo = tmpCol[0].linkTo;

      // if (tmpCol[0].cellEdited)
      //   tmpColDef.cellEdited = eval("(" + tmpCol[0].cellEdited + ")");
      // if (tmpCol[0].editCheck)
      //   tmpColDef.editCheck = eval("(" + tmpCol[0].editCheck + ")");
      // if (tmpCol[0].formatter)
      //   tmpColDef.formatter = eval("(" + tmpCol[0].formatter + ")");

      if (tmpCol[0].modalDailog) tmpColDef.modalDailog = tmpCol[0].modalDailog;
      if (tmpCol[0].lookUpCol) tmpColDef.lookUpCol = tmpCol[0].lookUpCol;
      if (tmpCol[0].hygiene) tmpColDef.hygiene = tmpCol[0].hygiene;
      if (tmpCol[0].displayName) tmpColDef.displayName = tmpCol[0].displayName;

      if (tmpCol[0].options) tmpColDef.options = tmpCol[0].options;
      if (tmpCol[0].isHidden) {
        tmpColDef.isHidden = tmpCol[0].isHidden;
      } else {
        tmpColDef.isHidden = false;
      }

      //Function Names
      if (tmpCol[0].formatter) tmpColDef.formatter = tmpCol[0].formatter;
      if (tmpCol[0].cellEdited) tmpColDef.cellEdited = tmpCol[0].cellEdited;
      if (tmpCol[0].editCheck) tmpColDef.editCheck = tmpCol[0].editCheck;
      if (tmpCol[0].customEditor)
        tmpColDef.customEditor = tmpCol[0].customEditor;

      return tmpColDef;
    }
    return undefined;
  };

  CallCustomEditor = (
    cell: any,
    onRendered: any,
    success: any,
    cancel: any,
    tmpColDef?: iColumnDefintion
  ) => {
    if (tmpColDef?.customEditor) {
      try {
        const callBackName = "return " + tmpColDef?.customEditor;
        const dynamicFunctionCall = new Function(callBackName)();
        let ret = dynamicFunctionCall(cell, onRendered, success, cancel, this);
        return ret;
      } catch {}
    }
  };

  CallCustomFormatter = (cell: any, tmpColDef?: iColumnDefintion) => {
    if (tmpColDef?.formatter) {
      try {
        const callBackName = "return " + tmpColDef?.formatter;
        const dynamicFunctionCall = new Function(callBackName)();
        let ret = dynamicFunctionCall(cell, this);
        return ret;
      } catch {}
    }
  };

  ModelDailogFormatter = (cell: any, tmpModalProps?: iModalDialog) => {
    let tmpAnchor = document.createElement("a");
    tmpAnchor.href = "#";
    tmpAnchor.id = "lnk" + cell.getRow().getPosition(true);
    tmpAnchor.tabIndex = -1;
    if (tmpModalProps?.icon) {
      tmpAnchor.innerHTML =
        "<img src='" +
        tmpModalProps.icon +
        "' alt='" +
        tmpModalProps.displayText +
        "'>";
    } else {
      tmpAnchor.innerText = tmpModalProps?.displayText ?? "No Text";
    }
    tmpAnchor.className = "editable_grid_title_link";
    tmpAnchor.setAttribute("aria-label", "Milestones");
    tmpAnchor.onclick = (e) => {
      e.preventDefault();
      let egmtId: string = cell.getData()[this._primaryKeyName];
      let tempURL = tmpModalProps?.url ?? "";
      tmpModalProps?.queryParameters?.forEach((tmpParam: string) => {
        let tmpParamVal = cell.getData()[tmpParam] ?? "";
        let tmpReplace = "_" + tmpParam + "_";
        tempURL = tempURL.replace(tmpReplace, tmpParamVal);
      });
      this.openDialog(tempURL ?? "");
    };
    return tmpAnchor;
  };

  HygieneFormatter = (cell: any, tmpColDef?: iColumnDefintion) => {
    var val = cell.getValue()?.toString();
    var bg = "blue";

    if (val === "861980003") {
      bg = "green";
    }
    if (val === "861980001") {
      bg = "red";
    }
    if (val === "861980002") {
      bg = "darkorange";
    }

    var div = document.createElement("div");
    div.style.height = "16px";
    div.style.width = "16px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = bg;

    let tmpToolTip = "7-W5FLLJKIF     Milestone1      On Track \n";
    tmpToolTip = tmpToolTip + "7-VUITXT5PZ     Milestone2      On Track \n";
    tmpToolTip = tmpToolTip + "7-W5FLEUMS     Milestone3      At Risk \n";

    div.title = tmpToolTip;

    return div;
  };

  ModelFormatter = (cell: any, tmpColDef?: iColumnDefintion) => {
    if (cell.getValue()) {
      let tmpAnchor = document.createElement("a");
      tmpAnchor.href = "#";
      tmpAnchor.id = "lnk" + cell.getRow().getPosition(true);
      tmpAnchor.tabIndex = -1;
      tmpAnchor.innerText = cell.getValue();
      tmpAnchor.className = "editable_grid_title_link";
      tmpAnchor.setAttribute("aria-label", "Milestones");
      tmpAnchor.onclick = (e) => {
        e.preventDefault();
        let tempURL = tmpColDef?.modalDailog?.url ?? "";
        tmpColDef?.modalDailog?.queryParameters?.forEach((tmpParam: string) => {
          let tmpParamVal = cell.getData()[tmpParam] ?? "";
          let tmpReplace = "_" + tmpParam + "_";
          tempURL = tempURL.replace(tmpReplace, tmpParamVal);
        });
        this.openDialog(tempURL ?? "");
      };
      return tmpAnchor;
    } else {
      return "";
    }
  };

  OnEditCheck = (cell: any, tmpColDef?: iColumnDefintion) => {
    if (tmpColDef?.editCheck) {
      // return tmpColDef.editCheck(cell, this);
      const callBackName = "return " + tmpColDef?.editCheck;
      const dynamicFunctionCall = new Function(callBackName)();
      let ret = dynamicFunctionCall(cell, this);
      return ret;
    }
    return true;
  };

  OnCellEdited = (cell: any, tmpColDef?: iColumnDefintion) => {
    if (tmpColDef?.isRequired) {
      if (IsEmpty(cell?.getValue())) {
        let tmpMsg =
          "Record " +
          cell.getData()[this._primaryFieldName] +
          " is missing mandatory field " +
          cell.getColumn().getDefinition().title;
        this.AddRemoveValidationMessage(cell, tmpMsg, true);
      } else {
        this.AddRemoveValidationMessage(cell, "", false);
      }
    }
    if (tmpColDef?.cellEdited) {
      // tmpColDef.cellEdited(cell, this);
      const callBackName = "return " + tmpColDef?.cellEdited;
      const dynamicFunctionCall = new Function(callBackName)();
      dynamicFunctionCall(cell, this);
    }
    this.SetRowState(cell);
    this.HandleUnsavedData();
    this.SetGrouping();
    this.ResetSaveMessage();
    try {
      cell?.getElement()?.focus();
    } catch {}
  };

  LoadData = async () => {
    let arrayRelatedEntities: iExtraColumn[] = [];
    let arrayData: any[] = [];

    if (this._gridConfig?.ExtraColumns) {
      this._gridConfig?.ExtraColumns.forEach((column: iExtraColumn) => {
        if (column?.relatedEntity) arrayRelatedEntities.push(column);
      });
    }

    this._context.parameters.sampleDataSet.sortedRecordIds.forEach(
      (recordId) => {
        let tmpData: any = {};
        tmpData[IS_SELECTED] = false;
        tmpData[STR_ROW_STATE] = "";
        tmpData[this._primaryKeyName] = recordId;
        let currentRecord = this._context.parameters.sampleDataSet.records[
          recordId
        ];
        this._context.parameters.sampleDataSet.columns.forEach(
          (column: DataSetInterfaces.Column) => {
            let tmpColName = column.name.replace(".", "_");
            switch (column.dataType) {
              case "Lookup.Simple":
              case "Lookup.Owner":
              case "Lookup.Regarding":
              case "Lookup.Customer":
                tmpData[tmpColName] = currentRecord.getFormattedValue(
                  column.name
                );
                tmpData[tmpColName + "_lkid"] =
                  (currentRecord.getValue(
                    column.name
                  ) as any)?.id?.guid?.toString() ?? "";
                break;
              case "TwoOptions":
              case "OptionSet":
                tmpData[tmpColName] = currentRecord.getValue(column.name);
                break;
              case "Currency":
                tmpData[tmpColName] = currentRecord.getValue(column.name);
                break;
              default:
                tmpData[tmpColName] = currentRecord.getFormattedValue(
                  column.name
                );
                break;
            }
          }
        );
        arrayData.push(tmpData);
        //this._data.push(tmpData);
      }
    );

    if (arrayRelatedEntities.length > 0) {
      let tmpPromizes: any = [];

      this._context.parameters.sampleDataSet.sortedRecordIds.forEach(
        (recordId) => {
          arrayRelatedEntities.forEach((tmpColumn: iExtraColumn) => {
            let tmpSelect = "?$select=";
            tmpColumn.relatedEntity?.fieldsToShow?.forEach(
              (tmp: iField, index) => {
                tmpSelect = tmpSelect + tmp.name;
                if (
                  index <
                  (tmpColumn.relatedEntity?.fieldsToShow?.length ?? 0) - 1
                ) {
                  tmpSelect = tmpSelect + ",";
                }
              }
            );
            let tmpQueryFilter =
              "&$filter=" +
              tmpColumn.relatedEntity?.linkedFieldName +
              " eq " +
              recordId;

            tmpPromizes.push(
              this._context.webAPI.retrieveMultipleRecords(
                tmpColumn.relatedEntity?.entity ?? "",
                tmpSelect + tmpQueryFilter
              )
            );
          });
        }
      );

      let tmpResults = await Promise.all(tmpPromizes);

      this._context.parameters.sampleDataSet.sortedRecordIds.forEach(
        (recordId, parentIndex) => {
          arrayRelatedEntities.forEach(
            (tmpColumn: iExtraColumn, childIndex) => {
              let tmpResult = tmpResults[parentIndex + childIndex];
              this._relatedEntities.push({
                id: recordId,
                entity: tmpColumn.relatedEntity?.entity,
                data: tmpResult,
              });
            }
          );
          if (
            parentIndex ===
            this._context.parameters.sampleDataSet.sortedRecordIds.length - 1
          ) {
            arrayData.forEach((tmpData) => {
              this._data.push(tmpData);
            });
            this._originalData = JSON.parse(JSON.stringify(this._data));
            this.setState({ data: arrayData });
          }
        }
      );
    } else {
      arrayData.forEach((tmpData) => {
        this._data.push(tmpData);
      });
      this._originalData = JSON.parse(JSON.stringify(this._data));
      this.setState({ data: arrayData });
    }
    // this._context.parameters.sampleDataSet.sortedRecordIds.forEach(
    //   (recordId) => {
    //     arrayRelatedEntities.forEach(async (tmpColumn: iExtraColumn) => {
    //       let tmpSelect = "?$select=";
    //       tmpColumn.relatedEntity?.fieldsToShow?.forEach(
    //         (tmp: iField, index) => {
    //           tmpSelect = tmpSelect + tmp.name;
    //           if (
    //             index <
    //             (tmpColumn.relatedEntity?.fieldsToShow?.length ?? 0) - 1
    //           ) {
    //             tmpSelect = tmpSelect + ",";
    //           }
    //         }
    //       );
    //       let tmpQueryFilter =
    //         "&$filter=" +
    //         tmpColumn.relatedEntity?.linkedFieldName +
    //         " eq " +
    //         recordId;

    //       var results = await this._context.webAPI.retrieveMultipleRecords(
    //         tmpColumn.relatedEntity?.entity ?? "",
    //         tmpSelect + tmpQueryFilter
    //       );

    //       this._relatedEntities.push({
    //         id: recordId,
    //         entity: tmpColumn.relatedEntity?.entity,
    //         data: results.entities,
    //       });
    //     });
    //   }
    // );

    // this._originalData = JSON.parse(JSON.stringify(this._data));
    // this.setState({ data: this._data });
  };

  SetGrouping = () => {
    if (this._gridOptions["groupBy"])
      this.ref?.table?.setGroupBy(this._gridOptions["groupBy"]);
  };
  GetGroupingValues = () => {
    return this._groupBy;
  };

  SetFocusForClonedRow = () => {
    try {
      if (this.state.cloneClicked) {
        let tmpCells = this.ref.table
          ?.getRows()
          [Number(this.state.clonedRowNumber) + 1].getCells();

        tmpCells.forEach((cell: any) => {
          let tmpFieldName = cell?.getColumn()?.getField() ?? "";

          if (tmpFieldName === this._primaryFieldName) {
            cell.getElement()?.focus();
          }
        });
        this.setState({
          cloneClicked: false,
        });
      }
    } catch {}
  };
  SetFocusForNewRow = () => {
    try {
      if (this.state.addNewClicked) {
        let tmpCells = this.ref.table?.getRows()[0].getCells();
        tmpCells.forEach((cell: any) => {
          let tmpFieldName = cell?.getColumn()?.getField() ?? "";
          if (tmpFieldName === this._primaryFieldName) {
            cell.getElement()?.focus();
          }
        });
        this.setState({
          addNewClicked: false,
        });
      }
    } catch {}
  };

  SetHeaderTabs = () => {};
  /* istanbul ignore next */
  SelectOrDeselectAllRows = (useCheckbox: boolean) => {
    let tmpChkHeader = document.getElementById("chkHeader") as HTMLInputElement;
    if (!useCheckbox) {
      tmpChkHeader.checked = !tmpChkHeader.checked;
    }
    this.ref.table.getRows("active").forEach((tmpRow: any) => {
      tmpRow.update({
        is_selected: tmpChkHeader.checked,
      });
    });
  };

  componentDidMount = () => {
    try {
      this.DisplayTotalRecords();
      const script = document.createElement("script");
      script.src = "https://oss.sheetjs.com/sheetjs/xlsx.full.min.js";
      script.async = true;
      document.body.appendChild(script);
    } catch {}
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    try {
      this.SetFocusForClonedRow();
      this.SetFocusForNewRow();
      this.SetGrouping();
      this.DisplayTotalRecords();
      this.HandleUnsavedData();
      let tmpArray: iRowsByPosition[] = [];
      this.ref.table?.getRows("active").forEach((tRow: any) => {
        tmpArray.push({ position: tRow.getPosition(true), row: tRow });
      });
      let tmpSortedArray: iRowsByPosition[] = sortJsonArray(
        tmpArray,
        "position"
      );

      tmpSortedArray.forEach((tmpItem: iRowsByPosition, index: number) => {
        let row = tmpItem.row;
        let tmpId = row.getData()[this._primaryKeyName];

        //#region Set Selected Row based on the is_selected flag
        if (row.getData().is_selected) {
          row.select();
        } else {
          row.deselect();
        }
        //#endregion

        //#region Set the error styles
        row.getCells().forEach((tmpCell: any) => {
          tmpCell?.getElement().classList.remove("RedBorder");
        });

        let errorMsgs = this.state.validations.filter(
          (msg: iMessage) => msg.id === tmpId
        );
        errorMsgs.forEach((msg: iMessage) => {
          let tmpCell = row
            .getCells()
            .filter((cell: any) => cell.getColumn().getField() === msg.field);

          tmpCell[0]?.getElement().classList.add("RedBorder");
        });
        //#endregion

        //#region Set the Warning styles
        row.getCells().forEach((tmpCell: any) => {
          tmpCell?.getElement().classList.remove("WarningBorder");
        });

        let warningMsgs = this.state.warnings.filter(
          (msg: iMessage) => msg.id === tmpId
        );
        warningMsgs.forEach((msg: iMessage) => {
          let tmpCell = row
            .getCells()
            .filter((cell: any) => cell.getColumn().getField() === msg.field);

          tmpCell[0]?.getElement().classList.add("WarningBorder");
        });
        //#endregion

        //#region Set Selected Row based on the is_selected flag
        if (row.getData().is_selected) {
          row.select();
        } else {
          row.deselect();
        }
        //#endregion
      });
    } catch (gridExceptions) {}
  }

  AddRemoveValidationMessage = (cell: any, message: string, add: boolean) => {
    let tmpId = cell.getData()[this._primaryKeyName];
    let tmpField = cell.getColumn().getField();

    let tempValidations: iMessage[] = this.state.validations;

    if (add) {
      let existingMsg = tempValidations.filter(
        (msg) => msg.id === tmpId && msg.field === tmpField
      );
      if (existingMsg.length === 0) {
        let errorMsg = {
          id: tmpId,
          field: tmpField,
          message: message,
        };
        tempValidations.push(errorMsg);
        this.setState({ validations: tempValidations });
      }
    } else {
      let filteredMsg = tempValidations.filter(
        (msg) => !(msg.id === tmpId && msg.field === tmpField)
      );
      this.setState({ validations: filteredMsg });
    }
  };

  AddRemoveWarnings = (cell: any, message: string, add: boolean) => {
    let tmpId = cell.getData()[this._primaryKeyName];
    let tmpField = cell.getColumn().getField();

    let tempWarnings: iMessage[] = this.state.warnings;

    if (add) {
      let existingMsg = tempWarnings.filter(
        (msg) => msg.id === tmpId && msg.field === tmpField
      );
      if (existingMsg.length === 0) {
        let errorMsg = {
          id: tmpId,
          field: tmpField,
          message: message,
        };
        tempWarnings.push(errorMsg);
        this.setState({ warnings: tempWarnings });
      }
    } else {
      let filteredMsg = tempWarnings.filter(
        (msg) => !(msg.id === tmpId && msg.field === tmpField)
      );
      this.setState({ warnings: filteredMsg });
    }
  };

  HandleUnsavedData = () => {
    let tmpDivUnSavedChanges = document.getElementById(
      "divUnSavedChanges"
    ) as HTMLDivElement;

    let tmpBtnSave = document.getElementById("btnSave")
      ?.parentElement as HTMLLIElement;

    let boolIsModified = false;

    if (this.ref.table.getData().length !== this._originalData.length) {
      boolIsModified = true;
    }

    if (!boolIsModified) {
      let rowsAddedAndEdited = this.ref.table
        .getData()
        .filter((tmpRow: any) => {
          return (tmpRow[STR_ROW_STATE] ?? "") !== "";
        });
      if (rowsAddedAndEdited.length > 0) boolIsModified = true;
    }

    if (!boolIsModified) {
      tmpDivUnSavedChanges.classList.add("HideElement");
      tmpDivUnSavedChanges.classList.remove("ShowElement");
      tmpBtnSave.classList.remove("save-unsaved-changes");
    } else {
      tmpDivUnSavedChanges.classList.add("ShowElement");
      tmpDivUnSavedChanges.classList.remove("HideElement");
      tmpBtnSave.classList.add("save-unsaved-changes");
    }
  };

  SetRowState = (cell: any) => {
    let boolIsRowModified = false;

    let tmpCurrentRowData = cell.getData();
    let strRowState = tmpCurrentRowData[STR_ROW_STATE];

    if (strRowState !== "New") {
      let tmpOriginalRowData = this._originalData.filter((tmpRecord: any) => {
        return (
          tmpRecord[this._primaryKeyName] ===
          tmpCurrentRowData[this._primaryKeyName]
        );
      });

      if (tmpOriginalRowData.length > 0) {
        this._context.parameters.sampleDataSet.columns.forEach(
          (column: DataSetInterfaces.Column) => {
            if (
              tmpCurrentRowData[column.name]?.toString() !==
              tmpOriginalRowData[0][column.name]?.toString()
            ) {
              boolIsRowModified = true;
            }
          }
        );
      }

      if (boolIsRowModified) cell.getRow().update({ rowstate: "Modified" });
      else cell.getRow().update({ rowstate: "" });
    }
  };

  DisplayTotalRecords = () => {
    let tmpTotalRecords = -1;
    if (this.ref?.table) {
      tmpTotalRecords = this.ref?.table?.getRows("active")?.length;
    } else {
      tmpTotalRecords = this.state.data.length;
    }

    (document.getElementById("divTotalRecords") as HTMLDivElement).innerText =
      "Total Records: " + tmpTotalRecords.toString();
  };

  LookupFormatter = (cell: any, tmpColDef?: iColumnDefintion) => {
    let tmpAnchor = document.createElement("a");
    tmpAnchor.href = "#";
    tmpAnchor.id = "lnk" + cell.getRow().getPosition(true);
    tmpAnchor.tabIndex = -1;
    tmpAnchor.innerText = cell.getValue();
    // tmpAnchor.className = "editable_grid_title_link";
    tmpAnchor.setAttribute("aria-label", "Milestones");
    tmpAnchor.onclick = (e) => {
      e.preventDefault();
      let tmpURL =
        tmpColDef?.lookUpCol?.pageUrl +
        cell.getRow().getData()[cell.getField() + "_lkid"];
      this.openDialog(tmpURL);
    };

    let tmpSearch = document.createElement("a");
    tmpSearch.href = "#";
    tmpSearch.id = "lnk" + cell.getRow().getPosition(true);
    tmpSearch.tabIndex = -1;
    tmpSearch.setAttribute("aria-label", "Search");
    tmpSearch.innerHTML = "<div class='gridLookupSearchIcon'></div>";
    //tmpSearch.className = "editable_grid_title_link";
    tmpSearch.onclick = (e) => {
      e.preventDefault();
      this.openLookupDialog(cell, tmpColDef);
    };

    let tmpDivTop = document.createElement("div");
    tmpDivTop.className = "grid_lookup_container_div";

    let tmpDivLeft = document.createElement("div");
    tmpDivLeft.className = "gridDivLeft";
    if (cell.getValue()) tmpDivLeft.appendChild(tmpAnchor);

    let tmpDivRight = document.createElement("div");
    tmpDivRight.className = "gridDivRight";
    tmpDivRight.appendChild(tmpSearch);

    tmpDivTop.appendChild(tmpDivLeft);

    if (tmpColDef?.editCheck) {
      if (tmpColDef.editCheck(cell, this)) tmpDivTop.appendChild(tmpDivRight);
    } else {
      tmpDivTop.appendChild(tmpDivRight);
    }

    return tmpDivTop;
  };

  openDialog = (url: string) => {
    this.setState({ isOpen: true, iframeURL: url });
  };

  closeDialog = () => this.setState({ isOpen: false, selectOption: 1 });

  openLookupDialog = (cell: any, tmpColDef?: iColumnDefintion) => {
    this.setState({
      isLookupOpen: true,
      lookupField: tmpColDef?.lookUpCol,
      selectedCell: cell,
    });
  };
  closeLookupDialog = () => {
    this.SetRowState(this.state.selectedCell);
    this.ResetSaveMessage();
    this.HandleUnsavedData();
    this.setState({
      isLookupOpen: false,
      fieldForLookup: "",
      selectedCell: undefined,
    });
  };

  ExportToExcel = () => {
    this.ref.table.download("xlsx", "data.xlsx");
  };

  GetOptionSetText = (fieldName: string, optionsetId: number) => {
    let divText = "---";

    let tmpList = this.getOptionSets(fieldName);

    let tmpOptions = tmpList.filter(
      (o: any) => o.Value.toString() === optionsetId.toString()
    );
    if (tmpOptions.length > 0) {
      divText = tmpOptions[0].Label;
    }
    return divText;
  };

  ResetControl = () => {
    let tmpData = this.state.data;
    tmpData.forEach((tmpRecord) => {
      tmpRecord[STR_ROW_STATE] = "";
    });
    this._data = [];
    tmpData.forEach((tmpData) => {
      this._data.push(tmpData);
    });
    this._originalData = JSON.parse(JSON.stringify(this._data));
    this.setState({ data: this._data });
    this.ref.table.setData(this.state.data);
  };

  ResetSaveMessage = () => {
    this.setState({ saveSuccesses: [], saveErrors: [] });
  };

  OnSaveClick = async () => {
    if (this.state.validations.length === 0) {
      let tmpData = this.state.data;
      let arrOfIdsVisible = tmpData.map(
        (tmpRecord: any) => tmpRecord[this._primaryKeyName]
      );

      let arrCreatedRecords = tmpData.filter((record: any) => {
        return record[STR_ROW_STATE] === "New";
      });

      let arrModifiedRecords = tmpData.filter((record: any) => {
        return record[STR_ROW_STATE] === "Modified";
      });

      let arrDeletedRecords = this._originalData.filter((item: any) => {
        return arrOfIdsVisible.indexOf(item[this._primaryKeyName]) === -1;
      });

      let tmpPromizes: any[] = [];
      let tmpAutoGeneratedFields: string[] = [];

      this._context.parameters.sampleDataSet.columns.forEach((column) => {
        let tmpColDef = this.GetCustomColumnDefinition(column.name);
        if (tmpColDef?.autoGenerated) {
          tmpAutoGeneratedFields.push(column.name);
        }
      });

      arrModifiedRecords.forEach((tmpRecord) => {
        tmpPromizes.push(
          this._context.webAPI.updateRecord(
            this._entityTypeName,
            tmpRecord[this._primaryKeyName],
            this.GetRecordForServerCall(tmpRecord, false)
          )
        );
      });

      arrCreatedRecords.forEach((tmpRecord) => {
        tmpPromizes.push(
          this._context.webAPI.createRecord(
            this._entityTypeName,
            this.GetRecordForServerCall(tmpRecord, true)
          )
        );
      });

      arrDeletedRecords.forEach((tmpRecord) => {
        tmpPromizes.push(
          this._context.webAPI.deleteRecord(
            this._entityTypeName,
            tmpRecord[this._primaryKeyName]
          )
        );
      });

      try {
        //@ts-ignore
        let tmpResults = await Promise.allSettled(tmpPromizes);
        let tmpErrors: any[] = [];
        let tmpSuccesses: any[] = [];

        arrModifiedRecords.forEach((tmpRecord, index) => {
          let tmpKeyFieldName = tmpRecord[this._primaryFieldName] ?? "";
          let tmpPromise = tmpResults[index];
          if (tmpPromise["status"] === "rejected") {
            tmpErrors.push(
              tmpKeyFieldName +
                " failed to update with message :" +
                tmpPromise["reason"]["message"]
            );
          } else {
            tmpSuccesses.push(tmpKeyFieldName + " update successfully");
          }
        });

        let tmpCreatedItemsList: string[] = [];

        arrCreatedRecords.forEach((tmpRecord, index) => {
          let tmpKeyFieldName = tmpRecord[this._primaryFieldName] ?? "";
          let tmpPromise = tmpResults[arrModifiedRecords.length + index];
          if (tmpPromise["status"] === "rejected") {
            tmpErrors.push(
              tmpKeyFieldName +
                " failed to create with message :" +
                tmpPromise["reason"]["message"]
            );
          } else {
            let tmpData = this.ref.table.searchRows(
              this._primaryKeyName,
              "=",
              tmpRecord[this._primaryKeyName]
            );
            if (tmpData.length > 0) {
              let tmpRowData: any = {};
              tmpRowData[this._primaryKeyName] = tmpPromise.value.id;
              tmpData[0].update(tmpRowData);
            }
            tmpCreatedItemsList.push(tmpPromise.value.id);
            tmpSuccesses.push(tmpKeyFieldName + " created successfully");
          }
        });

        arrDeletedRecords.forEach((tmpRecord, index) => {
          let tmpKeyFieldName = tmpRecord[this._primaryFieldName] ?? "";
          let tmpPromise =
            tmpResults[
              arrModifiedRecords.length + arrCreatedRecords.length + index
            ];
          if (tmpPromise["status"] === "rejected") {
            tmpErrors.push(
              tmpKeyFieldName +
                " failed to delete with message :" +
                tmpPromise["reason"]["message"]
            );
          } else {
            tmpSuccesses.push(tmpKeyFieldName + " deleted successfully");
          }
        });

        //#region Get Autogenerated Fields of Newly Created Records - START
        if (tmpAutoGeneratedFields.length > 0) {
          let tmpGetCreatedPromizes: any[] = [];
          let tmpAutoGenFields = "";
          tmpAutoGeneratedFields.forEach((field, index) => {
            tmpAutoGenFields = tmpAutoGenFields + field;
            if (index < tmpAutoGeneratedFields.length - 1)
              tmpAutoGenFields = tmpAutoGenFields + ",";
          });
          tmpCreatedItemsList.forEach((tmpId) => {
            if (tmpAutoGeneratedFields.length > 0) {
              tmpGetCreatedPromizes.push(
                this._context.webAPI.retrieveRecord(
                  this._entityTypeName,
                  tmpId,
                  "?$select=" + tmpAutoGenFields
                )
              );
            }
          });

          if (tmpGetCreatedPromizes.length > 0) {
            let tmpUpdateObjArray: any = [];
            //@ts-ignore
            let tmpAutoGenGetResults = await Promise.allSettled(
              tmpGetCreatedPromizes
            );

            tmpAutoGenGetResults.forEach((tmpPro: any) => {
              let tmpUpdateObj: any = {};
              tmpAutoGeneratedFields.forEach((tmp) => {
                tmpUpdateObj[tmp] = tmpPro.value[tmp];
              });

              let tmpData = this.ref.table.searchRows(
                this._primaryKeyName,
                "=",
                tmpPro.value[this._primaryKeyName]
              );
              if (tmpData.length > 0) {
                tmpData[0].update(tmpUpdateObj);
              }
            });
          }
        }
        //#endregion

        this.setState({ saveSuccesses: tmpSuccesses, saveErrors: tmpErrors });
        this.ResetControl();
      } catch (exx) {
        console.log("My Exceptions");
        console.log(exx);
      }
    }
  };

  GetRecordForServerCall = (tmpRecord: any, boolIsNew: boolean) => {
    let tmpRowToUpdate: any = {};

    if (!boolIsNew)
      tmpRowToUpdate[this._primaryKeyName] = tmpRecord[this._primaryKeyName];

    if (boolIsNew) {
      if (this._parentLinkedEntityColumnId) {
        tmpRowToUpdate[this._parentLinkedEntityColumnId + "@odata.bind"] =
          "/" + this._parentEntityTypeName + "s(" + this._parentEntityId + ")";
      }
    }

    let tmpOriginalData = this._originalData.filter((tmp) => {
      return tmp[this._primaryKeyName] === tmpRecord[this._primaryKeyName];
    });
    this._context.parameters.sampleDataSet.columns.forEach((column) => {
      let tmpFieldDef = this.GetCustomColumnDefinition(column.name);
      if (!tmpFieldDef?.autoGenerated && !tmpFieldDef?.readonly) {
        switch (column.dataType) {
          case "SingleLine.Text":
          case "SingleLine.Phone":
          case "SingleLine.Email":
          case "SingleLine.TextArea":
          case "SingleLine.URL":
          case "Multiple":
            let boolSetValue = false;

            if (!IsEmpty(tmpRecord[column.name])) {
              if (boolIsNew) boolSetValue = true;
              else {
                boolSetValue = IsTexChanged(
                  tmpOriginalData[0][column.name],
                  tmpRecord[column.name]
                );
              }
            }
            if (boolSetValue) {
              tmpRowToUpdate[column.name] = tmpRecord[column.name];
            }
            break;
          case "DateAndTime.DateAndTime":
          case "DateAndTime.DateOnly":
            try {
              let tmpDate = new Date(tmpRecord[column.name]);
              let tmpFormattedDate = format(tmpDate, "yyyy-MM-dd");
              tmpRowToUpdate[column.name] = tmpFormattedDate;
            } catch {}
            break;
          case "Decimal":
          case "Currency":
          case "Whole.None":
            boolSetValue = false;
            if (!IsEmpty(tmpRecord[column.name])) {
              if (boolIsNew) boolSetValue = true;
              else {
                boolSetValue = IsTexChanged(
                  tmpOriginalData[0][column.name],
                  tmpRecord[column.name]
                );
              }
            }
            if (boolSetValue) {
              tmpRowToUpdate[column.name] = Number.parseFloat(
                tmpRecord[column.name]
              );
            }
            break;
          case "TwoOptions":
          case "OptionSet":
            boolSetValue = false;
            if (!IsEmpty(tmpRecord[column.name])) {
              if (boolIsNew) boolSetValue = true;
              else {
                boolSetValue = IsDropdownChanged(
                  tmpOriginalData[0][column.name],
                  tmpRecord[column.name]
                );
              }
            }
            if (boolSetValue) {
              tmpRowToUpdate[column.name] = Number.parseInt(
                tmpRecord[column.name]
              );
            }
            break;
          case "Lookup.Simple":
          case "Lookup.Owner":
          case "Lookup.Regarding":
          case "Lookup.Customer":
            boolSetValue = false;
            if (!IsEmpty(tmpRecord[column.name])) {
              if (boolIsNew) boolSetValue = true;
              else {
                boolSetValue = IsTexChanged(
                  tmpOriginalData[0][column.name],
                  tmpRecord[column.name]
                );
              }
            }
            if (boolSetValue) {
              tmpRowToUpdate[
                tmpFieldDef?.lookUpCol?.schemaName + "@odata.bind"
              ] =
                "/" +
                tmpFieldDef?.lookUpCol?.entity +
                "s(" +
                tmpRecord[column.name + "_lkid"] +
                ")";
            }
            break;
        }
      }
    });

    return tmpRowToUpdate;
  };

  public render() {
    const options = {
      layoutColumnsOnNewData: true,
      tooltips: true, //show tool tips on cells
      addRowPos: "top", //when adding a new row, add it to the top of the table
      history: true, //allow undo and redo actions on the table
      resizableRows: true, //allow row order to be changed
      height: 400,
      downloadDataFormatter: (data: any) => data,
      downloadReady: (fileContents: any, blob: any) => blob,
      groupBy: this.GetGroupingValues(),
      columnCalcs: "both",
    };

    return (
      <div>
        <div className="modal-footer">
          <div className="ActionToopBarDiv">
            <div
              className={`btn-toolbar inline grid-pull-right ${
                true ? "ShowElement" : "HideElement"
              }`}
            >
              <ul
                aria-label="Commands"
                role="menubar"
                data-id="CommandBar"
                className="editable_grid_actions_ul"
              >
                {GetGridButtons(this._gridConfig?.Buttons).map(
                  (tmpButton: iGridButton) => {
                    return (
                      <li
                        aria-label={tmpButton.toolTip}
                        role="menuitem"
                        title={tmpButton.toolTip}
                        className="editable_grid_actions_li"
                      >
                        <button
                          id={tmpButton.id}
                          type="button"
                          className="editable_grid_actions_button"
                          aria-hidden="true"
                          aria-label={tmpButton.toolTip}
                          onClick={() => {
                            tmpButton.clickEvent(this);
                          }}
                        >
                          <span className="editable_grid_actions_span">
                            <span className="editable_grid_actions_span_span">
                              <span
                                className={
                                  "editable_grid_actions_span_span_icon symbolFont " +
                                  tmpButton.cssClass
                                }
                              ></span>
                            </span>
                            <span
                              aria-label={tmpButton.toolTip}
                              className="editable_grid_actions_span_span_label "
                            >
                              {tmpButton.name}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <ReactTabulator
            options={this._gridOptions}
            ref={(ref) => (this.ref = ref)}
            columns={this._editableColumns}
            data={this.state.data}
            data-custom-attr="test-custom-attribute"
            className="custom-css-class"
            clipboard={true}
            clipboardPasteAction="replace"
          />
        </div>
        <div className="gridFooterDiv btn-toolbar">
          <div
            className="unSavedChnages btn-toolbar HideElement"
            id="divUnSavedChanges"
          >
            Warning: Unsaved Changes
          </div>
          <div className="totalRecodsDiv" id="divTotalRecords"></div>
        </div>
        {this._showValidationsMessage && (
          <div>
            <ValidationMessages
              validations={this.state.validations}
              warnings={this.state.warnings}
              saveErrors={this.state.saveErrors}
              saveSuccesses={this.state.saveSuccesses}
            ></ValidationMessages>
          </div>
        )}
        <div>
          <Modal
            isOpen={this.state.isOpen}
            onDismiss={this.closeDialog.bind(this)}
            isBlocking={false}
            closeButtonAriaLabel="Close"
            containerClassName={contentStyles.container}
          >
            <iframe
              src={this.state.iframeURL}
              height="750px"
              width="1200px"
            ></iframe>
          </Modal>
        </div>

        <div>
          <Modal
            isOpen={this.state.isLookupOpen}
            onDismiss={this.closeLookupDialog.bind(this)}
            isBlocking={false}
            closeButtonAriaLabel="Close"
            containerClassName={contentStyles.container}
          >
            <LookupComponent
              lookupField={this.state.lookupField}
              context={this._context}
              selectedCell={this.state.selectedCell}
              onLookupClose={this.closeLookupDialog}
            ></LookupComponent>
          </Modal>
        </div>
      </div>
    );
  }
}
export default GenericGrid;
