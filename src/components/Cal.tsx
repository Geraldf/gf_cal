import React from "react";
import { range } from "./utils";
import moment from "moment";
import "./Cal.scss";
import Month from "./Month";
import Table from "react-bootstrap/Table";
import { CalDataType } from "./Types";

type Props = {
  showWeekdays?: boolean;
  forceFullWeeks?: boolean;
  startOfWeek?: number; // 0 = sunday, 1 = monday
  showWeekSeperator?: boolean;
  calData?: CalDataType[];
};

export default function Cal(CalProps: Props) {
  const {
    showWeekdays,
    forceFullWeeks,
    startOfWeek = 0,
    showWeekSeperator,
    calData = [],
  } = CalProps;
  const renderweekdays = (): React.ReactNode => {
    const days: any = [];
    const totalDays = forceFullWeeks ? 42 : 37;
    range(startOfWeek, totalDays + startOfWeek).forEach((i) => {
      const momentDay = moment().weekday(i);
      const day = momentDay.format("dd");
      if (showWeekSeperator) {
        if (i % 7 === startOfWeek && days.length) {
          // push week separator
          days.push(<th className="week-separator" key={`seperator-${i}`} />);
        }
      }
      days.push(
        <th
          key={`weekday-${i}`}
          className={i % 7 === 0 ? "bolder" : "headernormal"}
        >
          {day}
        </th>
      );
    });

    return (
      <tr>
        <th>&nbsp;</th>
        {days}
      </tr>
    );
  };

  const months = range(0, 12).map((month) => (
    <Month
      year={2023}
      month={month}
      firstDayOfWeek={startOfWeek}
      key={`month-${month}`}
      calDatas={calData}
      {...CalProps}
    />
  ));

  return (
    <div className="CalMain">
      <Table className="calendar">
        <thead className="headerrow">
          {showWeekdays ? renderweekdays() : null}
        </thead>
        <tbody>{months}</tbody>
      </Table>
    </div>
  );
}
