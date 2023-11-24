
import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/Search icon.svg'
import "./search.css"
import { Box } from '@mui/material'
const Search = ({placeHolder}) => {
  return (
    <Box sx={{display:{xs:"none",sm:"block",md:"block"},width:"50%"}}>
        <form className='search' >
            <input className='search-input' type="text" placeholder={placeHolder}/>
            <button className='search-button' type="submit">
                <SearchIcon/>
            </button>
        </form>
    </Box>
  )
}

export default Search