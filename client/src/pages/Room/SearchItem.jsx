import { Link, useNavigate } from "react-router-dom";


const SearchItem = ({ item }) => {

  const navigate = useNavigate()
  const handledet = (id) => {

    navigate(`/detail/${id}`)
  }
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>

        <span className="siFeatures">{item.desc.slice(0, 357)}</span>
        <p></p>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.price} <i class="fa-solid fa-manat-sign"></i></span>

          <button className="siCheckButton" onClick={() => { handledet(item._id) }}>Details</button>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
