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
  bill: {
    id: number;
    account: string;
    attendance: string;
    shipping: string;
    batch: string;
    billType: string;
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

export default function getCards(
  activityId: number,
  filter: string,
  page: number
) {
  const [checkedArr, setChecked] = useState<boolean[]>([]);

  const fetch = async (id: number, param: string, pageNumber: number) => {
    const { data } = await axios.get<Cards>(`/cards/${id}`, {
      params: {
        page: pageNumber,
        perPage: 9,
        filter: param
      }
    });
    const checkboxes = data.cards.map(() => false);
    setChecked(checkboxes);
    return data;
  };

  const cardsQuery = useQuery<Cards, Error>(
    ['get/cards', activityId, filter, page],
    () => fetch(activityId, filter, page),
    {
      refetchOnWindowFocus: false,
      enabled: !!activityId && !!page
    }
  );
  return { cardsQuery, checkedArr, setChecked };
}
