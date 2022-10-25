import React from 'react'
import CustomTable from "../components/custom-table";

const TableView = ({model}) => (
    <div className="table-view">
        <CustomTable fields={model.get_fields()}/>
    </div>
)

export default TableView