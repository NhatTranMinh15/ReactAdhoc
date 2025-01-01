import { useFieldArray, useWatch } from 'react-hook-form';
import { FormProps } from '../../../types/User'
import { useEffect } from 'react';

type Props = FormProps & {

}
const name = "netWorth"
const NetWothInfo = ({ form }: Props) => {
    const { register, control, setValue } = form;

    const totalAsset = useWatch({ control, name: 'totalAsset' });
    const totalIncome = useWatch({ control, name: 'totalIncome' });
    const totalLiability = useWatch({ control, name: 'totalLiability' });
    const totalSourceOfWealth = useWatch({ control, name: 'totalSourceOfWealth' });

    useEffect(() => {
        const total = (totalAsset ? totalAsset : 0)
            + (totalIncome ? totalIncome : 0)
            + (totalLiability ? totalLiability : 0)
            + (totalSourceOfWealth ? totalSourceOfWealth : 0);
        setValue(name, total);
    }, [totalAsset, totalIncome, totalLiability, totalSourceOfWealth]);

    return (
        <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
            <h3 className="mb-4 text-xl font-semibold ">Net Worth</h3>
            <label htmlFor="netWorth" className="pi-label">Total</label>
            <input type="string" readOnly id="netWorth" className="pi-input" placeholder="Net Worth" {...register(`netWorth`, { value: 0 })} />
        </div>
    )
}

export default NetWothInfo