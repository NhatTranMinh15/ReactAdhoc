import { Breadcrumb } from 'flowbite-react'
import { BreadcrumbType } from '../types/General'
import { Link } from 'react-router-dom'

type Props = {
    data: BreadcrumbType[],
    className?: string
}

const page = ({ data, className }: Props) => {
    return (
        <Breadcrumb className={className}>
            {
                data.map((b, index) => (
                    <Breadcrumb.Item key={`${b.name}-${index}`} icon={b.icon}>
                        <Link to={b.href}>{b.name}</Link>
                    </Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    )
}

export default page