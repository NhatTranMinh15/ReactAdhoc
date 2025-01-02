import { Preview } from "../../../types/Submission"
import { SourceOfWealthType } from "../../../types/User"

type Props = {
  preview: Preview
}
const SourceOfWealthPreview = ({ preview }: Props) => {
  const { sourcesOfWealth, totalSourceOfWealth } = preview

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Sources of Wealth (D)</h3>
      {
        sourcesOfWealth.map((sow, index) => (
          <fieldset key={sow.sourceOfWealthType} className='preview-fieldset'>
            <legend className="preview-legend">{`Source of Wealth #${index}`}</legend>
            <div>
              <span className="preview-label">Type:</span>
              <span>{SourceOfWealthType[sow.sourceOfWealthType]}</span>
            </div>
            <div>
              <span className="preview-label">Amount:</span>
              <span>{sow.amount}</span>
            </div>
          </fieldset>
        ))
      }
      <div className="my-3">
        <span className="preview-label">Total SoW:</span>
        <span>{totalSourceOfWealth}</span>
      </div>
    </div>
  )
}

export default SourceOfWealthPreview