import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { UserDetail } from '../../types/Auth'

type Props = { user: UserDetail }

const UserIcon = ({ user }: Props) => {
    const {logout} = useAuth()
    return (
        <div className="flex items-center ml-3 user-icon">
            <div>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                </button>
            </div>

            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-2" data-popper-placement="bottom" style={{
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: "0px",
                    transform: "translate3d(1692px, 1501px, 0px)"
                }}>
                <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                        {user.username}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none">
                        {user.email}
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <a href="#"
                            className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600 "
                            role="menuitem">Dashboard</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600 "
                            role="menuitem">Settings</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600 "
                            role="menuitem">Earnings</a>
                    </li>
                    <li>
                        <button className="w-full text-left block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600" role="menuitem" onClick={logout}>Sign out</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserIcon