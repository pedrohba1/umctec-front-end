import { useQuery } from 'react-query';
import { useState } from 'react';
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

export default function getCards(activityId: number, filter: string) {
  const [checkedArr, setChecked] = useState<boolean[]>([]);

  const fetch = async (id: number, param: string) => {
    const { data } = await axios.get<Cards>(`/cards/${id}`, {
      params: {
        filter: param
      }
    });
    const checkboxes = data.cards.map(() => false);
    setChecked(checkboxes);
    return data;
  };

  const cardsQuery = useQuery<Cards, Error>(
    ['get/cards', activityId, filter],
    () => fetch(activityId, filter),
    {
      refetchOnWindowFocus: false,
      enabled: !!activityId
    }
  );
  return { cardsQuery, checkedArr, setChecked };
}
