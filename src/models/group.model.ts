export interface GroupCreate {
  id_system: string
  group_name: string
  address: string
  city: string
  town: string
  phone: string
  contact_name: string
  email: string
  country: string
}

export interface LocationCreate {
  location_name: string
  address: string
  city: string
  town: string
  phone: string
  contact_name: string
  email: string
  country: string
}

export interface FormsGroupLocation {
  formGroup: GroupCreate,
  formLocation: LocationCreate
}
