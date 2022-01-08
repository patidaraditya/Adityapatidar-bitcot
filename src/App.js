import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import { Home } from "./components/home";
import  Building  from "./components/building";
import { Location } from "./components/location";
import { Gallery } from "./components/gallery";
import { Floor } from "./components/floor";
import { Apartment } from "./components/apartment";
import "./App.css";
import Slider from "./components/slider";
import { connect } from 'react-redux'

// import bg1 from "./assets/bg-1.mp4";
// import bg2 from "./assets/bg-2.mp4";
// import bg3 from "./assets/bg-3.mp4";

 function App() {
  return (
    <Router>
      <nav>
        <div className="sitebase">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/building">Building</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sliderr">
        <Slider />
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/building" element={<Building />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/building/floor" element={<Floor />} />
        <Route exact path="/building/floor/apartment" element={<Apartment />} />
      </Routes>
    </Router>
  );
}

// function About() {
//   const [data, setData] = useState();
//   const [isLoading, setLoading] = useState();
//   console.log("data: ", data);

//   const myFunc = async () => {
//     setLoading(true);
//     await fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         console.log("setdata", data);
//         setLoading(false);
//       });
//   };
//   const style = {
//     color: "gray",
//     fontSize: 20,
//   };
//   const styles = {
//     color: "crimson",
//     fontSize: 25,
//   };
//   return (
//     <>
//       <button value="hello!" onClick={() => myFunc()}>
//         Click me!
//       </button>
//       <h2>About</h2>
//       {isLoading ? (
//         <>
//           <Loader type="Circles" color="crimson" height={80} width={80} />
//         </>
//       ) : null}
//       {data
//         ? data.map((item) => {
//             return (
//               <>
//                 <h4 style={style}>{item.title}</h4>
//                 <h1 style={styles}>{item.id}</h1>
//               </>
//             );
//           })
//         : null}
//     </>
//   );
// }

// function Users() {
//   return (
//     <>
//       <h2>Users</h2>
//     </>
//   );
// }
export default connect()(App)