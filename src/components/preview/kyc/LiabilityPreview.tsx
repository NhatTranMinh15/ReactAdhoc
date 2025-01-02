import { Preview } from '../../../types/Preview';
import ErrorText from '../../ErrorText';


type Props = {
  preview: Preview
}
const LiabilityPreview = ({ preview }: Props) => {
  const { liabilities, totalLiability } = preview

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Liabilities (C)</h3>
      {
        liabilities.map((liability, index) => (
          <fieldset key={liability.liabilityType} className='preview-fieldset'>
            <legend className="preview-legend">{`Liability #${index+1}`}</legend>
            <div>
              <span className="preview-label">Type:</span>
              <span>{liability.liabilityType}</span>
            </div>
            <div>
              <span className="preview-label">Amount:</span>
              <span>{liability.amount}</span>
            </div>
          </fieldset>
        ))
      }
      <div className="my-3">
        <span className="preview-label">Total Liability:</span>
        <span>{totalLiability}</span>
      </div>
    </div>
  )
}

export default LiabilityPreview

