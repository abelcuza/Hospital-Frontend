import Box from "@mui/material/Box";
import {Autocomplete, TextField} from "@mui/material";
import formFieldsDescription from "../data/formFieldsDescription";


const SelectFilter = ({filters, inputFilters, setInputFilters}) => (
        <Box sx={{width: 300, maxWidth: '100%'}}>
            <Autocomplete
                limitTags={1}
                value={inputFilters}
                onChange={(e, value) => (
                    setInputFilters(value)
                )}
                multiple
                size="small"
                id="checkboxes-tags-demo"
                options={filters}
                getOptionLabel={(option) => formFieldsDescription[option].label}
                renderInput={(params) => (
                    <TextField  {...params} label="Filtros" placeholder=""/>
                )}
            />
        </Box>
    )


export default SelectFilter
