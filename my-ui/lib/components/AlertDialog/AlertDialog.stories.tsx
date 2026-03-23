import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AlertDialog } from './AlertDialog';
import { Button } from '../Button';

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    intent: { control: 'select', options: ['destructive', 'primary'] },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Destructive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button intent="destructive" onClick={() => setOpen(true)}>
          Delete Epic
        </Button>
        <AlertDialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title="Delete Epic"
          description="This will remove the epic and unlink all associated issues. This action cannot be undone."
          confirmLabel="Delete"
        />
      </>
    );
  },
};

export const NonDestructive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button intent="primary" onClick={() => setOpen(true)}>
          Publish Project
        </Button>
        <AlertDialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title="Publish Project"
          description="This will make the project visible to all team members."
          confirmLabel="Publish"
          intent="primary"
        />
      </>
    );
  },
};

export const Loading: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <AlertDialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
        title="Deleting..."
        description="Please wait while the item is being removed."
        confirmLabel="Delete"
        loading
      />
    );
  },
};