import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: (args) => {
    const [color, setColor] = useState('#6366f1');
    return <ColorPicker {...args} value={color} onChange={setColor} />;
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [color, setColor] = useState('#10b981');
    return <ColorPicker {...args} value={color} onChange={setColor} label="Epic Color" />;
  },
};

export const CustomColors: Story = {
  render: (args) => {
    const [color, setColor] = useState('#000000');
    return (
      <ColorPicker
        {...args}
        value={color}
        onChange={setColor}
        label="Monochrome"
        colors={['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff']}
      />
    );
  },
};