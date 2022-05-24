
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import "./ShiftAdministration";


const ShhiftList = () => {
    const shifts = [
        {
            color: "blue",
            title: "RTW",
            desc: "C11f",
            from: "2:20",
            to: "8:20",

        },
        {
            color: "Red",
            title: "RTW",
            desc: "C11f",
            from: "2:20",
            to: "8:20",

        },
        {
            color: "Red",
            title: "RTW",
            desc: "C11f",
            from: "2:20",
            to: "8:20",
        },
        {
            color: "gray",
            title: "RTW",
            desc: "C11f",
            from: "2:20",
            to: "8:20",
        }
    ]

    return (
        < >
            <div className="shift-table-view table-responsive">
                <table className="table">
                    <thead>
                        <tr className="td-color">
                            <td scope="col">Color</td>
                            <td scope="col">Shift Type</td>
                            <td scope="col">Desc.</td>
                            <td scope="col">From</td>
                            <td scope="col">to</td>
                            <td scope="col" className="col-type">D</td>
                            <td scope="col" className="col-type">p</td>
                            <td scope="col" className="col-day">Mon</td>
                            <td scope="col" className="col-day">Tue</td>
                            <td scope="col" className="col-day">Wed</td>
                            <td scope="col" className="col-day">Thu</td>
                            <td scope="col" className="col-day">Fri</td>
                            <td scope="col" className="col-day">Sat</td>
                            <td scope="col" className="col-day">Sun</td>
                        </tr>
                    </thead>
                    <tbody>
                        {shifts.map((shift) => (
                            <tr>
                                <td scope="row">
                                    <div className="shift-color" style={{ backgroundColor: shift.color }}>
                                    </div>
                                </td>
                                <td>{shift.title}</td>
                                <td>{shift.desc}</td>
                                <td>{shift.from}</td>
                                <td>{shift.to}</td>
                                <td className="col-type">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-type">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
                                    />
                                </td>
                                <td className="col-day">
                                    <input type="checkbox" className="checkbox" name="subscribe" value="newsletter"
                                        style={{ accentColor: shift.color }}
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
