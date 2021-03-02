let GetSampleConfig = function () {
  return {
    config: {
      ShowRowState: true,
      IsFrozen: false,
      GroupBy: ["telephone1"],
      Options: {
        // height: "100%",
        // pagination: "local",
        // paginationSize: 5,
        // groupBy: ["telephone1", "name"],
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
      },
      Columns: [
        {
          name: "name",
          displayName: "Shiva",
          options: {
            bottomCalc: "sum",
            editor: "select",
            editorParams: {
              values: { male: "Male", female: "Female", unknown: "Unknown" },
            },
          },
          tabulatorEditorUsed: true,
          isRequired: true,
        },
        {
          name: "telephone1",
          autoGenerated: true,
        },
        {
          name: "address1_city",
          editCheck: "function(cell,tmpGenericGrid){return true}",
        },
      ],
      ExtraColumns: [
        {
          displayName: "Milestone",
          name: "Milestone",
          width: 70,
          position: 2,
          options: {
            frozen: true,
          },
          modalDailog: {
            url: "",
            queryParameters: ["name"],
            displayText: "Milestones",
            icon: "umilestone.png",
          },
        },
        {
          displayName: "Partner",
          name: "Milestone",
          modalDailog: {
            url: "",
            queryParameters: ["msp_engagement"],
            displayText: "Partner",
          },
        },
        {
          displayName: "LinkedIn",
          name: "Milestone",
          modalDailog: {
            url: "",
            queryParameters: ["msp_engagement"],
            displayText: "LinkedIn",
          },
        },
      ],
      Buttons: {
        ShowAddButton: true,
        ShowDeleteButton: true,
        ShowCloneButton: true,
        ShowSaveButton: true,
        boolRefreshButton: true,
        CustomButtons: [
          {
            name: "Deactivate",
            id: "btnDeactivate",
            cssClass: "Copy-symbol",
            style: "",
            toolTip: "Deactivate Selected Row",
            clickEvent: function (tmpGenericGrid: any) {
              alert(1);
            },
          },
        ],
      },
    },
  };
};
export default GetSampleConfig;