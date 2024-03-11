import { Meta, StoryObj } from "@storybook/react";
import CheckBoxList from "./CheckBoxList";
import { TIME_PERIODS } from "@/constants/survey";

const meta = {
  title: "Compound/CheckBoxList",
  component: CheckBoxList,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    list: TIME_PERIODS.map(({ label }) => ({ label, desc: "09:00 ~ 18:00" }))
  }
} satisfies Meta<typeof CheckBoxList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const List: Story = {};
