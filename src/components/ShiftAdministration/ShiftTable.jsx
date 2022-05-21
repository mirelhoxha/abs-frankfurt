
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Dropdown, DropdownButton} from "react-bootstrap";
 import "./ShiftAdministration";


 const ShhiftList = () => {
    const shifts =[
        {
            color:"blue",
            title:"RTW",
            desc:"C11f",
            from:"2:20",
            to:"8:20",

        },
        {
            color:"Red",
            title:"RTW",
            desc:"C11f",
            from:"2:20",
            to:"8:20",

        },
        {
            color:"Red",
            title:"RTW",
            desc:"C11f",
            from:"2:20",
            to:"8:20",
        },
        {
            color:"gray",
            title:"RTW",
            desc:"C11f",
            from:"2:20",
            to:"8:20",
        }
    ]
    
    return (
        < >      
            <div className="shift-table-view table-responsive">
                
            <table className="table ">
                
                <tbody>
                <tr className="td-color ">
                    <td scope="col">Color</td>
                    <td scope="col">Shift Type</td>
                    <td scope="col">Desc.</td>
                    <td scope="col">From</td>
                    <td scope="col">to</td>
                    <td scope="col">D</td>
                    <td scope="col">p</td>
                    <td scope="col">Mon</td>
                    <td scope="col">Tue</td>
                    <td scope="col">Wed</td>
                    <td scope="col">tdu</td>
                    <td scope="col">Fri</td>
                    <td scope="col">Sat</td>
                    <td scope="col">Sun</td>
                 </tr>
                {shifts.map((shift) =>(
                <tr>
                    <td scope="row"><div className="shift-color" style={{backgroundColor:shift.color}}>
                    </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                    <td>
                        <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                        style={{accentColor:shift.color}}
                        />
                    </td>
                </tr>
                ))} 
                    
                </tbody>
                </table>
            
            </div>
      </>
      
    )
  }
export default ShhiftList;
