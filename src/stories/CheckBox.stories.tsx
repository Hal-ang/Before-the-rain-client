import CheckBox from "@/components/button/CheckBox";

import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

const Render = (args: typeof CheckBox.arguments) => {
  const [{ checked }, updateArgs] = useArgs();

  return (
    <CheckBox
      {...args}
      onClick={() => updateArgs({ checked: !checked })}
      checked={checked}
    />
  );
};
const meta = {
  title: "Common/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  render: Render
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    label: "아침",
    desc: "테스트테스트테스트테스트테스트테스트"
  }
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "낮",
    desc: "테스트테스트테스트테스트테스트테스트"
  }
};

export const CheckedWithoutDesc: Story = {
  args: {
    checked: true,
    label: "아침"
  }
};

export const UncheckedWithoutDesc: Story = {
  args: {
    checked: false,
    label: "낮"
  }
};
