import { Preview } from '../../../types/Preview';
import { ExperienceInFinanceType, FormProps, RiskToleranceType } from '../../../types/User';
import ErrorText from '../../ErrorText';

type Props = {
  preview: Preview
}

const ExperiencePreview = ({ preview }: Props) => {
  const {experience} = preview
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Investment Experience and Objectives</h3>
      <fieldset>
          <div>
            <span className="preview-label">Experience in Financial Markets:</span>
            <span>{experience.experienceInFinance}</span>
          </div>

          <div>
            <span className="preview-label">Risk Tolerance:</span>
            <span>{experience.riskTolerance}</span>
        </div>
      </fieldset>
    </div>
  )
}

export default ExperiencePreview