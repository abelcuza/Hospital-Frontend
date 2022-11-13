import React from "react"
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

const searchStyle = {
    marginTop: 20,
    marginBottom: 50
}

const Search = ({setSearchParam}) => {
    const handleOnChange = (e) => {
        e.preventDefault()
        const {value} = e.target
        setSearchParam(value)
    }
    return (
        <Box sx={{width: 700, maxWidth: '100%', margin: 'auto'}}>
            <TextField size="small" fullWidth label="Buscar" onChange={handleOnChange} style={searchStyle}/>
        </Box>
    )
}

export default Search

