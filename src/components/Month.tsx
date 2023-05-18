import moment from 'moment';
import React from 'react';
import Day from './Day';
import { range } from './utils';
import { CalDataType } from './Types';

type Props = {
  month: number;
  year: number;
  firstDayOfWeek?: number;
  forceFullWeeks?: boolean;
  showWeekSeperator?: boolean;
  calDatas?: CalDataType[];
};
const myDayClicked = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  throw new Error('Function not implemented.');
};

const myDayHovered = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
  throw new Error('Function not implemented.');
};

function Month(monthProps: Props) {
  const { month, year, firstDayOfWeek = 1, forceFullWeeks = false, showWeekSeperator = false, calDatas } = monthProps;

  const totalDays = forceFullWeeks ? 42 : 37;
  const renderWholeMonth = (): React.ReactNode => {
    const days: any = [];
    const monthStart = moment([year, month, 1]); // current day
    let prevMonthDaysCount = monthStart.weekday();
    while (prevMonthDaysCount < firstDayOfWeek) {
      prevMonthDaysCount += 7;
    }
    let data: string = '';
    // itterate thru all days of the month
    range(firstDayOfWeek + 1, firstDayOfWeek + 1 + totalDays).forEach((element: number, index: number) => {
      const classes: string[] = [];
      const day = moment([year, month, element - prevMonthDaysCount]);
      const elKey = `Day-${year}_${month.toString().padStart(2, '0')}_${index.toString().padStart(2, '0')}`;
      if (!day.isValid()) {
        classes.push('noday');
      }
      calDatas?.forEach((i) => {
        if (day.isValid() && !(moment(day).isBefore(i.startDate) || moment(day).isAfter(i.endDate))) {
          classes.push(`data-${i.DataType}`);
          data = i.desciption;
        }
      });
      days.push(
        <Day
          key={elKey}
          dayClicked={myDayClicked}
          dayHovered={myDayHovered}
          classes={classes.join(' ')}
          day={day.isValid() ? day : null}
          data={data}
        />,
      );
      if (showWeekSeperator) {
        if (element % 7 === firstDayOfWeek && days.length) {
          days.push(
            <Day
              key={elKey + 'NoDay'}
              classes={'noday'}
              dayClicked={myDayClicked}
              dayHovered={myDayHovered}
              day={null}
            />,
          );
        }
      }
    });

    return days;
  };

  return (
    <tr>
      <td className="month-name">{moment([year, month, 1]).format('MMM')}</td>
      {renderWholeMonth()}
    </tr>
  );
}

export default Month;
