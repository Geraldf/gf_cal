import React from "react";
import { Moment, MomentInput } from "moment";

export type DayProps = {
  classes: string;
  dayClicked: (e: React.MouseEvent<HTMLElement>) => void;
  dayHovered: (e: React.MouseEvent<HTMLElement>) => void;
  day: Moment | null;
  data?: string;
};

export type CalDataType = {
  desciption: string;
  startDate: Date;
  endDate: Date;
  DataType: number;
};
export type MonthProps = {
  classes: string;
  year: number;
  month: number;
  forceFullWeeks: boolean;
  showWeekSeparators: boolean;
  selectedDay: MomentInput;
  firstDayOfWeek: number;
  selectingRange: Moment[];
  selectRange: boolean;
  selectedRange: Moment[];
  customClasses: TCustomClasses;
  titles: Moment;
  dayClicked: (e: MouseEvent) => void;
  dayHovered: (e: MouseEvent) => void;
};

export interface TCustomClasses {
  Dates: string[];
}
