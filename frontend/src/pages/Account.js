import React from 'react'
import Missing from '../components/General/Missing';
import useTitle from '../hooks/useTitle';
import useAuth from '../hooks/useAuth';
import AccountFeed from '../components/Account/AccountFeed';
import Loading from '../components/General/Loading';
import { useGetUserByIdQuery } from '../features/users/usersApiSlice';

const Account = () => {
    const { id } = useAuth()
    const { data: user, isLoading } = useGetUserByIdQuery(id, 'user', { pollingInterval: 15000, refetchOnFocus: true, refetchOnMountOrArgChange: true });

    const pageTitle = user && user.username ? `@${user.username}` : 'Account'
    useTitle(`${pageTitle} - Ustore`)
    
    if (isLoading) {
      return <Loading />;
    }

    if (!user && !isLoading) {
        return <Missing msg={'You are not Logged In'} />;
    }

  return (
    <div>

      <AccountFeed user={user} />

    </div>
  )
}

export default Account