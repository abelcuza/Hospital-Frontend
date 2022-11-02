import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import tableColumnsDescription from "../../data/tableColumnsDescription";
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


function createData(row, model) {
    const item = new model()
    Object.assign(item, row)
    return item.values();
}

const CustomTable = ({fields, data, model}) => {
    const location = useLocation()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {fields.map((field) => (
                                <TableCell
                                    key={tableColumnsDescription[field].id}
                                    align={tableColumnsDescription[field].align}
                                    style={{minWidth: tableColumnsDescription[field].minWidth}}
                                >
                                    {tableColumnsDescription[field].label}
                                </TableCell>
                            ))}
                            <TableCell key="update">
                                Edit
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ?
                            data.map((row) => (
                                <TableRow>
                                    {createData(row, model).map((val) => (
                                        <TableCell>{val}</TableCell>
                                    ))}
                                    <TableCell>
                                        <Link to={`${location.pathname}/${row['ci']}`}>
                                            <EditIcon/>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                            : null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>

    );
}

export default CustomTable