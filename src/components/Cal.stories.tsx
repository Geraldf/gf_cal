// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Cal from "./Cal";
import moment from "moment";

const meta: Meta<typeof Cal> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Calendar",
  component: Cal,
  tags: ["autodocs"],
} satisfies Meta<typeof Cal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    forceFullWeeks: true,
    showWeekdays: true,
    showWeekSeperator: true,
    startOfWeek: 1,
    calData: [
      {
        desciption: "Test Description",
        startDate: moment("2023-02-02", "YYYY-MM-DD").toDate(),
        endDate: moment("2023-02-22", "YYYY-MM-DD").toDate(),
        DataType: 1,
        dataBackgroundColor: "#eab676",
      },
      {
        desciption: "Test 22 Description",
        startDate: moment("2023-08-13", "YYYY-MM-DD").toDate(),
        endDate: moment("2023-09-02", "YYYY-MM-DD").toDate(),
        DataType: 2,
        dataBackgroundColor: "#521c98",
      },
    ],
  },
};
