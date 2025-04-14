import React, {useState} from "react";
//TourCard renders individual tour details 

const TourCard = ({id, name, info, price, image, onRemove}) => {  
    //local state to toggle read more/ show less

    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <img src={image} alt={name} className="tour-image"/>

            <h3>{name}</h3>
            <h5>${price}</h5>

            <p>

            {/* show full description if readMore is true, other a slice */}
            {readMore ? info : `${info.substring(0, 80)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Read More"}
            </button>

            </p>
        {/* button to remove the tour */}
        <button className="btn" onClick={() => {
            onRemove(id)
        }}>Not Interested
        </button>
         </article>

    )
}
export default TourCard;