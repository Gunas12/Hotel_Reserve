import Search from "../components/Search";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "./SearchItem";
import axios from 'axios';


const List = () => {

    const location = useLocation();
    const [value, setValue] = useState(location.state.value);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState();
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false);
    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(0)

    const getdata = async () => {
        setloading(true)
        let res = await axios(`http://localhost:4000/api/rooms`)
        setloading(false)
        setdata(await res.data)
    }
    useEffect(() => {
        getdata()
    }, [])
    const handleClick = () => {
        setValue([parseInt(num1, 10), parseInt(num2, 10)])
        getdata()
    };
    return (
        <div className="room">

            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder="Azerbaijan,Tovuz" type="text" value="Azerbaijan,Tovuz" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                dates[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) => setnum1(e.target.value)}
                                        className="lsOptionInput"
                                        placeholder={value[0]}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        onChange={(e) => setnum2(e.target.value)}
                                        className="lsOptionInput"
                                        placeholder={value[1]}
                                    />
                                </div>
                                <div className="lsOptionItem">

                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? (
                            "loading"
                        ) : (

                            <>
                                {
                                    data.filter(item => { return (item.price > value[0] & item.price < value[1]) }).map(item => {
                                        return <SearchItem item={item} key={item._id} />
                                    })
                                }

                            </>

                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default List;
