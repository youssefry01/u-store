import React from 'react';
import LoginFeed from '../components/Login/LoginFeed';
import useTitle from '../hooks/useTitle';

const Login = () => {
  useTitle('Sign in - Ustore')

  return (
    <main className='dark:bg-gray-900'>
      
      <LoginFeed />

    </main>
  )
}

export default Login;