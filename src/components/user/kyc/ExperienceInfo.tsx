import { ExperienceInFinanceType, FormProps, KYCFormProps, RiskToleranceType } from '../../../types/User';
import ErrorText from '../../ErrorText';

type Props = KYCFormProps & {

}

const name = 'experience'
const ExperienceInfo = ({ form }: Props) => {
  const { register, formState: { errors } } = form;
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Investment Experience and Objectives</h3>
      <fieldset>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="experienceInFinance" className="pi-label">Experience in Financial Markets</label>
            <select id="experienceInFinance" className='pi-input'  {...register(`${name}.experienceInFinance`, { required: "Income type is required" })}>
              {
                Object.entries(ExperienceInFinanceType).map((type) => (
                  <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                ))
              }
            </select>
            <ErrorText error={errors[name] ? errors[name].experienceInFinance?.message : ""} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="riskTolerance" className="pi-label">Risk Tolerance</label>
            <select id="riskTolerance" className='pi-input'  {...register(`${name}.riskTolerance`, { required: "Income type is required" })}>
              {
                Object.entries(RiskToleranceType).map((type) => (
                  <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                ))
              }
            </select>
            <ErrorText error={errors[name] ? errors[name].riskTolerance?.message : ""} />
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default ExperienceInfo