import { Attraction } from '../types';

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchAttractions = async(parkId: string) => {
   const res = await fetch(`${apiUrl}/api/v1/attractions?park=${parkId}`);
   if (!res.ok) {
      throw new Error(`Attraktioner kunde inte hämtas (felkod ${res.status}).`);
   }
   return res.json();
};

const headers = {
   'Content-Type': 'application/json'
};

export const fetchMetricsToSearch = async(parkId: string, chosenAttractions: Attraction[], startDate: Date, endDate: Date) => {
   const body = JSON.stringify({
      park: parkId,
      attractionIds: chosenAttractions.map((attraction) => attraction.id),
      startDate: startDate,
      endDate: endDate
   });

   const res = await fetch(`${apiUrl}/api/v1/queueForecast/metricsToSearch`, {
      method: 'POST',
      headers: headers,
      body: body
   });

   return res.json();
};

export const fetchQueueForecast = async(parkId: string, chosenAttractions: Attraction[], startDate: Date, endDate: Date) => {
   const body = JSON.stringify({
      park: parkId,
      attractionIds: chosenAttractions.map((attraction) => attraction.id),
      startDate: startDate,
      endDate: endDate
   });

   const res = await fetch(`${apiUrl}/api/v1/queueForecast`, {
      method: 'POST',
      headers: headers,
      body: body
   });

   if (!res.ok) {
      throw new Error(`Köprognos kunde inte genereras (felkod ${res.status}).`);
   }

   return res.json();
};

export const fetchParks = async() => {
   const res = await fetch(`${apiUrl}/api/v1/parks/`);
   if (!res.ok) {
      throw new Error(`Parker kunde inte hämtas (felkod ${res.status}).`);
   }
   return res.json();
};