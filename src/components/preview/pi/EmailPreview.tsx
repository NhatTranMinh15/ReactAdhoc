import { Preview } from '../../../types/Preview';

type Props = {
  preview: Preview
}

const EmailPreview = ({ preview }: Props) => {
  const { emails } = preview

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Emails</h3>
      {
        emails.map((email, index) => (
          <fieldset key={email.emailAddress} className='preview-fieldset'>
            <legend className='preview-legend'>{`Email #${index + 1}`}</legend>
              <div>
                <span className="preview-label">Email Address:</span>
                <span>{email.emailAddress}</span>
              </div>

              <div>
                <span className="preview-label">Type:</span>
                <span>{email.emailType}</span>
              </div>

              <div>
                <span className="preview-label">Preferred:</span>
                <span>{email.preferred}</span>
              </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default EmailPreview