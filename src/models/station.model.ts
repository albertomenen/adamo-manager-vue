export interface StationCreate {
  station_name: string,
  placed: string,
  installation_date: string | Date | null,
}

export interface StationUpdate {
  station_name: string,
}
