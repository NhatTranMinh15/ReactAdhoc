import { useFieldArray } from 'react-hook-form';
import { PhoneType, UserFormProps } from '../../types/User'
import { useEffect } from 'react';

type Props = UserFormProps & {
}
const name = "phones"
const PhoneInfo = ({ errors, register, control }: Props) => {

  const { fields, append, remove } = useFieldArray({ control, name });

  function removeFields(index: number) {
    if (fields.length > 1) { remove(index); }
  }

  useEffect(() => {
    append({ name });
    return () => { remove(0); }
  }, [])

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Phones</h3>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className='dark:text-white text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Phone
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => removeFields(index)}>&times;</button>
            </legend>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phoneNumber" className="pi-label">Phone Number</label>
                <input type="tel" id="phoneNumber" className="pi-input" placeholder="Enter phone number"  {...register(`${name}.${index}.phoneNumber`, { pattern: /^[0-9]{10}$/, required: "Phone number is required" })} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="emailType" className="pi-label">Type</label>
                <select id="emailType" className='pi-input' {...register(`${name}.${index}.emailType`, { required: "Email type is required" })}>
                  {
                    Object.entries(PhoneType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>

              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="addressType" className="pi-label">Preferred</label>
                <select id="addressType" className='pi-input' {...register(`${name}.${index}.addressType`, { required: "Address type is required" })}>
                  <option value={1} className={"option-green"}>Yes</option>
                  <option value={0} className={"option-green"}>No</option>
                </select>
              </div>
            </div>
          </fieldset>

        ))
      }
      <div>
        <button type='button' className='button button-green' onClick={() => append({ name })}>Add Phone</button>
      </div>
    </div>
  )
}

export default PhoneInfo