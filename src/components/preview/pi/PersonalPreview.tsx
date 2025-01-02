import { Preview } from "../../../types/Preview"

type Props = {
  preview: Preview
}

const PersonalPreview = ({ preview }: Props) => {

  return (
    <div className='p-3 border border-zinc-200 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold">Basic information</h3>

      <div>
        <span className="preview-label ">First Name:</span>
        <span>{preview.firstName}</span>
      </div>

      <div>
        <span className="preview-label ">Last Name:</span>
        <span>{preview.lastName}</span>
      </div>

      <div>
        <span className="preview-label ">Middle Name:</span>
        <span>{preview.middleName}</span>
      </div>

      <div>
        <span className="preview-label ">Date of Birth:</span>
        <span>{preview.DOB}</span>
      </div>

      <div>
        <span className="preview-label ">Age:</span>
        <span>{preview.age}</span>
      </div>
    </div >
  )
}

export default PersonalPreview