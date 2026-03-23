import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: 'Write something...' },
};

export const WithLabel: Story = {
  args: { label: 'Description', placeholder: 'Add a description...' },
};

export const WithHelperText: Story = {
  args: {
    label: 'Notes',
    helperText: 'Supports markdown syntax',
    placeholder: '## Heading\n\n- list item',
  },
};

export const WithError: Story = {
  args: {
    label: 'Description',
    error: 'Description is required',
  },
};

export const Disabled: Story = {
  args: { label: 'Locked', placeholder: 'Cannot edit', disabled: true },
};