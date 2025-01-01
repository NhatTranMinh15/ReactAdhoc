import React from 'react'
import { Header } from '../../types/Preview'
import { useNavigate } from 'react-router'

type Props = {}

const headers: Header[] = [
    { name: "Name", value: "name", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
    { name: "Status", value: "status", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
    { name: "Date", value: "createdAt", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
    { name: "Action", value: "action", isCurrentlySorted: false, colStyle: { maxWidth: "15ch" }, hiddenOnSmall: true },
]

const Preview = (props: Props) => {
    const navigate = useNavigate()
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">KYC Submission</h1>

            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="table-header-group text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="table-header-row">
                            {headers?.map((h) => (
                                <th key={h.name} scope="col" className={"px-6 py-3 " + (h.hiddenOnSmall ? "hidden md:table-cell" : "")} style={{ overflow: "hidden" }}>
                                    {h.name.length > 0 ? h.name : '\u200B'}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 cursor-pointer" onClick={()=>{navigate("2")}}>
                            <td className="px-6 py-4">John Doe</td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-medium leading-tight text-green-700 bg-green-100 rounded-full">Active</span>
                            </td>
                            <td className="px-6 py-4">2024-12-01</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-green-600 dark:text-green-500 hover:underline">Approve</button>
                                <button className="text-red-600 dark:text-red-500 hover:underline">Reject</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">Jane Smith</td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-medium leading-tight text-yellow-700 bg-yellow-100 rounded-full">Pending</span>
                            </td>
                            <td className="px-6 py-4">2024-12-05</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-green-600 dark:text-green-500 hover:underline">Approve</button>
                                <button className="text-red-600 dark:text-red-500 hover:underline">Reject</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">Michael Johnson</td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-medium leading-tight text-red-700 bg-red-100 rounded-full">Inactive</span>
                            </td>
                            <td className="px-6 py-4">2024-11-20</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-green-600 dark:text-green-500 hover:underline">Approve</button>
                                <button className="text-red-600 dark:text-red-500 hover:underline">Reject</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
}

export default Preview