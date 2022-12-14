import React from "react"
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";


const Search = ({setSearchParam, searchParam}) => {
    const handleOnChange = (e) => {
        e.preventDefault()
        const {value} = e.target
        setSearchParam(value)
    }
    return (
        <Box className="search" sx={{width: 700, maxWidth: '100%'}}>
            <TextField size="small" value={searchParam} fullWidth label="Buscar" onChange={handleOnChange}/>
        </Box>
    )
}

export default Search



