export type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & React.RefAttributes<SVGSVGElement>
export type IconProps = IconSVGProps & {
    title?: string
    titleId?: string
}

export type Icon = React.FC<IconProps>

export type MenuItem = {
    id: string,
    name: string;
    link: string;
    icon: string | Icon;
    adminOnly: boolean;
}

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