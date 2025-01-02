import { Preview } from '../../../types/Submission';
import { OccupationType } from '../../../types/User';
type Props = {
  preview: Preview
}
const OccupationPreview = ({ preview }: Props) => {
  const { occupations } = preview

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Occupations</h3>
      {
        occupations.map((occupation, index) => (
          <fieldset key={occupation.occupationType} className='preview-fieldset'>
            <legend className='preview-legend'>{`Occupation #${index + 1}`}</legend>
              <div>
                <span className="preview-label">Type:</span>
                <span>{OccupationType[occupation.occupationType]}</span>
              <div>
              </div>
                <span className="preview-label">Start Date:</span>
                <span>{occupation.fromDate}</span>
              </div>
              <div>
                <span className="preview-label">End Date:</span>
                <span>{occupation.toDate}</span>
              </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default OccupationPreview