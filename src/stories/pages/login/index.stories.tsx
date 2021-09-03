import { QueryClient, QueryClientProvider } from 'react-query';
import LoginLayout from '@layouts/Login';
import LoginPage from 'src/pages/login';
// 👇 Imports the required stories
const queryClient = new QueryClient();

export default {
  component: LoginPage,
  title: 'Pages/LoginPage',
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => (
  <LoginLayout>
    <QueryClientProvider client={queryClient}>
      <LoginPage {...args} />
    </QueryClientProvider>
  </LoginLayout>
);

export const Simple = Template.bind({});
Simple.args = {};
