import { useQuery } from 'react-query';
import axios from '@api/axios';

type Summary = {
  total: number;
  totalCardsOk: number;
  totalCardsWarning: number;
  totalCardsDelayed: number;
};

const fetch = async (activityId: number) => {
  const { data } = await axios.get<Summary>(`/summary/${activityId}`);
  const { totalCardsDelayed, totalCardsOk, totalCardsWarning } = data;
  data.total = totalCardsDelayed + totalCardsOk + totalCardsWarning;
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
        total: null,
        totalCardsOk: null,
        totalCardsWarning: null,
        totalCardsDelayed: null
      }
    }
  );
}
