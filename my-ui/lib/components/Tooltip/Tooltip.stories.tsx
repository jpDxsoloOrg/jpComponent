import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center justify-center p-20">
      <Tooltip {...args} content="Create a new issue">
        <Button intent="primary" size="sm">+</Button>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      {(['top', 'bottom', 'left', 'right'] as const).map((pos) => (
        <Tooltip key={pos} content={`Tooltip on ${pos}`} position={pos} delay={0}>
          <Button intent="secondary" size="sm">{pos}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const WithKbd: Story = {
  render: () => (
    <div className="flex items-center justify-center p-20">
      <Tooltip
        content={
          <span className="flex items-center gap-1.5">
            New issue <kbd className="text-[10px] opacity-75 font-mono">N</kbd>
          </span>
        }
      >
        <Button intent="ghost" size="sm">+</Button>
      </Tooltip>
    </div>
  ),
};