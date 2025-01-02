import { useFieldArray, useWatch } from 'react-hook-form';
import { FormProps } from '../../../types/User'
import { useEffect } from 'react';
import { Preview } from '../../../types/Submission';

type Props = {
    preview: Preview
}
const NetWothPreview = ({ preview }: Props) => {
const {netWorth} = preview
    return (
        <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
            <h3 className="mb-4 text-xl font-semibold ">Net Worth</h3>
            <span className="preview-label">Total Net Worth:</span>
            <span>{netWorth}</span>
        </div>
    )
}

export default NetWothPreview