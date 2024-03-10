import { Meta, StoryObj } from "@storybook/react";
import StoryLayout from "./StoryLayout";
import ProgressBar from "@/components/ProgressBar";
import { useArgs } from "@storybook/preview-api";
import { useState } from "react";

const ProgressBarWrapper = (args: unknown) => {
  const [{ percent }, updateArgs] = useArgs();
  const [_percent] = useState(percent);

  return (
    <>
      <ProgressBar percent={percent} />;
      <button
        onClick={() => {
          updateArgs({ percent: percent === 0 ? _percent : 0 });
        }}
        className="bg-dark-primary"
      >
        start transition
      </button>
    </>
  );
};

const meta = {
  title: "Progressbar",
  component: ProgressBar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <StoryLayout className="px-20pxr">
        <Story />
      </StoryLayout>
    )
  ],
  render: ProgressBarWrapper
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ZeroPercent: Story = {
  args: {
    percent: 0
  }
};

export const HalfPercent: Story = {
  args: {
    percent: 50
  }
};

export const HundredPercent: Story = {
  args: {
    percent: 100
  }
};
