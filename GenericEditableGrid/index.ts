import { IInputs, IOutputs } from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import * as React from "react";
import * as ReactDOM from "react-dom";
import iPropsInput from "./interfaces/iPropsInput";
import GenericGrid from "./components/genericgrid";
import GetSampleOptionSets from "./sampledata/optionsets";
import { AppConfig } from "./utils/appConfig";
import { IAppConfig } from "./utils/appConfig.types";
import GetSampleConfig from "./sampledata/config";
import CreateComponent from "./components/CreateComponent";

export class GenericEditableGrid implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _container: HTMLDivElement;
	private _context: ComponentFramework.Context<IInputs>;
	private _optionSets: any[];
	private _appConfig: IAppConfig;
	private _config: any;
	private _scriptNode = document.createElement("script");
	private _isRefreshed = false;
  
	private props: iPropsInput = {
	  context: this._context,
	  optionSets: this._optionSets,
	  gridConfig: this._config,
	  refresh: this.Refresh
	};
	constructor() {}
  
	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(
	  context: ComponentFramework.Context<IInputs>,
	  notifyOutputChanged: () => void,
	  state: ComponentFramework.Dictionary,
	  container: HTMLDivElement
	) {
	  this._container = container;
	  this._context = context;
	  this._context.parameters.sampleDataSet.paging.setPageSize(5000);

	  let tmpWebResoruceURL = "";
	 
	  try
	  {
	  	tmpWebResoruceURL = (context as any).page.getClientUrl()+"//WebResources/"
	  }
	  catch{}
	  let tmpScriptURL = tmpWebResoruceURL+this._context.parameters.ConfigFileName.raw!;
	  let tmpCSSURL = tmpWebResoruceURL+this._context.parameters.CSSFileName.raw!;


	//   let scriptNode = document.createElement("script");
		this._scriptNode.setAttribute("type", "text/javascript");
		this._scriptNode.setAttribute("src", tmpScriptURL);
		document.head.appendChild(this._scriptNode);

		if(this._context.parameters.CSSFileName.raw)
		{
			let cssLinkNode = document.createElement("link");
			cssLinkNode.setAttribute("type", "text/css");
			cssLinkNode.rel = 'stylesheet';
			cssLinkNode.href = tmpCSSURL;
			document.head.appendChild(cssLinkNode);
		}
	}

	public getConfigFromWebResource()
	{
		let tmpFunctionName = this._context.parameters.ConfigFunctionName.raw ?? "";
		if(tmpFunctionName!=="")
		{
			//@ts-ignore
			return window[tmpFunctionName](); 
		} 
		return {};
	}
  
	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public async updateView(context: ComponentFramework.Context<IInputs>) {

		this._context = context;
		{
			let tmpSampleData = this._context.parameters.sampleDataSet;
			if (!tmpSampleData.loading && tmpSampleData.paging != null && tmpSampleData.paging.hasNextPage == true) 
			{
				tmpSampleData.paging.setPageSize(5000);
				tmpSampleData.paging.loadNextPage();
			}
			else
			{
				let tmpGridConfig = undefined;
				let tmpGridConfigParam = this._context.parameters.ConfigFileName.raw ?? "";
				
				try
				{
					// //@ts-ignore
					// tmpGridConfig = getConfig();

					tmpGridConfig = this.getConfigFromWebResource();
				}
				catch
				{

				}
				
				if(!tmpGridConfigParam)
				{
					this.RenderGrid(context);
				}
				else
				{
					if(tmpGridConfig!==undefined)
					{
						this.RenderGrid(context);
					}
					else
					{
						this._scriptNode.onload= () =>
						{
							this.RenderGrid(context);
						}
					}
				}
			}
		}
	}
	public async RenderGrid(context: ComponentFramework.Context<IInputs>)
	{
		this._context=context;
		this.props.context = this._context;
		this.props.refresh = this.Refresh;
		
		try
		{
			//@ts-ignore
			// this.props.gridConfig = getConfig();

			this.props.gridConfig = this.getConfigFromWebResource();
		}
		catch{}
		
		// /* For local START*/
		//this.props.optionSets = GetSampleOptionSets();
		// 	this.props.gridConfig = GetSampleConfig();
		// 	ReactDOM.render(React.createElement(GenericGrid, this.props),this._container);
		// 	return;
		// /*For local END*/

		try
		{
			ReactDOM.unmountComponentAtNode(this._container);
		}
		catch{

		}
		
		if (this._optionSets != undefined) {
			this.props.optionSets = this._optionSets;
			ReactDOM.render(
			React.createElement(GenericGrid, this.props),
			this._container
			);
		} 
		else 
		{
			this._optionSets = [];
			let thisref = this;

			let tmpOptionSets: string[] = [];
			this._context.parameters.sampleDataSet.columns.forEach(
			(column: DataSetInterfaces.Column) => {
				let tmpCol: any = { title: column.displayName, field: column.name };
				switch (column.dataType) {
				case "TwoOptions":
				case "OptionSet":
					tmpOptionSets.push(column.name);
					break;
				}
			}
			);
			debugger;
			this._context.utils
			.getEntityMetadata(
				this._context.parameters.sampleDataSet.getTargetEntityType(),
				tmpOptionSets
			)
			.then(
				function (success) {
				debugger;
				var tmpOptions = success.Attributes.getAll();
				for (var intCount = 0; intCount < tmpOptions.length; intCount++) {
					thisref._optionSets.push(tmpOptions[intCount]);
				}
				thisref.props.optionSets = thisref._optionSets;
				ReactDOM.render(
					React.createElement(GenericGrid, thisref.props),
					thisref._container
				);
				},
				function (error) {
				// thisref._optionSets = GetSampleOptionSets();
				thisref.props.optionSets = thisref._optionSets;
				ReactDOM.render(
					React.createElement(GenericGrid, thisref.props),
					thisref._container
				);
				debugger;
				console.log(error);
					}
				);
			}
	}

	public Refresh(context: ComponentFramework.Context<IInputs>){
		this._isRefreshed = true;
		context.parameters.sampleDataSet.refresh();
	}
  
	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
	  return {};
	}
  
	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
	  // Add code to cleanup control if necessary
	}

}