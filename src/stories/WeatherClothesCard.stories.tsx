import { Meta, StoryObj } from "@storybook/react";

import WeatherClothesCard from "@/components/content/WeatherClothesCard";
import { HOURLY } from "@/constants/mockup";

const meta = {
  title: "Compound/WeatherClothesCard",
  component: WeatherClothesCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    weathers: HOURLY.hourly.slice(0, 24)
  },
  decorators: [
    (Story) => (
      <div style={{ width: 350, height: "100%" }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof WeatherClothesCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
