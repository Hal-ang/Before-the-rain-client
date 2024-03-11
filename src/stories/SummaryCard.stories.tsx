import { Meta, StoryObj } from "@storybook/react";
import SummaryCard from "@/components/content/SummaryCard";
import { SUMMARY_TYPE } from "@/hooks/quries/useSummaryQuery";

const meta = {
  title: "Compound/SummaryCard",
  component: SummaryCard,
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
} satisfies Meta<typeof SummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const { smile, worry, umbrella } = SUMMARY_TYPE;
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
