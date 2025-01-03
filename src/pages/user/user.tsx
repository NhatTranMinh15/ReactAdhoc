import { RefObject, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Tabs, TabsRef } from "flowbite-react";
import { HomeIcon, UserPlusIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import useSWR from "swr";
import { FormDataType } from "../../types/User";
import PersonalInfo from "../../components/user/pi/PersonalInfo";
import ContactInfo from "../../components/user/pi/ContactInfo";
import EmailInfo from "../../components/user/pi/EmailInfo";
import PhoneInfo from "../../components/user/pi/PhoneInfo";
import IDInfo from "../../components/user/pi/IDInfo";
import OccupationInfo from "../../components/user/pi/OccupationInfo";
import IncomeInfo from "../../components/user/kyc/IncomeInfo";
import AssetInfo from "../../components/user/kyc/AssetInfo";
import LiabilityInfo from "../../components/user/kyc/LiabilityInfo";
import SourceOfWealthInfo from "../../components/user/kyc/SourceOfWealthInfo";
import NetWothInfo from "../../components/user/kyc/NetWothInfo";
import ExperienceInfo from "../../components/user/kyc/ExperienceInfo";
import Breadcrumb from "../../components/Breadcrumb"
import { BreadcrumbType } from '../../types/General';

function setTab(key: keyof FormDataType, value: any[] | FormDataType, tabsRef: RefObject<TabsRef>, index: number) {
    let focus = key;
    if (Array.isArray(value)) {
        const i = value.findIndex(element => element);
        focus = `${key}.${i}.${Object.keys((value as any[]).at(i))[0]}` as keyof FormDataType
    }
    tabsRef.current?.setActiveTab(index);
    return focus;
}

async function fetcher(url: string) {
    const result: FormDataType = await (await fetch(url)).json();
    return result
}

const breadcrumb: BreadcrumbType[] = [
    { href: '/home', icon: HomeIcon, name: 'Home' },
    { href: '/home/user', icon: undefined, name: 'User' },
    { href: `/home/user`, icon: undefined, name: "Personal Information" },
];

const User = () => {
    const tabsRef = useRef<TabsRef>(null);
    const [_, setActiveTab] = useState(0);

    const { data: user } = useSWR(`https://dummyjson.com/c/00d9-a33a-406b-b4d6?delay=1000`, fetcher, {
        revalidateOnFocus: false
    })

    const form = useForm<FormDataType>({ values: user });
    const { setFocus, formState: { errors, submitCount, isSubmitting } } = form

    useEffect(() => {
        // Change tab and focus on error field for every submit
        const firstError = Object.entries(errors)[0] as [keyof FormDataType, FormDataType | any[]]
        if (firstError) {
            const { 0: key, 1: value } = firstError
            let focus = key;
            switch (key) {
                case "firstName":
                case "lastName":
                case "middleName":
                case "DOB":
                case "age":
                case "contacts":
                case "emails":
                case "phones":
                case "IDs":
                case "occupations":
                    focus = setTab(key, value, tabsRef, 0)
                    break;
                case "incomes":
                case "assets":
                case "liabilities":
                case "totalLiability":
                case "sourcesOfWealth":
                case "totalSourceOfWealth":
                case "experience":
                case "netWorth":
                    focus = setTab(key, value, tabsRef, 1)
                    break;
                default:
                    break;
            }

            // Delay focus
            const timeout = setTimeout(() => {
                setFocus(focus, { shouldSelect: true })
            }, 0);

            return () => { clearTimeout(timeout) }
        }
    }, [submitCount]);

    async function handleFormSubmit(data: FieldValues) {
        const result = await fetch('https://dummyjson.com/c/8ea2-0dd7-4bda-a078', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (result.ok) {
            alert("Update Info completed")
        }
        const body = await result.json();
        console.log(body);
    }

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <Breadcrumb data={breadcrumb} />
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white my-6">Personal Information</h1>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <Tabs aria-label="Default tabs" variant="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
                    <Tabs.Item active title="Personal Information" icon={UserPlusIcon} >
                        <div className="flex flex-col gap-3">
                            <PersonalInfo form={form} />
                            <ContactInfo form={form} />
                            <EmailInfo form={form} />
                            <PhoneInfo form={form} />
                            <IDInfo form={form} />
                            <OccupationInfo form={form} />
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="KYC" icon={CreditCardIcon}>
                        <div className="flex flex-col gap-3">
                            <IncomeInfo form={form} />
                            <AssetInfo form={form} />
                            <LiabilityInfo form={form} />
                            <SourceOfWealthInfo form={form} />
                            <NetWothInfo form={form} />
                            <ExperienceInfo form={form} />
                        </div>
                    </Tabs.Item>
                </Tabs>
                <button type="submit" className="button w-fit" disabled={isSubmitting}>{isSubmitting ? "Submiting" : "Submit"}</button>
            </form>
        </div>
    )
}

export default User;