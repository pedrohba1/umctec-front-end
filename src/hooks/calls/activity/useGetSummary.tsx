import { useQuery } from 'react-query';
import axios from '@api/axios';

type Summary = {
  totalCardsOk: number | string;
  totalCardsWarning: number | string;
  totalCardsDelayed: number | string;
};

const fetch = async (activityId: number) => {
  const { data } = await axios.get<Summary>(`/summary/${activityId}`);
  return data;
};

export default function getSummary(activityId: number) {
  return useQuery<Summary, Error>(
    ['get/summary', activityId],
    () => fetch(activityId),
    {
      refetchOnWindowFocus: false,
      enabled: !!activityId,
      initialData: {
        totalCardsOk: '...',
        totalCardsWarning: '...',
        totalCardsDelayed: '...'
      }
    }
  );
}
