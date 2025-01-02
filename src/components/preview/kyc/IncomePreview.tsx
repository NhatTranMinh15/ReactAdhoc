import { Preview } from '../../../types/Submission';
import { IncomeType } from '../../../types/User';

type Props = {
  preview: Preview
}

const IncomePreview = ({ preview }: Props) => {
  const { incomes } = preview
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Incomes (A)</h3>
      {
        incomes.map((income, index) => (
          <fieldset key={income.incomeType} className='preview-fieldset'>
            <legend className="preview-legend">{`Income #${index + 1}`}</legend>
            <div>
              <span className="preview-label">Type:</span>
              <span>{IncomeType[income.incomeType]}</span>
            </div>
            <div>
              <span className="preview-label">Amount:</span>
              <span>{income.amount}</span>
            </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default IncomePreview