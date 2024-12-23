import { OccupationType } from '../../types/User'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

type Props = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>
}

const OccupationInfo = ({ errors, register }: Props) => {
    return (
        <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Occupations</h3>
            <fieldset className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
                <legend className='dark:text-white text-lg font-medium'>Occupation</legend>
                <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 md:col-span-2">
                        <label htmlFor="emailType" className="pi-label">Type</label>
                        <select name="emailType" id="emailType" className='pi-input' required>
                            {
                                Object.entries(OccupationType).map((type) => (
                                    <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="fromDate" className="pi-label">From Date</label>
                        <input type="date" name="fromDate" id="fromDate" className="pi-input" required />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="toDate" className="pi-label">To Date</label>
                        <input type="date" name="toDate" id="toDate" className="pi-input" required />
                    </div>

                </div>
            </fieldset>
            <div>
                <button type='button' className='button button-green'>Add Occupation</button>
            </div>
        </div>
    )
}

export default OccupationInfo