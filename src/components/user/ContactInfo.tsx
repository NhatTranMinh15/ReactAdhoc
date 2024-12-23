import { AddressType } from '../../types/User'
import { UseFormRegister, FieldValues, FieldErrors, Control, useFieldArray } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}

const ContactInfo = ({ errors, register, control }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Contact"
  });

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Contact information</h3>
      <fieldset className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
        <legend className='dark:text-white text-lg font-medium'>Address</legend>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="country" className="pi-label">Country</label>
            <input type="text" id="country" className="pi-input" placeholder="Enter country" required {...register("country", { required: "Country is required" })} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="city" className="pi-label">City</label>
            <input type="text" name="city" id="city" className="pi-input" placeholder="Enter city" required />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="street" className="pi-label">Street</label>
            <input type="text" name="street" id="street" className="pi-input" placeholder="Enter street" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="portalCode" className="pi-label">Postal Code</label>
            <input type="text" name="portalCode" id="portalCode" className="pi-input" placeholder="Enter postal code" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="addressType" className="pi-label">Type</label>
            <select name="addressType" id="addressType" className='pi-input' required>
              {
                Object.entries(AddressType).map((type) => (
                  <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                ))
              }
            </select>
          </div>
        </div>
      </fieldset>
      <div>
        <button type='button' className='button button-green'>Add Address</button>
      </div>
    </div>
  )
}

export default ContactInfo