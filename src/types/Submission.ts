import { AddressType, AssetDataType, AssetType, ContactDataType, EmailDataType, EmailType, ExperienceInFinanceType, IDDataType, IDDocumentType, IncomeDataType, IncomeType, LiabilityDataType, LiabilityType, OccupationDataType, OccupationType, PhoneDataType, PhoneType, RiskToleranceType, SourceOfWealthDataType, SourceOfWealthType } from "./User";

export type Submission = {
    id: number,
    firstName: string,
    lastName: string,
    status: keyof typeof SubmissionStatus,
    createdAt: string
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

type Contact = Omit<ContactDataType, "addressType"> & {
    addressType: keyof typeof AddressType;
}

type Email = Omit<EmailDataType, "emailType"> & {
    emailType: keyof typeof EmailType;
}

type Phone = Omit<PhoneDataType, "phoneType"> & {
    phoneType: keyof typeof PhoneType;
}

type ID = Omit<IDDataType, "IDType"> & {
    IDType: keyof typeof IDDocumentType;
}

type Occupation = Omit<OccupationDataType, "occupationType"> & {
    occupationType: keyof typeof OccupationType;
}

type Income = Omit<IncomeDataType, "incomeType"> & {
    incomeType: keyof typeof IncomeType;
}

type Asset = Omit<AssetDataType, "assetType"> & {
    assetType: keyof typeof AssetType;
}

type Liability = Omit<LiabilityDataType, "liabilityType"> & {
    liabilityType: keyof typeof LiabilityType;
}

type SourceOfWealth = Omit<SourceOfWealthDataType, "sourceOfWealthType"> & {
    sourceOfWealthType: keyof typeof SourceOfWealthType;
}

