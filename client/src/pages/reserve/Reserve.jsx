import "./_reserve.scss";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from '../../context/SearchContext'
import axios, { all } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBInput, MDBRow, } from "mdb-react-ui-kit";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Reserve = ({ setOpen, user, cemday, price, room }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [data, setdata] = useState([])
  const [datauser, setdatauser] = useState([])
  const [checkedCount, setCheckedCount] = useState(0);
  const [openpay, setopenpay] = useState(false)
  const [myarr, setmyarr] = useState([])
  const getdata2 = async () => {
    let res = await axios(`http://localhost:4000/api/users/${user._id}`)
    setmyarr(await res.data.reserve)
  }
  const getdata = async () => {
    let res = await axios(`http://localhost:4000/api/rooms/${id}`)
    setdata(await res.data)

  }
  let arr = data.roomNumbers ?? [];

  useEffect(() => {
    getdata()
    getdata2()
  }, [])
  const { dates } = useContext(SearchContext);
  const { id } = useParams();
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const reservedrooms = []


  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const navigate = useNavigate();
  const handleClick1 = () => {
    setopenpay(true)
  }
  const handleClick = async () => {
    try {

      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`http://localhost:4000/api/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );


      let reserve1 = {

        roomid: selectedRooms,
        roomtypeid: data._id,
        dates: dates,
      }
      console.log(reserve1);
      myarr.push(reserve1)
      const reserve = myarr
      axios.put(`http://localhost:4000/api/users/${user._id}`, {
        reserve
      })
      setdatauser([...datauser, myarr])

      setOpen(false);
      //console.log(reserve);
      // console.log(user._id);
      //console.log(data._id)//roomtype
      //console.log(selectedRooms)// otaq n id
      //console.log(dates)//tarix startend

      alert("Successfully reserved")

    } catch (err) { }
  };
  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedCount(checkedCount + 1);

    }
    if (!isChecked) {

      setCheckedCount(checkedCount - 1);

    }
  }

  return (

    <div className="reserve">
      <div className="rContainer mb-3">
        <i className="fa-solid fa-xmark rClose text-danger" onClick={() => setOpen(false)}></i>
        <span>Select your rooms:</span>
        <div className="rItem" key={data._id}>
          <div className="rItemInfo">
            <div className="rTitle">Room:{data.title}</div>

            <div >
              Max people: {data.maxPeople}
            </div>
            <div className="rPrice">{data.price}</div>
            <div >
              <div>Reserve infos</div>
              <div>Days:<b>{cemday}</b></div>
              <div>
                Price:<b>{cemday * price * checkedCount} ₼ ({cemday}{" "}
                  nights)</b>
              </div>

            </div>
          </div>
          <div className="rSelectRooms">
            {arr.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>

                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(roomNumber)}

                  onClick={handleCheckboxChange}
                />


              </div>
            ))}
          </div>
        </div>
        <button onClick={handleClick1} className="rButton mb-5">
          Reserve Now!
        </button>

        {openpay &&
          <MDBContainer fluid className=" position-absolute mt-5 " style={{ backgroundColor: "transparent", zIndex: "3", width: "500px", left: "0", bottom: "10px" }}>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol >
                <MDBCard>
                  <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
                    <MDBCardBody>
                      {" "}
                      <p className="mb-1">Your payment details</p>
                      <MDBInput
                        label="Card Number"
                        id="form1"
                        type="text"
                        placeholder="1234 5678 1234 5678"
                        wrapperClass="mb-1"
                        required
                      />
                      <MDBRow className="mb-1">
                        <MDBCol size="6">
                          <MDBInput
                            label="Expire"
                            id="form2"
                            type="password"
                            placeholder="MM/YYYY"
                            wrapperClass="mb-1"
                            required
                          />
                        </MDBCol>
                        <MDBCol size="6">
                          <MDBInput
                            label="CVV"
                            id="form4"
                            type="password"
                            placeholder="CVV"
                            wrapperClass="mb-1"
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <button block color="info" onClick={handleClick} className="Button">
                        Order now
                      </button>
                    </MDBCardBody>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        }
      </div>


    </div>


  );
};

export default Reserve;
