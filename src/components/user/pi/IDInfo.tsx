import { useFieldArray } from 'react-hook-form';
import { IDDataType, IDDocumentType, FormProps } from '../../../types/User'
import ErrorText from '../../ErrorText';
import { useEffect } from 'react';

type Props = FormProps & {
}
const name = "IDs"
const baseID: IDDataType = {
  IDType: IDDocumentType.ID_CARD,
  expiryDate: "",
  attachment: null,
}
const IDInfo = ({ form }: Props) => {
  const { register, control, formState: { errors } } = form;

  const { fields, append, remove } = useFieldArray({ control, name });
  function removeFields(index: number) {
    if (fields.length > 1) {
      remove(index)
    }
  }

  useEffect(() => {
    if (fields.length === 0) {
      append(baseID)
      return () => { remove(0) }
    }
  }, [])

  return (
    <div className='p-3 border border-zinc-200 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold">Identification Documents</h3>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 my-3 rounded-lg'>
            <legend className='text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Identification Document
              {
                index !== 0 &&
                <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => removeFields(index)}>&times;</button>
              }
            </legend>
            <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 md:col-span-2">
                <label htmlFor="IDType" className="pi-label">Type</label>
                <select id="IDType" className='pi-input' {...register(`${name}.${index}.IDType`, { required: "Identification type is required" })}>
                  {
                    Object.entries(IDDocumentType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.IDType?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="expiryDate" className="pi-label">Expiry Date</label>
                <input type="date" id="expiryDate" className="pi-input" {...register(`${name}.${index}.expiryDate`, { required: "Expiry date is required" })} />
                <ErrorText error={errors[name] ? errors[name][index]?.expiryDate?.message : ""} />
              </div>


              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="attachment" className="pi-label">Upload Document</label>
                <input type="file" id="attachment" className="pi-input file-input"  {...register(`${name}.${index}.attachment`, { required: "Document attachment is required" })} />
                <ErrorText error={errors[name] ? errors[name][index]?.attachment?.message : ""} />
              </div>

            </div>
          </fieldset>
        ))
      }
      <div>
        <button type='button' className='button button-green' onClick={() => append(baseID)}>Add Identification Document</button>
      </div>
    </div>
  )
}

export default IDInfo