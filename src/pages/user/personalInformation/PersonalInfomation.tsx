import { HomeIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import PersonalInfo from "../../../components/user/PersonalInfo";
import EmailInfo from "../../../components/user/EmailInfo";
import IDInfo from "../../../components/user/IDInfo";
import OccupationInfo from "../../../components/user/OccupationInfo";
import PhoneInfo from "../../../components/user/PhoneInfo";
import ContactInfo from "../../../components/user/ContactInfo";

const PersonalInformation = () => {

    const { register, handleSubmit, control,setValue, formState: { errors } } = useForm();
    function handleInfomationChange(data: any) {
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
            <form onSubmit={handleSubmit(handleInfomationChange)} className="p-4 flex flex-col gap-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 dark:bg-gray-800">
                <PersonalInfo register={register} errors={errors} setValue={setValue} />
                <ContactInfo register={register} errors={errors} control={control} />
                <EmailInfo register={register} errors={errors} control={control}/>
                <PhoneInfo register={register} errors={errors} control={control}/>
                <IDInfo register={register} errors={errors} control={control}/>
                {/* <OccupationInfo register={register} errors={errors} /> */}
                <div className="col-span-6 sm:col-full my-6">
                    <button type="submit" className="button button-blue">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInformation;