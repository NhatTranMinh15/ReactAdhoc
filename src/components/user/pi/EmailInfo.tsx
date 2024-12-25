import { useFieldArray } from 'react-hook-form';
import { AddressType, EmailDataType, EmailType, UserFormProps } from '../../../types/User'
import ErrorText from '../../ErrorText';

type Props = UserFormProps & {
}
const name = 'emails';
const baseEmail: EmailDataType = {
  preferred: 1,
  emailAddress: "",
  emailType: EmailType.WORK
}

const EmailInfo = ({ form }: Props) => {
  const { register, control, formState: { errors } } = form;

  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Emails</h3>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className='dark:text-white text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Emails
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => remove(index)}>&times;</button>
            </legend>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="emailAddress" className="pi-label">Email Address</label>
                <input type="email" id="emailAddress" className="pi-input" placeholder="Enter email address" {...register(`${name}.${index}.emailAddress`, { required: "Email address is required" })} />
                <ErrorText error={errors[name] ? errors[name][index]?.emailAddress?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="emailType" className="pi-label">Type</label>
                <select id="emailType" className='pi-input' {...register(`${name}.${index}.emailType`, { required: "Email type is required" })}>
                  {
                    Object.entries(EmailType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.emailType?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="preferred" className="pi-label">Preferred</label>
                <select id="preferred" className='pi-input' {...register(`${name}.${index}.preferred`, { required: "Preference type is required" })}>
                  <option value={1} className={"option-green"}>Yes</option>
                  <option value={0} className={"option-green"}>No</option>
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.preferred?.message : ""} />
              </div>
            </div>
          </fieldset>
        ))
      }
      <div>
        <button type='button' className='button button-green' onClick={() => append(baseEmail)}>Add Email</button>
      </div>
    </div>
  )
}

export default EmailInfo