"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
  namaIndicator: string;
  idIndicator: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  namaIndicator,
  idIndicator,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${namaIndicator}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${namaIndicator}/{${idIndicator}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${namaIndicator}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${namaIndicator}/{${idIndicator}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${namaIndicator}/{${idIndicator}}`}
      />
    </>
  );
};
