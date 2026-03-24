import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from './Kbd';

const meta: Meta<typeof Kbd> = {
  component: Kbd,
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const SingleKey: Story = {
  args: { children: 'N' },
};

export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
};

export const AllKeys: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {['Esc', '⌘', '⇧', 'N', 'E', '?', '↑', '↓', '←', '→', 'Enter'].map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex items-center justify-between w-64">
        <span>New issue</span>
        <Kbd>N</Kbd>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Search</span>
        <div className="flex gap-1">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </div>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Close</span>
        <Kbd>Esc</Kbd>
      </div>
    </div>
  ),
};