import React from 'react';

import LoginForm from '../components/forms/LoginForm';
import CreateAccountForm from '../components/forms/CreateAccountForm';
import ResetForm from '../components/forms/ResetForm';
import Tabs from '../components/tabs';
import { useAppContext } from '../providers/AppProvider';
import SEO from '../components/SEO';

const LoginPage = () => {
  const { activeLoginTab, setActiveLoginTab } = useAppContext();
  return (
    <>
      <SEO title={activeLoginTab} />
      <h1>{activeLoginTab}</h1>
      <p>Create an account or login to view your bookings and information</p>
      <Tabs tabs={['Login', 'Create an Account']} />
      {activeLoginTab === 'Login' && <LoginForm />}
      {activeLoginTab === 'Create an Account' && <CreateAccountForm />}
      {activeLoginTab === 'Reset' && <ResetForm />}
    </>
  );
};

export default LoginPage;
