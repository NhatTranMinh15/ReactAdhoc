import React from 'react'
import { useNavigate } from 'react-router'
import useSWR from 'swr'
import { EmptySubmissionPage, Header, PageResponse, Submission, SubmissionStatus, SubmissionStatusColor } from '../../types/Submission'

type Props = {}

const headers: Header[] = [
  { name: "Name", value: "name", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
  { name: "Status", value: "status", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
  { name: "Date", value: "createdAt", isCurrentlySorted: false, colStyle: {}, hiddenOnSmall: false },
  { name: "Action", value: "action", isCurrentlySorted: false, colStyle: { maxWidth: "15ch" }, hiddenOnSmall: false },
]

export async function approveSubmission(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | number): Promise<void> {
  e.stopPropagation();
  const response = await fetch(`https://dummyjson.com/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'Approved' })
  })
  if (response.ok) {
    alert(`Submission ${id} approved`)
  }
}

export async function rejectSubmission(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | number): Promise<void> {
  e.stopPropagation();
  const response = await fetch(`https://dummyjson.com/users/${id}`, { method: 'DELETE', })
  if (response.ok) {
    alert(`Submission ${id} deleted`)
  }
}

const fetcher = async (url: string) => {
  const result: PageResponse<Submission> = await (await fetch(url)).json();
  return result;
}

const Submissions = (props: Props) => {
  const navigate = useNavigate()

  const { data, isLoading } = useSWR('https://dummyjson.com/c/59dc-3162-471c-86fa?delay=1000', fetcher, {
    revalidateOnFocus: false,
  })
  const { datas: submissions } = data || EmptySubmissionPage


  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">KYC Submission</h1>
        <div>Loading submissions ...</div>
      </div>
    )
  }
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
              submissions.map((submission) => (
                <tr key={`preview-${Math.random()}`} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" onClick={() => { navigate(`${submission.id}`) }}>
                  <td className="px-6 py-4">{`${submission.firstName} ${submission.lastName}`}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium leading-tight text-${SubmissionStatusColor[submission.status]}-700 dark:text-black bg-${SubmissionStatusColor[submission.status]}-100 rounded-full`}>{SubmissionStatus[submission.status]}</span>
                  </td>
                  <td className="px-6 py-4">{submission.createdAt}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button className="button button-green" onClick={(e) => approveSubmission(e, submission.id)}>Approve</button>
                    <button className="button button-red" onClick={(e) => rejectSubmission(e, submission.id)}>Reject</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Submissions