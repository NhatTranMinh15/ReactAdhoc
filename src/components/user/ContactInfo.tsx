import { useEffect } from 'react';
import { AddressType, UserFormProps } from '../../types/User'
import { useFieldArray } from 'react-hook-form';

type Props = UserFormProps & {
}
const name = "contacts"
const ContactInfo = ({ errors, register, control }: Props) => {
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
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Contact information</h3>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className='dark:text-white text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Address
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => removeFields(index)}>&times;</button>
            </legend>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="pi-label">Country</label>
                <input type="text" id="country" className="pi-input" placeholder="Enter country" {...register(`${name}.${index}.country`, { required: "Country is required" })} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="city" className="pi-label">City</label>
                <input type="text" id="city" className="pi-input" placeholder="Enter city" {...register(`${name}.${index}.city`, { required: "City is required" })} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="street" className="pi-label">Street</label>
                <input type="text" id="street" className="pi-input" placeholder="Enter street" {...register(`${name}.${index}.street`, { required: "Street is required" })} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="postalCode" className="pi-label">Postal Code</label>
                <input type="text" id="postalCode" className="pi-input" placeholder="Enter postal code" {...register(`${name}.${index}.postalCode`)} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="addressType" className="pi-label">Type</label>
                <select id="addressType" className='pi-input' required  {...register(`${name}.${index}.addressType`, { required: "Address Type is required" })}>
                  {
                    Object.entries(AddressType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
              </div>
            </div>
          </fieldset>
        ))
      }
      <div>
        <button type="button" className='button button-green' onClick={() => append({ name })}>Add Address</button>
      </div>
    </div>
  )
}

export default ContactInfo