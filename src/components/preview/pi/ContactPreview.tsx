import { Preview } from '../../../types/Preview';

type Props = {
  preview: Preview
}

const ContactPreview = ({ preview }: Props) => {
  const { contacts } = preview
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Contact information</h3>
      {
        contacts.map((contact, index) => (
          <fieldset key={contact.postalCode} className='preview-fieldset'>
            <legend className="preview-legend">{`Address #${index + 1}`}</legend>

            <div>
              <span className="preview-label">Country:</span>
              <span>{contact.city}</span>
            </div>

            <div>
              <span className="preview-label">City:</span>
              <span>{contact.city}</span>
            </div>

            <div>
              <span className="preview-label">Street:</span>
              <span>{contact.street}</span>
            </div>

            <div>
              <span className="preview-label">Postal Code:</span>
              <span>{contact.postalCode}</span>
            </div>

            <div>
              <span className="preview-label">Type:</span>
              <span>{contact.addressType}</span>
            </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default ContactPreview