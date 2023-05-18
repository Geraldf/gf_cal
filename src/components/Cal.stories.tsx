// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Cal from "./Cal";

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

export const Primary: Story = {
  args: {
    forceFullWeeks: true,
  },
};
