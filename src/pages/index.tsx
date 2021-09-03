import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Activities() {
  const router = useRouter();
  useEffect(() => {
    router.push('/activities');
  });

  return <> </>;
}
