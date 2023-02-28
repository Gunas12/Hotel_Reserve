import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { SearchContext } from '../../context/SearchContext';


function valuetext(value) {
    return `${value}AZN`;
}
function Search({ type }) {
    const [openDate, setOpenDate] = useState(false);
    const [openOption1, setOpenOption1] = useState(false);
    const [value, setValue] = React.useState([0, 5000]);

    console.log(value)
    const handleChange = (event, newValue) => {

        setValue(newValue);
    };
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {

        dispatch({ type: "NEW_SEARCH", payload: { value, dates, options } });
        navigate("/rooms", { state: { value, dates, options } });
    };


    return (

        <div className='Searchhh container'>
            <div className='headerSearch'>
                <div className='headerSearchItem ' style={{ width: "250 px " }}>
                    <i className="fa-solid fa-money-bill-1-wave headerIcon"></i>
                    <span onClick={() => setOpenOption1(!openOption1)} className="headerSearchText">{`min ${value[0]} · max ${value[1]} `}</span>

                    {
                        openOption1 && (
                            <div className='caldiv'>
                                <Box sx={{ width: 180 }} style={{ backgroundColor: "white!important" }} className="calendar1 ">
                                    <Slider
                                        className='slid'
                                        getAriaLabel={() => 'Price range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        min={0}
                                        max={5000}
                                        style={{ color: "white" }}
                                    />
                                </Box>
                            </div>
                        )

                    }


                </div>


                <div className='headerSearchItem'>
                    <div> <div><i className="fa-solid fa-calendar-days headerIcon"></i>
                        <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                            dates[0].endDate,
                            "MM/dd/yyyy"
                        )}`}  <i className="fa-solid fa-chevron-down"></i></span></div>
                        {openDate && <DateRange
                            className='calendar'
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                        />}</div>
                </div>
                <div className='headerSearchItem'>
                    <i className="fa-solid fa-person headerIcon"></i>
                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                    >{`${options.adult} adult · ${options.children} children · ${options.room} room`}  <i class="fa-solid fa-chevron-down"></i></span>
                    {openOptions && (
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.adult}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.children}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.room <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.room}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='headerSearchItem'>
                    <button className='butn' onClick={handleSearch}>Search</button>
                </div>

            </div>
        </div>
    )
}

export default Search

