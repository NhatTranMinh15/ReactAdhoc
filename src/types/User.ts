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
    IDType: string;
    expiryDate: string;
    attachment: File | null;
}
export type OccupationDataType = {
    occupationType: OccupationType;
    fromDate: string;
    toDate: string;
}

export type FormDataType = {
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

export type UserFormProps = {
    form: UseFormReturn<FormDataType, any, undefined>
}