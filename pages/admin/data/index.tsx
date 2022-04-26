import React, { useState } from "react";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";

import { SigninAdmin } from "@/apollo/queries";
import { client } from "@/apollo";
import useRowsAndColumns from "@/components/useRowsAndColumns";

const AdminData: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { rows, columns } = useRowsAndColumns();

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
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return loading ? null : (
    <div className="flex justify-center items-center h-full">
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};
export default AdminData;
