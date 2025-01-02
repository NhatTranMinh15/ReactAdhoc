import { Preview } from '../../../types/Submission';
import { PhoneType } from '../../../types/User';

type Props = {
  preview: Preview
}

const PhonePreview = ({ preview }: Props) => {
  const { phones } = preview
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Phones</h3>
      {
        phones.map((phone, index) => (
          <fieldset key={phone.phoneNumber} className='preview-fieldset'>
            <legend className='preview-legend'>{`Phones #${index+1}`}</legend>
              <div>
                <span className="preview-label">Phone Number:</span>
                <span>{phone.phoneNumber}</span>
              </div>

              <div>
                <span className="preview-label">Type:</span>
                <span>{PhoneType[phone.phoneType]}</span>
              </div>

              <div>
                <span className="preview-label">Preferred:</span>
                <span>{phone.preferred}</span>
              </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default PhonePreview