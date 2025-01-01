import { FormProps } from "../../../types/User";
import AssetInfo from "../../../components/user/kyc/AssetInfo";
import ExperienceInfo from "../../../components/user/kyc/ExperienceInfo";
import IncomeInfo from "../../../components/user/kyc/IncomeInfo";
import LiabilityInfo from "../../../components/user/kyc/LiabilityInfo";
import NetWothInfo from "../../../components/user/kyc/NetWothInfo";
import SourceOfWealthInfo from "../../../components/user/kyc/SourceOfWealthInfo";

type Props = FormProps & {}

const KYC = ({ form }: Props) => {

    return (
        <div className="flex flex-col gap-3">
            <IncomeInfo form={form} />
            <AssetInfo form={form} />
            <LiabilityInfo form={form} />
            <SourceOfWealthInfo form={form} />
            <NetWothInfo form={form} />
            <ExperienceInfo form={form} />
        </div>
    )
}

export default KYC;