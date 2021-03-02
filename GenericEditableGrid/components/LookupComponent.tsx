import { ENGINE_METHOD_DIGESTS } from "constants";
import * as React from "react";
import { ReactTabulator } from "react-tabulator";
import { IInputs } from "../generated/ManifestTypes";
import iField from "../interfaces/iField";
import iLookupDefinition from "../interfaces/iLookupDefinition";

class LookupComponent extends React.Component<iLookupDefinition> {
  ref: any = null;
  _columns: any[] = [];
  _data: any[] = [];
  _context: ComponentFramework.Context<IInputs>;
  _placeHolder: string;

  state = {
    expandValidations: false,
    data: this._data,
    filterText: "",
  };

  constructor(props: iLookupDefinition) {
    super(props);
    if (props.context) this._context = props.context;
    this._placeHolder =
      "Search by " + this.props.lookupField?.fitlerTextField?.displayText;
    this.LoadColumns();
    this.LoadData();
  }

  LoadColumns = () => {
    this._columns.push({
      formatter: (cell: any) => this.SelectFormatter(cell),
      align: "center",
      headerSort: false,
      width: 80,
    });

    this.props.lookupField?.fieldsToShow?.forEach((tmp: iField) => {
      let tmpCol = {
        title: tmp.displayText,
        field: tmp.name,
        headerFilter: "input",
      };
      this._columns.push(tmpCol);
    });
  };
  SelectFormatter = (cell: any) => {
    let thisRef = this;
    let tmpAnchor = document.createElement("a");
    tmpAnchor.href = "#";
    tmpAnchor.id = "lnk" + cell.getRow().getPosition(true);
    tmpAnchor.tabIndex = -1;
    tmpAnchor.innerText = "Select";
    tmpAnchor.className = "editable_grid_title_link";
    tmpAnchor.setAttribute("aria-label", "Select Record");
    tmpAnchor.onclick = (e) => {
      e.preventDefault();
      let tmpSelectedItem = cell.getRow().getData()[
        this.props.lookupField?.fitlerTextField?.name ?? ""
      ];
      let tmpSelectedItemId = cell.getRow().getData()[
        this.props.lookupField?.primaryKey ?? ""
      ];

      let tempUpdateObj: any = {};
      tempUpdateObj[this.props.selectedCell.getField()] = tmpSelectedItem;
      tempUpdateObj[
        this.props.selectedCell.getField() + "_lkid"
      ] = tmpSelectedItemId;
      this.props.selectedCell.getRow().update(tempUpdateObj);
      if (this.props.onLookupClose) this.props.onLookupClose();
    };
    return tmpAnchor;
  };
  LoadData = () => {
    // let tmpData = [];
    // for (var i = 0; i < 50; i++) {
    //   let tmpItem: any = {};
    //   this.props.lookupField?.fieldsToShow?.forEach((tmp: iField) => {
    //     tmpItem[tmp.name ?? ""] = tmp.name + "_" + i.toString();
    //   });
    //   tmpData.push(tmpItem);
    // }

    // this.setState({ data: tmpData });

    // return;

    if (this.state.filterText.length > 0) {
      let thisRef = this;
      let tmpQueryFilter =
        "&$filter=contains(" +
        this.props.lookupField?.fitlerTextField?.name +
        ", '" +
        this.state.filterText +
        "')";

      let tmpSelect = "?$select=";
      this.props.lookupField?.fieldsToShow?.forEach((tmp: iField) => {
        tmpSelect = tmpSelect + tmp.name + ",";
      });
      tmpSelect = tmpSelect + this.props.lookupField?.primaryKey;

      this._context.webAPI
        .retrieveMultipleRecords(
          this.props.lookupField?.entity ?? "",
          tmpSelect + tmpQueryFilter
        )
        .then(
          function success(result) {
            let tmpData = [];
            for (var i = 0; i < result.entities.length; i++) {
              let tmpItem: any = {};
              tmpItem[thisRef.props.lookupField?.primaryKey ?? ""] =
                result.entities[i][thisRef.props.lookupField?.primaryKey ?? ""];
              thisRef.props.lookupField?.fieldsToShow?.forEach(
                (tmp: iField) => {
                  if (tmp.name) {
                    tmpItem[tmp.name] = result.entities[i][tmp.name];
                  }
                }
              );
              tmpData.push(tmpItem);
            }
            thisRef.setState({ data: tmpData });
          },
          function (error) {
            alert(error.message);
          }
        );
    }
  };

  expandValidationSection = (e: any) => {
    if (e.keyCode === undefined || e.keyCode === 13)
      this.setState({ expandValidations: !this.state.expandValidations });
  };

  componentDidMount = () => {
    this.LoadData();
  };

  /* istanbul ignore next */
  OnFilterTextChange = (event: any) => {
    this.setState({ filterText: event.target.value });
  };

  OnSearchClick = () => {
    this.LoadData();
  };

  render() {
    const options = {
      layoutColumnsOnNewData: true,
      tooltips: true, //show tool tips on cells
      addRowPos: "top", //when adding a new row, add it to the top of the table
      history: true, //allow undo and redo actions on the table
      resizableRows: true, //allow row order to be changed
      height: 600,
      pagination: "local",
      paginationSize: 10,
    };

    return (
      <div>
        <div className="gridLookupTableControl">
          <span>
            <input
              value={this.state.filterText}
              onChange={this.OnFilterTextChange}
              placeholder={this._placeHolder}
            ></input>
          </span>
          {/* <span>
            <label>View</label>
            <select>
              <option>--</option>
              <option>Two</option>
            </select>
          </span> */}
          <span>
            <button onClick={this.OnSearchClick}>Search</button>
          </span>
        </div>
        <div className="gridLookupTabulatarDiv">
          <ReactTabulator
            options={options}
            ref={(ref) => (this.ref = ref)}
            columns={this._columns}
            data={this.state.data}
            data-custom-attr="test-custom-attribute"
            className="custom-css-class-lookup"
          />
        </div>
      </div>
    );
  }
}

export default LookupComponent;
