import React, {useState, useEffect, useContext} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import MovieContext from "../../store/movie-context";
import {Box, TextField, MenuItem, Button} from '@mui/material';

const SearchBar = ({categories}) => {

    const movieCtx = useContext(MovieContext);

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    const selectedCategoryHandler = (e) => {
        setSelectedCategory(e.target.value)
    }

    const selectedValueHandler = (e) => {
        setSelectedValue(e.target.value)
    }

    const searchHandler = () => {
        if (selectedValue && selectedCategory) {
            movieCtx.searchItems( {
                value: selectedValue,
                category: selectedCategory
            });
        }
    }

    const removeSearchHandler = () => {
        movieCtx.removeSearch();
        setSelectedCategory('');
        setSelectedValue('');
    }

    useEffect(()=> {
        window.addEventListener("resize", () => {
            setScreenWidth(window.screen.width)
        });
    })

    let boxStyle = {
        width: '250px',
        marginRight: '1vw'
    }
    if (screenWidth < 900) {
        boxStyle = {
            width: '150px',
            marginRight: '1vw'
        }
    }  if (screenWidth < 600) {
        boxStyle = {
            width: '100px',
            marginRight: '0.5vw'
        }
    }

    return (
        <div>
            <Box sx={{ display: 'flex'}}>
                <Box sx={boxStyle}>
                    <TextField label="Select Category" 
                               value={selectedCategory} 
                               select fullWidth 
                               onChange={selectedCategoryHandler}>
                               {categories.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
                    </TextField>
                </Box>

                <Box sx={boxStyle}>
                    <TextField label="Enter a value"
                               value={selectedValue}  
                               fullWidth                      
                               onChange={selectedValueHandler}>
                    </TextField>
                </Box>
              
                {screenWidth > 700 ? 
                    <React.Fragment> 
                        <Button onClick={searchHandler} variant='outlined' startIcon={<SearchIcon /> }>Search</Button>
                        <Button onClick={removeSearchHandler} variant='outlined' startIcon={<ClearIcon /> }>Clear</Button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <SearchIcon onClick={searchHandler} fontSize="large" sx={{marginTop:'10px', marginRight:'10px'}} />
                        <ClearIcon onClick={removeSearchHandler} fontSize="large" sx={{marginTop:'10px'}}/>
                    </React.Fragment>
                }
            </Box>
        </div>
    )
}

export default SearchBar;