import { Preview } from '../../../types/Submission';
import { ExperienceInFinanceType, RiskToleranceType } from '../../../types/User';

type Props = {
  preview: Preview
}

const ExperiencePreview = ({ preview }: Props) => {
  const { experience } = preview
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Investment Experience and Objectives</h3>
      <fieldset>
        <div>
          <span className="preview-label">Experience in Financial Markets:</span>
          <span>{ExperienceInFinanceType[experience.experienceInFinance]}</span>
        </div>

        <div>
          <span className="preview-label">Risk Tolerance:</span>
          <span>{RiskToleranceType[experience.riskTolerance]}</span>
        </div>
      </fieldset>
    </div>
  )
}

export default ExperiencePreview