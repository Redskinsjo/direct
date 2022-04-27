import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GetSubscribedIndividuals } from '@/apollo/queries';

import { columns } from './columns';

const useRowsAndColumns = () => {
  const { data } = useQuery(GetSubscribedIndividuals);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data?.users) {
      const users = data.users.map((u: any) => {
        const copy = { ...u };
        copy.id = copy._id;
        delete copy._id;
        console.log(copy);
        return {
          ...copy,
        };
      });
      setRows(users);
      setLoading(false);
    }
  }, [data?.users]);

  if (!loading) return { rows, columns };
  return { rows, columns };
};
export default useRowsAndColumns;
