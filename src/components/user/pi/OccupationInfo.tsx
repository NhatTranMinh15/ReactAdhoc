import { FieldErrors, useFieldArray } from 'react-hook-form';
import { FormDataType, OccupationDataType, OccupationType, FormProps, UserFormDataType, UserFormProps } from '../../../types/User'
import ErrorText from '../../ErrorText';

type Props = UserFormProps & {
}
const name = "occupations"
const baseOccuation: OccupationDataType = {
  fromDate: "",
  occupationType: OccupationType.UNEMPLOYED,
  toDate: "",
}
const OccupationInfo = ({ form }: Props) => {
  const { register, control, formState: { errors: err }, getValues } = form;
  const { fields, append, remove } = useFieldArray({ control, name });
  const errors: FieldErrors<UserFormDataType> = err
  
  function validateFromDate(value: string, formValues: UserFormDataType, index: number) {
    const from = new Date(value).valueOf();
    const now = new Date().valueOf();
    if (from > now) return "Invalid start date";
    const t = formValues.occupations.at(index)?.toDate;
    if (t === undefined) return true;
    const to = new Date(t).valueOf();
    if (from > to) return "Start date cannot be after end date";
    return true
  }

  function validateToDate(value: string, formValues: UserFormDataType, index: number) {
    const to = new Date(value).valueOf();
    const now = new Date().valueOf();
    if (to > now) return "Invalid end date";
    const f = formValues.occupations.at(index)?.toDate;
    if (f === undefined) return true;
    const from = new Date(f).valueOf();
    if (from > to) return "End date cannot be before start date";
    return true
  }

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Occupations</h3>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className='text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Occupation
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => remove(index)}>&times;</button>
            </legend>
            <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 md:col-span-2">
                <label htmlFor="occupationType" className="pi-label">Type</label>
                <select id="occupationType" className='pi-input' {...register(`${name}.${index}.occupationType`, { required: "Occupation type is required" })}>
                  {
                    Object.entries(OccupationType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.occupationType?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="fromDate" className="pi-label">Start Date</label>
                <input type="date" id="fromDate" className="pi-input" {...register(`${name}.${index}.fromDate`, { required: "Start date is required", validate: (value, formValues) => { return validateFromDate(value, formValues as UserFormDataType, index) } })} />
                <ErrorText error={errors[name] ? errors[name][index]?.fromDate?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="toDate" className="pi-label">End Date</label>
                <input type="date" id="toDate" className="pi-input" {...register(`${name}.${index}.toDate`, { validate: (value, formValues) => { return validateToDate(value, formValues as UserFormDataType, index) } })} />
                <ErrorText error={errors[name] ? errors[name][index]?.toDate?.message : ""} />
              </div>

            </div>
          </fieldset>
        ))
      }
      <div>
        <button type='button' className='button button-green' onClick={() => append(baseOccuation)}>Add Occupation</button>
      </div>
    </div>
  )
}

export default OccupationInfo