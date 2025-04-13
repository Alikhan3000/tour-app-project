import React, {useState} from "react";
import Gallery from "./components/Gallery";
//root component of the app
function App() {
// glogal state to hold the list of tours
const [tours, setTours] = useState([]);

//function to remove a tour from the list by its id
const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));

  };

  return(
    <main>
    <h1>Our Tours</h1>
    {/* pass state and handlers down to the TourList component */}
    <Gallery tours={tours} setTour={setTour} onRemove={removeTour} />

    </main>

  )}

export default App;