import type { Meta, StoryObj } from '@storybook/react';
import InputRaw from '../../components/Input/InputRaw';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/InputRaw',
  component: InputRaw,
  tags: ['autodocs'],
} satisfies Meta<typeof InputRaw>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    type: 'text',
  },
};
