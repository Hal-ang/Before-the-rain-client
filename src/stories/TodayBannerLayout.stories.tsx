import { Meta, StoryObj } from "@storybook/react";

import TodayBannerLayout from "@/components/content/TodayBannerLayout";
import { BANNERS } from "@/mocks/handlers";

const meta = {
  title: "Compound/TodayBannerLayout",
  component: TodayBannerLayout,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof TodayBannerLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const { smile, worry, umbrella } = BANNERS;
export const Smile: Story = {
  args: {
    ...smile,
    rainGage: 0
  }
};

export const Worry: Story = {
  args: {
    ...worry,
    rainGage: 0.4
  }
};

export const Umbrella: Story = {
  args: {
    ...umbrella,
    rainGage: 0.9
  }
};
