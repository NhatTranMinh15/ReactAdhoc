import { UserDetail } from "./Auth"
import { AddressType, AssetDataType, AssetType, ContactDataType, EmailDataType, EmailType, ExperienceDataType, ExperienceInFinanceType, IDDataType, IDDocumentType, IncomeDataType, IncomeType, KYCFormDataType, LiabilityDataType, LiabilityType, OccupationDataType, OccupationType, PhoneDataType, PhoneType, RiskToleranceType, SourceOfWealthDataType, SourceOfWealthType, UserFormDataType } from "./User"

export type Header = {
    name: string,
    value: string,
    isCurrentlySorted: boolean,
    colStyle: object,
    hiddenOnSmall: boolean
}

export type BriefPreview = {
    id: string,
    body: string,
    postId: number,
    likes: number,
    user: {
        id: number,
        username: string,
        fullName: string
    }
}
export type PreviewList = {
    comments: BriefPreview[];
    total: number;
    skip: number;
    limit: number
}

export const emptyPreviewPage: PreviewList = {
    comments: [],
    total: 0,
    skip: 0,
    limit: 0
}

export type Preview = {
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

export const samplePreview: Preview = {
    firstName: "Michael",
    middleName: "Palme",
    lastName: "Williams",
    age: 35,
    assets: [
        {
            amount: "1000000000",
            assetType: AssetType.REAL_ESTATE
        }
    ],
    contacts: [
        {
            addressType: AddressType.WORK,
            city: "Houston",
            country: "United States",
            postalCode: "38807",
            street: "385 Fifth Street"
        },
        {
            country: "Vietnam",
            city: "HCM",
            postalCode: "700001",
            street: "CMT8",
            addressType: AddressType.MAILING
        }
    ],
    DOB: "1990-01-02",
    phones: [
        {
            phoneNumber: "0123456789",
            preferred: "Yes",
            phoneType: PhoneType.WORK
        },
        {
            phoneNumber: "0987654321",
            preferred: "Yes",
            phoneType: PhoneType.PERSONAL
        }
    ],
    emails: [
        {
            preferred: "Yes",
            emailAddress: "admin@mail.com",
            emailType: EmailType.WORK
        },
        {
            preferred: "No",
            emailAddress: "user2@taskmanagenow.com",
            emailType: EmailType.PERSONAL
        }
    ],
    experience: {
        experienceInFinance: ExperienceInFinanceType.BELOW_FIVE,
        riskTolerance: RiskToleranceType.TEN_PERCENT
    },
    IDs: [
        {
            IDType: IDDocumentType.ID_CARD,
            expiryDate: "2030-01-02",
            attachment: new File([], "")
        }
    ],
    incomes: [
        {
            amount: "10000000",
            incomeType: IncomeType.SALARY
        }
    ],
    liabilities: [
        {
            amount: "100000",
            liabilityType: LiabilityType.REAL_ESTATE_LOAN
        }
    ],
    netWorth: 1010100000,
    occupations: [
        {
            fromDate: "2015-01-02",
            occupationType: OccupationType.ENGINEER,
            toDate: "2020-01-02"
        },
        {
            fromDate: "2020-01-02",
            occupationType: OccupationType.TEACHER,
            toDate: "2025-01-01"
        }
    ],
    sourcesOfWealth: [],
    totalAsset: 1000000000,
    totalIncome: 10000000,
    totalLiability: 100000,
    totalSourceOfWealth: 0
}