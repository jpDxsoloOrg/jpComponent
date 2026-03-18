import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    open: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button intent="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
          <p className="text-sm text-muted-foreground">This is the modal content.</p>
        </Modal>
      </>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button intent="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          description="This action cannot be undone."
        >
          <div className="flex justify-end gap-2 mt-4">
            <Button intent="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button intent="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};
