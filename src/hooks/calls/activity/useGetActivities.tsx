import { useQuery } from 'react-query';
import axios from '@api/axios';

type Activities = {
  id: number;
  title: string;
  subtitle: string;
  sla: number;
  createdAt: Date;
  updatedAt: Date;
}[];

const fetch = async () => {
  const { data } = await axios.get<Activities>(`/activities`, {
    params: { page: 1, pageSize: 10 }
  });
  return data.map((activity) => ({
    value: activity,
    label: activity.title
  }));
};

export default function getActivities() {
  return useQuery('get/activities', () => fetch());
}
