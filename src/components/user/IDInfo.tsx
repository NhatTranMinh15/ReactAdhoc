import { useFieldArray } from 'react-hook-form';
import { IDDocumentType, UserFormProps } from '../../types/User'
import { useEffect } from 'react';

type Props = UserFormProps & {
}
const name = "ID"
const IDInfo = ({ errors, register, control }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "phones"
    });

    function removeFields(index: number) {
        if (fields.length > 1) {
            remove(index)
        }
    }

    useEffect(() => {
        append({ name: "phone" })
        return () => { remove(0) }
    }, [])
    return (
        <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Identification Documents</h3>
            <fieldset className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
                <legend className='dark:text-white text-lg font-medium'>Identification Document</legend>
                <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 md:col-span-2">
                        <label htmlFor="emailType" className="pi-label">Type</label>
                        <select name="emailType" id="emailType" className='pi-input' required >
                            {
                                Object.entries(IDDocumentType).map((type) => (
                                    <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="expiryDate" className="pi-label">Expiry Date</label>
                        <input type="date" name="expiryDate" id="expiryDate" className="pi-input" required />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="documentImage" className="pi-label">Upload Document</label>
                        <input type="file" name="documentImage" id="documentImage" className="pi-input file-input" required />
                    </div>

                </div>
            </fieldset>
            <div>
                <button type='button' className='button button-green'>Add Identification Document</button>
            </div>
        </div>
    )
}

export default IDInfo