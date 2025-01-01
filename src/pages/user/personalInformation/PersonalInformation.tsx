import ContactInfo from "../../../components/user/pi/ContactInfo";
import EmailInfo from "../../../components/user/pi/EmailInfo";
import IDInfo from "../../../components/user/pi/IDInfo";
import OccupationInfo from "../../../components/user/pi/OccupationInfo";
import PersonalInfo from "../../../components/user/pi/PersonalInfo";
import PhoneInfo from "../../../components/user/pi/PhoneInfo";
import { FormProps } from "../../../types/User";

type Props = FormProps & {

}

const PersonalInformation = ({ form }: Props) => {
    return (
        <div className="flex flex-col gap-3">
            <PersonalInfo form={form} />
            <ContactInfo form={form} />
            <EmailInfo form={form} />
            <PhoneInfo form={form} />
            <IDInfo form={form} />
            <OccupationInfo form={form} />
        </div>
    )
}

export default PersonalInformation;