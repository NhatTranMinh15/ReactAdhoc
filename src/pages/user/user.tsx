import { ChevronDoubleRightIcon, HomeIcon, UserPlusIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { Tabs, TabsRef } from "flowbite-react";
import UserKYC from "./kyc/kyc";
import PersonalInformation from "./personalInformation/PersonalInformation";
import { useEffect, useRef, useState } from "react";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { FormDataType, KYCFormDataType, UserFormDataType } from "../../types/User";

const User = () => {
    const tabsRef = useRef<TabsRef>(null);
    const [activeTab, setActiveTab] = useState(0);

    const form = useForm<FormDataType>();
    const { setFocus, formState: { errors, submitCount } } = form

    useEffect(() => {
        const u = errors as FieldErrors<UserFormDataType>
        const k = errors as FieldErrors<KYCFormDataType>

        console.log(u, k);

    }, [submitCount]);

    function handleFormSubmit(data: FieldValues) {
        console.log(data);
    }

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <div className="mb-4 col-span-full xl:mb-2">
                <nav className="flex gap-3 mb-5" aria-label="Breadcrumb">
                    <HomeIcon width={15} />
                    <a href="#" className="breadcrumb">Home</a>
                    <ChevronDoubleRightIcon width={15} />
                    <a href="#" className="breadcrumb">Users</a>
                    <ChevronDoubleRightIcon width={15} />
                    <a href="#" className="breadcrumb" aria-current="page">Personal Information</a>
                </nav>
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Personal Information</h1>
            </div>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} onError={(a) => console.log(a)}             >
                <Tabs aria-label="Default tabs" variant="default" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
                    <Tabs.Item active title="Personal Information" icon={UserPlusIcon}>
                        <PersonalInformation form={form} ></PersonalInformation>
                    </Tabs.Item>
                    <Tabs.Item title="KYC" icon={CreditCardIcon}>
                        <UserKYC form={form} />
                    </Tabs.Item>
                </Tabs>
                <button type="submit" className="button w-fit">Submit</button>
            </form>
        </div>
    )
}

export default User;