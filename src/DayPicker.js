import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  max-width: 250px;
  max-height: 217px;
  margin: 0 auto;
`;

const Caption = styled.p`
  color: #555;
  font-size: 0.75em;
  text-align: center;
`;
const DayButton = styled.button`
  background: ${props => (props.selected ? "green" : "none")};
  border: ${props => (props.currentDate ? "1px dashed black" : "none")};
  color: ${props => (props.selected ? "white" : "black")};
  cursor: pointer;
  padding: 4px;
  text-align: center;
  width: 32px;
  border-radius: 4px;
  height: 32px;
  margin: 0 auto;

  &:focus,
  &:active,
  &:hover {
    background: #ff7494;
    color: white;
  }
`;

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.pickDate = this.pickDate.bind(this);
  }

  pickDate(e) {
    this.props.onDatePicked(e.target.textContent);
  }

  render() {
    const { selected } = this.props;
    const days = [];
    const currentDate = new Date().getDate();
    for (let i = 0; i < 31; i++) days.push(i + 1);
    return (
      <div>
        <Caption>Select a day</Caption>
        <Wrapper>
          {days.map(d => (
            <DayButton
              key={d}
              onClick={this.pickDate}
              currentDate={d === currentDate}
              selected={d === selected}
            >
              {d}
            </DayButton>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default DatePicker;
