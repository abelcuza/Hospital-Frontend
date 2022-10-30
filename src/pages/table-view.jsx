import React from 'react'
import CustomTable from "../components/custom-table";
import CreateView from "./create-view";

const TableView = ({model, api, fields, model_name}) => (
    <div className="table-view">
        <CustomTable fields={fields} api={api} model={model}/>
        <CreateView model={model} api={api} fields={fields} model_name={model_name}/>
    </div>
)


export default TableView