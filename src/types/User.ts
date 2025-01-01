import { UseFormReturn } from 'react-hook-form';

export enum AddressType {
    MAILING = "Mailing",
    WORK = "Work"
}

export enum EmailType {
    PERSONAL = "Personal",
    WORK = "Work"
}

export enum PhoneType {
    PERSONAL = "Personal",
    WORK = "Work"
}

export enum IDDocumentType {
    ID_CARD = "National ID Card",
    PASSPORT = "Passport",
    DRIVER_LICENSE = "Driver License"
}

export enum OccupationType {
    UNEMPLOYED = "Unemployed",
    ENGINEER = "Engineer",
    TEACHER = "Teacher",
    DOCTOR = "Doctor",
    OTHERS = "Others"
}

export type ContactDataType = {
    country: string;
    city: string;
    street: string;
    postalCode: string;
    addressType: AddressType;
}

export type EmailDataType = {
    emailAddress: string;
    emailType: EmailType;
    preferred: number;
}

export type PhoneDataType = {
    phoneNumber: string;
    phoneType: PhoneType;
    preferred: number;
}
export type IDDataType = {
    IDType: IDDocumentType;
    expiryDate: string;
    attachment: File | null;
}
export type OccupationDataType = {
    occupationType: OccupationType;
    fromDate: string;
    toDate: string;
}

export type UserFormDataType = {
    firstName: string;
    lastName: string;
    middleName: string;
    DOB: string;
    age: number;
    contacts: ContactDataType[];
    emails: EmailDataType[];
    phones: PhoneDataType[];
    IDs: IDDataType[];
    occupations: OccupationDataType[];
}

export enum IncomeType {
    SALARY = "Salary",
    INVESTMENT = "Investment",
    OTHERS = "Others"
}
export enum AssetType {
    BOND = "Bond",
    LIQUIDITY = "Liquidity",
    REAL_ESTATE = "Real Estate",
    OTHERS = "Others"
}

export enum LiabilityType {
    PERSONAL_LOAN = "Personal Loan",
    REAL_ESTATE_LOAN = "Real Estate Loan",
    OTHERS = " Others"
}
export enum SourceOfWealthType {
    INHERITANCE = 'Inheritance',
    DONATION = "Donation"
}
export enum ExperienceInFinanceType {
    BELOW_FIVE = '< 5 years',
    BELOW_TEN = "> 5 and < 10 years",
    ABOVE_TEN = "> 10 years"
}
export enum RiskToleranceType {
    TEN_PERCENT = '10%',
    THIRTY_PERCENT = '30%',
    ALL_IN = 'All-in',
}
export type IncomeDataType = {
    incomeType: IncomeType;
    amount: string;
}
export type AssetDataType = {
    assetType: AssetType;
    amount: string;
}
export type LiabilityDataType = {
    liabilityType: LiabilityType;
    amount: string;
}
export type SourceOfWealthDataType = {
    sourceOfWealthType: SourceOfWealthType;
    amount: string;
}
export type ExperienceDataType = {
    riskTolerance: RiskToleranceType,
    experienceInFinance: ExperienceInFinanceType
}
export type KYCFormDataType = {
    incomes: IncomeDataType[],
    assets: AssetDataType[],
    liabilities: LiabilityDataType[],
    totalLiability: number
    sourcesOfWealth: SourceOfWealthDataType[],
    totalSourceOfWealth: number,
    experience: ExperienceDataType

    totalIncome: number
    totalAsset: number
    netWorth: number
}

export type FormDataType = UserFormDataType & KYCFormDataType

export type FormProps = {
    form: UseFormReturn<FormDataType, any, undefined>
}


