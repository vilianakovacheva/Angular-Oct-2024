export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface Geo {
    lat: string,
    lng: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcod: string,
    geo: Geo
}