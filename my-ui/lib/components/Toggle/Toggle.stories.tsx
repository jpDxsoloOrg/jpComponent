import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onCheckedChange={setChecked} />;
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return <Toggle {...args} checked={checked} onCheckedChange={setChecked} label="Dark Mode" />;
  },
};

export const Small: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onCheckedChange={setChecked} label="Compact" size="sm" />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    return <Toggle {...args} checked label="Locked on" disabled />;
  },
};