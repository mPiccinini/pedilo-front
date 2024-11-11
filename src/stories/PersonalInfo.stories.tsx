import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PersonalInfo from '@/components/PersonalInfo';

const meta: Meta<typeof PersonalInfo> = {
  title: 'Components/PersonalInfoCard',
  component: PersonalInfo,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['bank', 'address', 'add'],
      description: 'Type of personal info card variant',
    },
    bankName: {
      control: { type: 'text' },
      description: 'Name of the bank for the bank card variant',
      if: { arg: 'variant', eq: 'bank' },
    },
    lastDigits: {
      control: { type: 'text' },
      description: 'Last 4 digits of the bank card',
      if: { arg: 'variant', eq: 'bank' },
    },
    expiryDate: {
      control: { type: 'text' },
      description: 'Expiry date of the bank card',
      if: { arg: 'variant', eq: 'bank' },
    },
    street: {
      control: { type: 'text' },
      description: 'Street address for the address card variant',
      if: { arg: 'variant', eq: 'address' },
    },
    postalCode: {
      control: { type: 'text' },
      description: 'Postal code for the address card variant',
      if: { arg: 'variant', eq: 'address' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PersonalInfo>;

export const BankInfo: Story = {
  args: {
    variant: 'bank',
    bankName: 'BANCO',
    lastDigits: 'XXXX',
    expiryDate: "MM/YY",
  },
  render: (args) => <PersonalInfo {...args} />,
};

export const AddressInfo: Story = {
  args: {
    variant: 'address',
    street: 'Calle',
    postalCode: 'XXXX',
  },
  render: (args) => <PersonalInfo {...args} />,
};

export const AddNew: Story = {
  args: {
    variant: 'add',
  },
  render: (args) => <PersonalInfo {...args} />,
};
