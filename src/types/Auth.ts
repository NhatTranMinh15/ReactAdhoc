export type LoginType = {
    username: string;
    password: string;
    remember: boolean
}

export type Token = {
    accessToken: string;
    refreshToken: string;
    email: string;
    id: number;
    username: string;
};

export type AuthContextValue = {
    isLoggedIn: boolean;
    user: UserDetail | null,
    login: (data: LoginType) => Promise<void>;
    logout: () => void;
}

type Address = {
    address: string;
    city: string;
    state: string;
    coordinates: { lat: number, lng: number },
    country: string,
    stateCode: string;
    postalCode: string;
};

type Bank = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
};

type Company = {
    department: string;
    name: string;
    title: string;
    address: Address;
};

type Crypto = {
    coin: string;
    wallet: string;
    network: string;
};

type Hair = {
    color: string;
    type: string;
};

export type UserDetail = {
    id: number;
    username: string;
    address: Address;
    age: number;
    bank: Bank;
    birthDate: string;
    bloodGroup: string;
    company: Company;
    crypto: Crypto;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: Hair;
    height: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    role: string;
    ssn: string;
    university: string;
    userAgent: string;
    weight: number;
};
