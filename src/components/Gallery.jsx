import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";

//Fetching and rending the list of tours

const Gallery = ({tours, setTours, onRemove}) => {
    //local state to manage loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //fetch the list of tours from the API
    const fetchTours = async () => {
        try {
            const res = await fetch("https://course-api.com/react-tours-project");
            //map the API data to only field we need 
            const data = await res.json();  //parse the response to JSON
        const trimmed = data.map((tour) => ({
            id: tour.id,
            image: tour.image,
            info: tour.info,
            price: tour.price,
            name: tour.name,
        }));
        setTours(trimmed); //save data to global state
        setLoading(false);  //set loading to false

    } catch (error) {
        console.log(error);
        setError(true); //set error to true
        setLoading(false); //set loading to false
    }
};
//run the fetchTours function when the component mounts 
useEffect(() => {
    fetchTours();
}, []);
//if loading is true, show loading message  
if (loading) {
    return <h2>Loading...</h2>;
}
//if error is true, show error message
if (error) {
    return <h2>Something went wrong</h2>;
}
//if no tours are available, show no tours message
if (tours.length === 0) {
    return (
        <>
            <h2>No tours available</h2>
            <button onClick={fetchTours}>Refresh</button>
        </>
    );
}

//render the list of tours using the TourCard component
return (

    <section className="gallery">
        {tours.map((tour) => {
            return (
                <TourCard
                    key={tour.id}
                    {...tour} //spread operator to pass all props to the TourCard component
                    onRemove={onRemove} //pass the removeTour function as a prop to the TourCard component
                />
            );
        })}
    </section>
);
}


export default Gallery;
// The Gallery component fetches the list of tours from an API and renders them using the TourCard component. It also manages loading and error states, and allows for refreshing the list of tours if none are available.