import React from 'react'
import CustomTable from "../components/custom-table";

const TableView = ({model, api, fields}) => (
    <div className="table-view">
        <CustomTable fields={fields} api={api} model={model}/>
    </div>
)

export default TableView