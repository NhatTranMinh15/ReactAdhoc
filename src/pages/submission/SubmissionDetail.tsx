import { CreditCardIcon, HomeIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import { Tabs, TabsRef } from 'flowbite-react'
import useSWR from 'swr'
import PersonalPreview from '../../components/preview/pi/PersonalPreview';
import { useNavigate, useParams } from 'react-router';
import ContactPreview from '../../components/preview/pi/ContactPreview';
import EmailPreview from '../../components/preview/pi/EmailPreview';
import PhonePreview from '../../components/preview/pi/PhonePreview';
import IDPreview from '../../components/preview/pi/IDPreview';
import OccupationPreview from '../../components/preview/pi/OccupationPreview';
import IncomePreview from '../../components/preview/kyc/IncomePreview';
import AssetPreview from '../../components/preview/kyc/AssetPreview';
import LiabilityPreview from '../../components/preview/kyc/LiabilityPreview';
import SourceOfWealthPreview from '../../components/preview/kyc/SourceOfWealthPreview';
import NetWothPreview from '../../components/preview/kyc/NetWothPreview';
import ExperiencePreview from '../../components/preview/kyc/ExperiencePreview';
import { useMemo, useRef, useState } from 'react';
import { approveSubmission, rejectSubmission } from './Submissions';
import { Preview } from '../../types/Submission';
import Breadcrumb from "../../components/Breadcrumb"
import { BreadcrumbType } from '../../types/General';

type Props = {}

async function fetcher(url: string) {
  const result: Preview = await (await fetch(url)).json();
  return result
}

const SubmissionDetail = (props: Props) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { data: preview } = useSWR(`https://dummyjson.com/c/d2b2-55e5-4f29-903e`, fetcher, {
    revalidateOnFocus: false
  })

  const breadcrumb: BreadcrumbType[] = useMemo(() => [
    { href: '/home', icon: HomeIcon, name: 'Home' },
    { href: '/home/officer/submissions', icon: undefined, name: 'Submissions' },
    { href: `/home/officer/submissions/${id}`, icon: undefined, name: `${id}` },
  ], [id])

  return (
    <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
      <Breadcrumb data={breadcrumb} />
      <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white my-6">Preview</h1>
      {
        preview &&
        <Tabs aria-label="Default tabs" variant="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
          <Tabs.Item active title="Info" icon={UserPlusIcon} >
            <div className="flex flex-col gap-3">
              <PersonalPreview preview={preview} />
              <ContactPreview preview={preview} />
              <EmailPreview preview={preview} />
              <PhonePreview preview={preview} />
              <IDPreview preview={preview} />
              <OccupationPreview preview={preview} />
              <button className='button w-fit' onClick={() => { tabsRef.current?.setActiveTab(1); }}>To KYC tab</button>
            </div>
          </Tabs.Item>
          <Tabs.Item title="KYC" icon={CreditCardIcon}>
            <div className="flex flex-col gap-3">
              <IncomePreview preview={preview} />
              <AssetPreview preview={preview} />
              <LiabilityPreview preview={preview} />
              <SourceOfWealthPreview preview={preview} />
              <NetWothPreview preview={preview} />
              <ExperiencePreview preview={preview} />
              <button className='button w-fit' onClick={() => { tabsRef.current?.setActiveTab(0); }}>To Info tab</button>
            </div>
          </Tabs.Item>
        </Tabs>
      }
      <div className='flex gap-3'>
        <button className="button button-green w-fit " onClick={async (e) => { await approveSubmission(e, id as string); navigate("/home/officer/submissions") }}>Approve</button>
        <button className="button button-red w-fit" onClick={async (e) => { await rejectSubmission(e, id as string); navigate("/home/officer/submissions") }}>Reject</button>
      </div>
    </div >
  )
}

export default SubmissionDetail