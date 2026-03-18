// lib/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Default: Story = {
  args: { children: 'Button' },
};
 
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['primary', 'secondary', 'destructive', 'ghost'] as const).map((intent) =>
        (['sm', 'md', 'lg'] as const).map((size) => (
          <Button key={`${intent}-${size}`} intent={intent} size={size}>
            {intent} {size}
          </Button>
        ))
      )}
    </div>
  ),
};