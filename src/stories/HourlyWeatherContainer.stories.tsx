import { Meta, StoryObj } from "@storybook/react";

import { HOURLY } from "@/constants/mockup";

import HourlyWeatherContainer from "./HourlyWeatherContainer";

const meta = {
  title: "Compound/HourlyWeatherContainer",
  component: HourlyWeatherContainer,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    data: HOURLY
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400, height: "100%" }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof HourlyWeatherContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
