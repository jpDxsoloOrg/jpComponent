import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
};

export const WithLabel: Story = {
  args: { label: 'Email', placeholder: 'you@example.com' },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Must be at least 8 characters',
    type: 'password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email address',
    defaultValue: 'not-an-email',
  },
};

export const Disabled: Story = {
  args: { label: 'Disabled', placeholder: 'Cannot type here', disabled: true },
};
