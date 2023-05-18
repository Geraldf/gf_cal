import React from 'react';
import { DayProps } from './Types';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Day: React.FC<DayProps> = (props) => {
  const { classes, day, data } = props;

  const _dayClicked = (event: React.MouseEvent<HTMLElement>): void => {
    const el = event.target as HTMLInputElement;
  };
  const _dayHovered = (event: React.MouseEvent<HTMLElement>) => {
    const el = event.target as HTMLInputElement;
  };
  const HtmlTooltip = styled(({ className, ...htmlProps }: TooltipProps) => (
    <Tooltip {...htmlProps} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 420,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  const dat: string = `Datum: ${day?.format('DD.MM.yyyy')}`;
  return (
    <td onClick={_dayClicked} onMouseEnter={_dayHovered} className={classes}>
      <HtmlTooltip
        title={
          <React.Fragment>
            <div className="TooltipDatum">{dat}</div>
            {data && <div className="TooltipInfo" color="inherit">{`Info: ${data}`}</div>}
            {/* <u>{"Data: "}</u>
            <em>{data}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
            {"It's very engaging. Right?"} */}
          </React.Fragment>
        }
      >
        <span className="day-number">{day === null ? '' : day.date()}</span>
      </HtmlTooltip>
    </td>
  );
};
export default Day;
