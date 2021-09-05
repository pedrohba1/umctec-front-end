import { useQuery } from 'react-query';
import axios from '@api/axios';
import { useState } from 'react';

export type Activity = {
  id: number;
  title: string;
  subtitle: string;
  sla: number;
  createdAt: Date;
  updatedAt: Date;
};

type Activities = Activity[];

type FnData = {
  label: string;
  value: Activity;
}[];

export default function getActivities() {
  const [selectedAct, setAct] =
    useState<{ label: string; value: Activity }>(undefined);

  const fetch = async () => {
    const { data } = await axios.get<Activities>(`/activities`, {
      params: { page: 1, pageSize: 10 }
    });
    const res = data.map((act) => ({
      value: act,
      label: act.title
    }));
    setAct(res[0]);
    return res;
  };
  const ActivityQuery = useQuery<FnData, Error>(
    'get/activities',
    () => fetch(),
    {
      refetchOnWindowFocus: false
    }
  );

  return { ActivityQuery, selectedAct, setAct };
}
