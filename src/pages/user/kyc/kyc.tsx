import {  UseFormReturn } from "react-hook-form";
import { FormProps, KYCFormDataType, KYCFormProps } from "../../../types/User";
import IncomeInfo from "../../../components/user/kyc/IncomeInfo";
import AssetInfo from "../../../components/user/kyc/AssetInfo";
import LiabilityInfo from "../../../components/user/kyc/LiabilityInfo";
import SourceOfWealthInfo from "../../../components/user/kyc/SourceOfWealthInfo";
import NetWothInfo from "../../../components/user/kyc/NetWothInfo";
import ExperienceInfo from "../../../components/user/kyc/ExperienceInfo";

type Props = FormProps & {}

const UserKYC = ({ form }: Props) => {
    const KYCForm = form as UseFormReturn<KYCFormDataType, any, undefined>

    return (
        <div>
            <IncomeInfo form={KYCForm} />
            <AssetInfo form={KYCForm} />
            <LiabilityInfo form={KYCForm} />
            <SourceOfWealthInfo form={KYCForm} />
            <NetWothInfo form={KYCForm} />
            <ExperienceInfo form={KYCForm} />
        </div>
    )
}

export default UserKYC;