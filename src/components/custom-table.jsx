import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import tableColumnsDescription from "../data/tableColumnsDescription";

function createData(row, model) {
    const item = new model()
    Object.assign(item, row)
    return item.values();
}

const CustomTable = ({fields, api, model}) => {
    const [data, setData] = useState(0)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    async function fetchData() {
        return await api.list()
    }

    useEffect(() => {
        fetchData().then((data) => setData(data.data))
    }, [])


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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ?
                            data.map((row) => (
                                <TableRow>
                                    {createData(row, model).map((val) => (
                                        <TableCell key={val}>{val}</TableCell>
                                    ))}
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