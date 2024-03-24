import { within, expect } from "@storybook/test";
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

export const Primary: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("렌더링 확인", async () => {
      await expect(
        canvas.getByTestId("HourlyWeatherContainer")
      ).toBeInTheDocument();
    });

    await step("시간대별 날씨 확인", async () => {
      await expect(canvas.getByText("13시")).toBeInTheDocument();
      await expect(canvas.getByText("14시")).toBeInTheDocument();
      await expect(canvas.getByText("1시")).toBeInTheDocument();
    });

    // 시간대 별 옷차림 확인
    await step("옷차림 확인", async () => {
      const section = canvas.getByTestId("HourlyWeatherContainer");
      await expect(section).toContainHTML("얇은 재킷");
      await expect(section).toContainHTML("니트");
      await expect(section).toContainHTML("살구색 스타킹");
      await expect(section).toContainHTML("청자켓");
    });
  }
};
