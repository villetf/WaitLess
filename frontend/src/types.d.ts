export interface Park {
   name: string,
   logo: string
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