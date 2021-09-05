import { useQuery } from 'react-query';
import axios from '@api/axios';

export type Card = {
  daysSinceCreated: number;
  id: number;
  visitId: string;
  billId: string;
  billType: string;
  totalAmount: number;
  numberOfPendencies: number;
  numberOfOpenPendencies: number;
  numberOfDocuments: number;
  numberOfNotReceivedDocuments: number;
  numberOfChecklistItems: number;
  numberOfDoneChecklistItems: number;
  createdAt: string;
  updatedAt: string;
  activityId: number;
  insuranceId: number;
  patientId: number;
  patient: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  insurance: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  slaStatus: string;
};

type Cards = {
  cards: Card[];
  pageInfo: {
    page: number;
    perPage: number;
  };
};

const fetch = async (activityId: number, filter: string) => {
  const { data } = await axios.get<Cards>(`/cards/${activityId}`, {
    params: {
      filter
    }
  });
  return data;
};

export default function getCards(activityId: number, filter: string) {
  return useQuery<Cards, Error>(
    ['get/cards', activityId, filter],
    () => fetch(activityId, filter),
    {
      refetchOnWindowFocus: false,
      enabled: !!activityId
    }
  );
}
