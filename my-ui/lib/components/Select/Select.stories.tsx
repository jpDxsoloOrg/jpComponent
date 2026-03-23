import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Choose...</option>
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="done">Done</option>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <Select {...args} label="Status">
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="review">Review</option>
      <option value="done">Done</option>
    </Select>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <Select {...args} label="Priority" error="Priority is required">
      <option value="">Select...</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} label="Locked" disabled>
      <option value="fixed">Cannot change</option>
    </Select>
  ),
};