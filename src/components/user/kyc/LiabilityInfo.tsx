import { useFieldArray } from 'react-hook-form';
import { AssetType, FormProps, KYCFormProps, LiabilityDataType, LiabilityType } from '../../../types/User';
import ErrorText from '../../ErrorText';

type Props = KYCFormProps & {

}

const name = 'liabilities'
const baseAsset: LiabilityDataType = {
  amount: "1",
  liabilityType: LiabilityType.OTHERS
}

const LiabilityInfo = ({ form }: Props) => {
  const { register, control, formState: { errors }, setValue, getValues } = form;
  const { fields, append, remove } = useFieldArray({ control, name });

  function calculateTotal() {
    const values = getValues(name);
    let total = 0;
    values.forEach((item) => total += +item.amount)
    setValue("totalLiability", total);
  }
  function removeField(index: number) {
    remove(index);
    calculateTotal();
  }
  function appendField(base: LiabilityDataType) {
    append(base);
    calculateTotal();
  }
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Liabilities (C)</h3>
      <p className="text-sm mb-4 text-gray-600">
        Liabilities are any outstanding debts or obligations you may have. These can include loans such as personal loans, mortgages, or other forms of debt.
      </p>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className=' text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Liability
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => removeField(index)}>&times;</button>
            </legend>

            <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="liabilityType" className="pi-label">Type</label>
                <select id="liabilityType" className='pi-input'  {...register(`${name}.${index}.liabilityType`, { required: "Income type is required" })}>
                  {
                    Object.entries(AssetType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.liabilityType?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="amount" className="pi-label">Amount</label>
                <input type="number" min={1} id="amount" className="pi-input" placeholder="Enter amount" {...register(`${name}.${index}.amount`, { required: "Amount is required", min: { value: 1, message: "Amount can not go below one" }, onChange: calculateTotal })} />
                <ErrorText error={errors[name] ? errors[name][index]?.amount?.message : ""} />
              </div>

            </div>
          </fieldset>
        ))
      }

      <div className="my-3">
        <label htmlFor="totalLiability" className="pi-label">Total Liability</label>
        <input type="string" readOnly id="totalLiability" className="pi-input" placeholder="Total Liability" {...register(`totalLiability`)} />
      </div>

      <div>
        <button type="button" className='button button-green' onClick={() => appendField(baseAsset)}>Add Liability</button>
      </div>
    </div>
  )
}

export default LiabilityInfo

