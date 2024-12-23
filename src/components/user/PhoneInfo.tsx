import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { PhoneType } from '../../types/User'

type Props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>
}

const PhoneInfo = ({ errors, register }: Props) => {
    return (
        <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Phones</h3>
            <fieldset className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
                <legend className='dark:text-white text-lg font-medium'>Phone</legend>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phoneNumber" className="pi-label">Phone Number</label>
                        <input type="tel" name="phoneNumber" id="phoneNumber" className="pi-input" placeholder="Enter phone number" required pattern="[0-9]{10}" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="emailType" className="pi-label">Type</label>
                        <select name="emailType" id="emailType" className='pi-input' required>
                            {
                                Object.entries(PhoneType).map((type) => (
                                    <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                                ))
                            }
                        </select>

                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="addressType" className="pi-label">Preferred</label>
                        <select name="addressType" id="addressType" className='pi-input' required>
                            <option value={1} className={"option-green"}>Yes</option>
                            <option value={0} className={"option-green"}>No</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            <div>
                <button type='button' className='button button-green'>Add Phone</button>
            </div>
        </div>
    )
}

export default PhoneInfo