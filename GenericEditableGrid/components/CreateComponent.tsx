import * as React from "react";
import { ReactTabulator } from "react-tabulator";
import { IInputs } from "../generated/ManifestTypes";
import iCreateDefinition from "../interfaces/iCreateDefinition";
import iCreateField from "../interfaces/iCreateField";
import iField from "../interfaces/iField";

class CreateComponent extends React.Component<iCreateDefinition> {
  ref: any = null;
  _columns: any[] = [];
  _data: any[] = [];
  _context: ComponentFramework.Context<IInputs>;
  _placeHolder: string;
  _config: any;

  state = {
    expandValidations: false,
    data: this._data,
    filterText: "",
  };

  constructor(props: iCreateDefinition) {
    super(props);
    if (props.context) this._context = props.context;
  }

  LoadColumns = () => {};

  render() {
    return (
      <div>
        {this.props.gridConfig?.config?.Create?.Fields.map(
          (tmpField: iCreateField) => {
            return (
              <div role="presentation" className="egmtCreateDiv">
                <div role="presentation" className="egmtCreateDiv2">
                  <div role="presentation" className="egmtCreateDiv3">
                    <div role="presentation" className="egmtCreateDiv4">
                      Name
                    </div>
                    <div aria-hidden="true" className="egmtCreateDiv8">
                      *
                    </div>
                  </div>
                  <div role="presentation" className="egmtCreateDiv9">
                    <input
                      className="div15"
                      aria-label="Name"
                      aria-required="true"
                      placeholder=""
                      maxLength={200}
                      type="text"
                      value="---"
                      title="Select to enter data"
                    ></input>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default CreateComponent;
