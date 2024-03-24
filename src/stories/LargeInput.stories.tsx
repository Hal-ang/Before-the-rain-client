import { userEvent, waitFor, within, expect, fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

import { LinearButton } from "@/components/button/LinearButton";
import LargeInput from "@/components/input/LargeInput";

const meta = {
  title: "Common/LargeInput",
  // @ts-ignore
  component: LargeInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof LinearButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "00"
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("값 입력", async () => {
      await userEvent.type(canvas.getByTestId("largeInput"), "32");
    });
  }
};

export const Number: Story = {
  args: {
    type: "number",
    inputMode: "numeric" as "numeric",
    pattern: "[0-9]*",
    placeholder: "00"
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const largeInput = canvas.getByTestId("largeInput");
    await step("숫자가 아닌 값 입력", async () => {
      await userEvent.type(largeInput, "테스트입니다");
      await waitFor(() => expect(largeInput).toHaveDisplayValue(""));
    });

    await step("숫자 입력", async () => {
      await userEvent.type(largeInput, "3424234");
      await waitFor(() => expect(largeInput).toHaveDisplayValue("3424234"));
    });
  }
};
