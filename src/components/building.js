import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Floor } from "./floor";
import { getData } from "../redux/actions";
import { useEffect } from "react";
import data from '../utils/test_units_data.json'
function Building () {
  useEffect(() => {
   console.log("datasssss",data);
   getData(data);
 }, [])
    return (
     
  
<div>
  <h2>Building</h2>
      <nav>
        <ul>
          <li>
            <Link to="/building/floor">Floor</Link>
          </li>
        </ul>
      </nav>
      </div>

    );
}
function mapStateToProps(state) {
  console.log(state)
    return{
      building: state
    };
}
function mapDispatchToProps(dispatch) {
  return {
    getData: (data) =>  dispatch(getData(data)) 
}
}
  export default connect(mapStateToProps,mapDispatchToProps)(Building)