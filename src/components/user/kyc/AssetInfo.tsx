import { useFieldArray } from 'react-hook-form';
import { AssetDataType, AssetType, FormProps, KYCFormProps } from '../../../types/User';
import ErrorText from '../../ErrorText';

type Props = KYCFormProps & {

}

const name = 'assets'
const baseAsset: AssetDataType = {
  amount: "1",
  assetType: AssetType.OTHERS
}

const AssetInfo = ({ form }: Props) => {
  const { register, control, formState: { errors }, setValue, getValues } = form;
  const { fields, append, remove } = useFieldArray({ control, name });

  function calculateTotal() {
    const values = getValues(name);
    let total = 0;
    values.forEach((item) => total += +item.amount)
    setValue("totalAsset", total);
  }
  function removeField(index: number) {
    remove(index);
    calculateTotal();
  }
  function appendField(base: AssetDataType) {
    append(base);
    calculateTotal();
  }
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Assets (B)</h3>
      {
        fields.map((field, index) => (
          <fieldset key={field.id} className='p-3 border border-zinc-200 dark:border-gray-700 my-3 rounded-lg'>
            <legend className=' text-lg font-medium border border-zinc-200 rounded-lg px-3'>
              Asset
              <button type="button" className='ps-3 font-bold hover:text-red-600' onClick={() => removeField(index)}>&times;</button>
            </legend>

            <div className="grid grid-cols-6 gap-6">


              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="assetType" className="pi-label">Type</label>
                <select id="assetType" className='pi-input'  {...register(`${name}.${index}.assetType`, { required: "Asset type is required" })}>
                  {
                    Object.entries(AssetType).map((type) => (
                      <option key={type[0]} value={type[0]} className={"option-green"}>{type[1]}</option>
                    ))
                  }
                </select>
                <ErrorText error={errors[name] ? errors[name][index]?.assetType?.message : ""} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="amount" className="pi-label">Amount</label>
                <input type="number" min={1} id="amount" className="pi-input" placeholder="Enter amount" {...register(`${name}.${index}.amount`, { min: { value: 1, message: "Amount can not go below one" }, onChange: calculateTotal })} />
                <ErrorText error={errors[name] ? errors[name][index]?.amount?.message : ""} />
              </div>

            </div>
          </fieldset>
        ))
      }
      <div>
        <button type="button" className='button button-green' onClick={() => appendField(baseAsset)}>Add Asset</button>
      </div>
    </div>
  )
}

export default AssetInfo