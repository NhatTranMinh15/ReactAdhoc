import { Preview } from '../../../types/Submission';
import { IDDocumentType } from '../../../types/User';
type Props = {
  preview: Preview
}
const IDPreview = ({ preview }: Props) => {
  const { IDs } = preview
  return (
    <div className='p-3 border border-zinc-200 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold">Identification Documents</h3>
      {
        IDs.map((id, index) => (
          <fieldset key={id.IDType} className='preview-fieldset'>
            <legend className='preview-legend'>{`Identification Document #${index+1}`}</legend>
            <div>
              <span className="preview-label">Type:</span>
              <span>{IDDocumentType[id.IDType]}</span>
            </div>
            <div>
              <span className="preview-label">Expiry Date:</span>
              <span>{id.expiryDate}</span>
            </div>
            <div>
              <span className="preview-label">Document:</span>
              <span>{id.attachment?.name}</span>
            </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default IDPreview