import CheckBox from "@/components/button/CheckBox";

import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { userEvent, waitFor, within, expect } from "@storybook/test";

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
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("렌더링 확인", async () => {
      await expect(canvas.getByTestId("checkBox")).toBeInTheDocument();

      await expect(canvas.getByText("아침")).toBeInTheDocument();

      await expect(
        canvas.getByText("테스트테스트테스트테스트테스트테스트")
      ).toBeInTheDocument();
    });

    await step("클릭 이벤트 확인", async () => {
      await userEvent.click(canvas.getByTestId("checkBox"));
    });
  }
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "낮",
    desc: "테스트테스트테스트테스트테스트테스트"
  },
  play: async ({ args, canvasElement, step }) => {
    // 렌더링 확인 용 테스트
    const canvas = within(canvasElement);

    await step("렌더링 확인", async () => {
      await expect(canvas.getByTestId("checkBox")).toBeInTheDocument();

      await expect(canvas.getByText("낮")).toBeInTheDocument();

      await expect(
        canvas.getByText("테스트테스트테스트테스트테스트테스트")
      ).toBeInTheDocument();
    });
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
