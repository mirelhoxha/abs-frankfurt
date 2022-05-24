import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import "./ShiftAdministration";


const ShhiftList = () => {
    const stations = [
        {
            title: " Fire and Resue Station 1 ",
        },
        {
            title: "Rescu Station 1a ",
        },
        {
            title: " Rescu Station 31 ",
        },
        {
            title: " Rescu Station 40a ",
        },
        {
            title: " EMC40 ",
        },
        {
            title: " Rescu Station 40a ",
        },
        {
            title: "Rescu Station 1a",
        }
        ,
        {
            title: "Rescu Station 31",
        }
        ,
        {
            title: "Rescu Station 40a ",
        }
    ]

    return (
        < >
            <div className="station-view">
                <h2 className="station-title">Stations</h2>
                <hr></hr>
                <div className="station-list">
                    {stations.map((plan) => (
                        <a><p>{plan.title}</p></a>
                    ))}
                </div>

            </div>
        </>

    )
}
export default ShhiftList;
