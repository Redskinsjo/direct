import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetSubscribedIndividuals } from "@/apollo/queries";

import { SigninAdmin } from "@/apollo/queries";
import { client } from "@/apollo";

const AdminData: React.FC = () => {
  const router = useRouter();

  const { data } = useQuery(GetSubscribedIndividuals);
  React.useEffect(() => {
    const checkAuth = async () => {
      const token = router.asPath.split("?")[1];
      const { data: signedIn } = await client.query({
        query: SigninAdmin,
        variables: {
          token,
        },
      });

      if (signedIn.signinAdmin.error) {
        router.push("/admin");
      }
    };
    checkAuth();
  }, []);
  return <></>;
};
export default AdminData;
