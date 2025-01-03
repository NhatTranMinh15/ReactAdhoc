export type Header = {
    name: string,
    value: string,
    isCurrentlySorted: boolean,
    colStyle: object,
    hiddenOnSmall: boolean
}

export type BreadcrumbType = {
    href: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined,
    name: string,
}

export const EmptyPage = {
    datas: [],
    total: 0,
    skip: 0,
    limit: 0
}

export type PageResponse<T> = {
    datas: T[],
    total: number,
    skip: number,
    limit: number,
}