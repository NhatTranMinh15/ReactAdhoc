import { AddressType, AssetDataType, AssetType, ContactDataType, EmailDataType, EmailType, ExperienceDataType, ExperienceInFinanceType, IDDataType, IDDocumentType, IncomeDataType, IncomeType, LiabilityDataType, LiabilityType, OccupationDataType, OccupationType, PhoneDataType, PhoneType, RiskToleranceType, SourceOfWealthDataType, SourceOfWealthType } from "./User";

export type Header = {
    name: string,
    value: string,
    isCurrentlySorted: boolean,
    colStyle: object,
    hiddenOnSmall: boolean
}
export type Contact = Omit<ContactDataType, "addressType"> & {
    addressType: keyof typeof AddressType;
}
export type Email = Omit<EmailDataType, "emailType"> & {
    emailType: keyof typeof EmailType;
}
export type Phone = Omit<PhoneDataType, "phoneType"> & {
    phoneType: keyof typeof PhoneType;
}
export type ID = Omit<IDDataType, "IDType"> & {
    IDType: keyof typeof IDDocumentType;
}
export type Occupation = Omit<OccupationDataType, "occupationType"> & {
    occupationType: keyof typeof OccupationType;
}
export type Income = Omit<IncomeDataType, "incomeType"> & {
    incomeType: keyof typeof IncomeType;
}
export type Asset = Omit<AssetDataType, "assetType"> & {
    assetType: keyof typeof AssetType;
}
export type Liability = Omit<LiabilityDataType, "liabilityType"> & {
    liabilityType: keyof typeof LiabilityType;
}
export type SourceOfWealth = Omit<SourceOfWealthDataType, "sourceOfWealthType"> & {
    sourceOfWealthType: keyof typeof SourceOfWealthType;
}

export type Preview = {
    firstName: string;
    lastName: string;
    middleName: string;
    DOB: string;
    age: number;
    contacts: Contact[];
    emails: Email[];
    phones: Phone[];
    IDs: ID[];
    occupations: Occupation[];

    incomes: Income[],
    assets: Asset[],
    liabilities: Liability[],
    totalLiability: number
    sourcesOfWealth: SourceOfWealth[],
    totalSourceOfWealth: number,
    experience: {
        riskTolerance: keyof typeof RiskToleranceType,
        experienceInFinance: keyof typeof ExperienceInFinanceType
    }
    // experience: ExperienceDataType,

    totalIncome: number
    totalAsset: number
    netWorth: number
}
export enum SubmissionStatus {
    ACTIVE = "Active",
    PENDING = "Pending",
    INACTIVE = "Inactive"
}
export enum SubmissionStatusColor {
    ACTIVE = "green",
    PENDING = "yellow",
    INACTIVE = "red"
}
export type Submission = {
    id: number,
    firstName: string,
    lastName: string,
    status: keyof typeof SubmissionStatus,
    createdAt: string
}
export const EmptySubmissionPage: PageResponse<Submission> = {
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