import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarContainer = styled("div")`

  /* ~~~ container styles ~~~ */
  font-size:14px;
  .react-calendar__navigation {
    font-size:14px;
  }
`;
function Calender() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    }
    return (
        <>
            <CalendarContainer>
                <Calendar calendarType='US' />
            </CalendarContainer>
        </>
    );
}

export default Calender;