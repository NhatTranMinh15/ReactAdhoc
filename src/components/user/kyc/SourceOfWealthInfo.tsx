import { useFieldArray } from 'react-hook-form';
import ErrorText from '../../ErrorText';
import { FormProps, KYCFormProps, SourceOfWealthDataType, SourceOfWealthType } from '../../../types/User';

type Props = KYCFormProps & {

}

const name = 'sourcesOfWealth'
const baseSourceOfWealth: SourceOfWealthDataType = {
  amount: "1",
  sourceOfWealthType: SourceOfWealthType.DONATION
}

const SourceOfWealthInfo = ({ form }: Props) => {
  const { register, control, formState: { errors }, getValues, setValue } = form;
  const { fields, append, remove } = useFieldArray({ control, name });

  function calculateTotal() {
    const values = getValues(name);
    let total = 0;
    values.forEach((item) => total += +item.amount)
    setValue("totalSourceOfWealth", total);
  }

  function removeField(index: number) {
    remove(index);
    calculateTotal();
  }

  function appendField(base: SourceOfWealthDataType) {
    append(base);
    calculateTotal();
  }

  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Sources of Wealth (D)</h3>
      <p className="text-sm mb-4 text-gray-600">
        This section identifies the origin of your wealth, such as any inheritance or donations you may have received. It's important for financial transparency.
      </p>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className=' text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Source of Wealth
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => removeField(index)}>&times;</button>
            </legend>

            <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="sourceOfWealthType" className="pi-label">Type</label>
                <select id="sourceOfWealthType" className='pi-input'  {...register(`${name}.${index}.sourceOfWealthType`, { required: "Income type is required" })}>
                  {
                    Object.entries(SourceOfWealthType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.sourceOfWealthType?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="amount" className="pi-label">Amount</label>
                <input type="number" id="amount" className="pi-input" placeholder="Enter amount" {...register(`${name}.${index}.amount`, { min: { value: 0, message: "Amount can not go below zero" }, onChange:calculateTotal })} />
                <ErrorText error={errors[name] ? errors[name][index]?.amount?.message : ""} />
              </div>

            </div>
          </fieldset>
        ))
      }

      <div className="my-3">
        <label htmlFor="totalSourceOfWealth" className="pi-label">Total Source of Wealth</label>
        <input type="string" readOnly id="totalSourceOfWealth" className="pi-input" placeholder="Total Source of Wealth" {...register(`totalSourceOfWealth`)} />
      </div>

      <div>
        <button type="button" className='button button-green' onClick={() => appendField(baseSourceOfWealth)}>Add Sources of Wealth</button>
      </div>
    </div>
  )
}

export default SourceOfWealthInfo