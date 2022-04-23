import React from "react";
import { useQuery } from "@apollo/client";
import { GetSubscribedIndividuals } from "@/apollo/queries";

const Admin: React.FC = () => {
  const { data } = useQuery(GetSubscribedIndividuals);
  return <></>;
};
export default Admin;
