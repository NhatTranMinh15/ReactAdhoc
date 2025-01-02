import { ChevronDoubleRightIcon, HomeIcon, UserPlusIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { Tabs, TabsRef } from "flowbite-react";
import PersonalInformation from "./personalInformation/PersonalInformation";
import { RefObject, useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AddressType, ExperienceInFinanceType, FormDataType, IDDocumentType, RiskToleranceType } from "../../types/User";
import KYC from "./kyc/KYC";
import { useAuth } from "../../context/AuthContext";
import { UserDetail } from "../../types/Auth";

function setTab(key: keyof FormDataType, value: any[] | FormDataType, tabsRef: RefObject<TabsRef>, index: number) {
    let focus = key;
    if (Array.isArray(value)) {
        const i = value.findIndex(element => element);
        focus = `${key}.${i}.${Object.keys((value as any[]).at(i))[0]}` as keyof FormDataType
    }
    tabsRef.current?.setActiveTab(index);
    return focus;
}

function defaultFromValues(user: UserDetail | null) {
    if (user) {
        const u: FormDataType = {
            firstName: user.firstName,
            middleName: "",
            lastName: user.lastName,
            age: user.age,
            assets: [],
            contacts: [{ addressType: AddressType.WORK, city: user.address.city, country: user.address.country, postalCode: user.address.postalCode, street: user.address.address }],
            DOB: user.birthDate,
            phones: [],
            emails: [],
            experience: { experienceInFinance: ExperienceInFinanceType.ABOVE_TEN, riskTolerance: RiskToleranceType.ALL_IN },
            IDs: [{ IDType: IDDocumentType.ID_CARD, expiryDate: new Date().toDateString(), attachment: null }],
            incomes: [],
            liabilities: [],
            netWorth: 0,
            occupations: [],
            sourcesOfWealth: [],
            totalAsset: 0,
            totalIncome: 0,
            totalLiability: 0,
            totalSourceOfWealth: 0
        };
        return u
    }
}
const User = () => {
    const { user } = useAuth()
    const tabsRef = useRef<TabsRef>(null);
    const [activeTab, setActiveTab] = useState(0);

    const form = useForm<FormDataType>({ values: defaultFromValues(user) });
    const { setFocus, formState: { errors, submitCount } } = form

    useEffect(() => {
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
            const timeout = setTimeout(() => {
                setFocus(focus, { shouldSelect: true })
            }, 0);

            return () => { clearTimeout(timeout) }
        }
    }, [submitCount]);

    function handleFormSubmit(data: FieldValues) {
        console.log(data);
    }

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <div className="mb-4 col-span-full xl:mb-2">
                <nav className="flex gap-3 mb-5" aria-label="Breadcrumb">
                    <HomeIcon width={15} />
                    <a href="/home" className="breadcrumb">Home</a>
                    <ChevronDoubleRightIcon width={15} />
                    <a href="/home/user" className="breadcrumb">Users</a>
                    <ChevronDoubleRightIcon width={15} />
                    <a href="#" className="breadcrumb" aria-current="page">Personal Information</a>
                </nav>
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Personal Information</h1>
            </div>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <Tabs aria-label="Default tabs" variant="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
                    <Tabs.Item active title="Personal Information" icon={UserPlusIcon} >
                        <PersonalInformation form={form} ></PersonalInformation>
                    </Tabs.Item>
                    <Tabs.Item title="KYC" icon={CreditCardIcon}>
                        <KYC form={form} />
                    </Tabs.Item>
                </Tabs>
                <button type="submit" className="button w-fit">Submit</button>
            </form>
        </div>
    )
}

export default User;