export interface Park {
   id: string,
   name: string,
   city: string,
   country: string,
   logoUrl: string
}

export interface Attraction {
   id: number,
   name: string,
   buildYear: number,
   manufacturer: string,
   childAttraction: boolean,
   height: number,
   railLength: number,
   rideTime: number,
   maxSpeed: number,
   status: string,
   latitude: number,
   longitude: number,
}

export interface Forecast {
   days: ForecastDay[]
}

export interface ForecastDay {
   date: Date,
   average: number
}