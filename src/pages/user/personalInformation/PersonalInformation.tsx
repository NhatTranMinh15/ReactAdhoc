import PersonalInfo from "../../../components/user/pi/PersonalInfo";
import EmailInfo from "../../../components/user/pi/EmailInfo";
import IDInfo from "../../../components/user/pi/IDInfo";
import OccupationInfo from "../../../components/user/pi/OccupationInfo";
import PhoneInfo from "../../../components/user/pi/PhoneInfo";
import ContactInfo from "../../../components/user/pi/ContactInfo";
import { FormProps, UserFormDataType, UserFormProps } from "../../../types/User";
import { UseFormReturn } from "react-hook-form";

type Props = FormProps & {

}

const PersonalInformation = ({ form }: Props) => {
    const userForm = form as UseFormReturn<UserFormDataType, any, undefined>
    return (
        <div>
            <PersonalInfo form={userForm} />
            <ContactInfo form={userForm} />
            <EmailInfo form={userForm} />
            <PhoneInfo form={userForm} />
            <IDInfo form={userForm} />
            <OccupationInfo form={userForm} />
        </div>
    )
}

export default PersonalInformation;