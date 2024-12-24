import { UseFormRegister, FieldValues, FieldErrors, Control, useFieldArray } from 'react-hook-form';

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

export type UserFormProps = {
      register: UseFormRegister<FieldValues>;
      errors: FieldErrors<FieldValues>;
      control: Control<FieldValues, any>;
}