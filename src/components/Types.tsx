import React from "react";
import { Moment, MomentInput } from "moment";

export type DayProps = {
  classes: string;
  dayClicked: (e: React.MouseEvent<HTMLElement>) => void;
  dayHovered: (e: React.MouseEvent<HTMLElement>) => void;
  day: Moment | null;
  data?: string;
  backgroundColor?: Color;
};
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX | null;

export type CalDataType = {
  desciption: string;
  startDate: Date;
  endDate: Date;
  DataType: number;
  dataBackgroundColor?: Color;
};
export type MonthProps = {
  month: number;
  year: number;
  firstDayOfWeek?: number;
  forceFullWeeks?: boolean;
  showWeekSeperator?: boolean;

  calDatas?: CalDataType[];
  dataBackgroundColor?: Color;

  // classes: string;
  // year: number;
  // month: number;
  // forceFullWeeks: boolean;
  // showWeekSeparators: boolean;
  // selectedDay: MomentInput;
  // firstDayOfWeek: number;
  // selectingRange: Moment[];
  // selectRange: boolean;
  // selectedRange: Moment[];
  // customClasses: TCustomClasses;
  // titles: Moment;
  // dataBackgroundColor: Color;
  // dayClicked: (e: MouseEvent) => void;
  // dayHovered: (e: MouseEvent) => void;
};

export interface TCustomClasses {
  Dates: string[];
}
