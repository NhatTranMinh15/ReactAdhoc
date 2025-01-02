import { Preview } from '../../../types/Preview';


type Props = {
  preview: Preview
}

const AssetPreview = ({ preview }: Props) => {
  const { assets } = preview
  return (
    <div className='p-3 border border-zinc-200 dark:border-gray-700 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold ">Assets (B)</h3>
      {
        assets.map((asset, index) => (
          <fieldset key={asset.assetType} className='preview-fieldset'>
            <legend className='preview-legend'>{`Asset #${index + 1}`}</legend>
            <div>
              <span className='preview-label'>Type:</span>
              <span>{asset.assetType}</span>
            </div>
            <div>
              <span className='preview-label'>Amount:</span>
              <span>{asset.amount}</span>
            </div>
          </fieldset>
        ))
      }
    </div>
  )
}

export default AssetPreview