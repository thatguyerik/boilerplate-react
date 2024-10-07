import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Counter from "./Counter";

const meta = {
    title: "Custom/Counter",
    component: Counter,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
}