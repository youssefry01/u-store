import React from 'react'
import DashUsersHead from './DashUsersHead'
import DashUser from './DashUser'

const UsersDashView = ({ users }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow rounded">

        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">

            <table className="min-w-full mx-6 bg-white dark:bg-gray-800">

                <DashUsersHead />

                <tbody className=''>

                    {users.map((user, id) => (
                        <DashUser key={id} user={user} />
                    ))}

                </tbody>

            </table>

        </div>
        
    </div>
  )
}

export default UsersDashView