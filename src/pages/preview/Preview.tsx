import React from 'react'
import { useNavigate } from 'react-router'
import useSWR from 'swr'
import { emptyPreviewPage, Header, PreviewList } from '../../types/Preview'

type Props = {}

const headers: Header[] = [
    { name: "Name", value: "name", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
    { name: "Status", value: "status", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
    { name: "Date", value: "createdAt", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
    { name: "Action", value: "action", isCurrentlySorted: false, colStyle: { maxWidth: "15ch" }, hiddenOnSmall: false },
]
const fetcher = async (url: string) => {
    const result: PreviewList = await (await fetch(url)).json();
    return result;
}
function generateRandomDate() {
    const from = new Date(2023, 0, 1);
    const to = new Date();
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime())).toLocaleDateString();
}
function getStatus(status: string) {
    if (status.length < 15) return "Active"
    if (status.length > 30) return "Inactive"
    return "Pending"
}
function getStatusColor(status: string) {
    if (status.length < 15) return "green"
    if (status.length > 30) return "red"
    return "yellow"
}
const Preview = (props: Props) => {
    const navigate = useNavigate()

    const { data, error, isLoading } = useSWR('https://dummyjson.com/comments', fetcher, {
        revalidateOnFocus: false
    })
    const { comments: previews, limit, skip, total } = data || emptyPreviewPage

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
                        {
                            previews.map((preview) => (
                                <tr key={`preview-${Math.random()}`} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => { navigate(`${preview.id}`) }}>
                                    <td className="px-6 py-4">{preview.user.fullName}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-medium leading-tight text-${getStatusColor(preview.body)}-700 dark:text-black bg-${getStatusColor(preview.body)}-100 rounded-full`}>{getStatus(preview.body)}</span>
                                    </td>
                                    <td className="px-6 py-4">{generateRandomDate()}</td>
                                    <td className="px-6 py-4 flex gap-3">
                                        <button className="button button-green">Approve</button>
                                        <button className="button button-red">Reject</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>)
}

export default Preview