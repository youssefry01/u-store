import React from 'react';
import RegisterFeed from '../components/Register/RegisterFeed';
import useTitle from '../hooks/useTitle';

const Register = () => {
  useTitle('Sign up - Ustore')

  return (
    <main className='dark:bg-gray-900'>
      
      <RegisterFeed />

    </main>
  )
}

export default Register;