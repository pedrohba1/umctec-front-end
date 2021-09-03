import { Form } from '@unform/web';
import { useRef } from 'react';
import { Input } from '@styles/pages/login';
import Component from './index';

export default {
  title: 'Layouts/login',
  component: Component,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => {
  const ref = useRef();
  const onSubmit = () => {};

  const formProps = { ref, onSubmit };

  const EmailInputProps = { name: 'email' };
  const PasswInputProps = { name: 'password' };

  return (
    <Component {...args}>
      <Form {...formProps}>
        <Input {...EmailInputProps} />
        <Input {...PasswInputProps} />
      </Form>
    </Component>
  );
};

export const Default = Template.bind({});
Default.args = {
  background: 'https://source.unsplash.com/random/'
};
