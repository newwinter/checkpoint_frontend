import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_COUNTRY_DETAILS = gql`
  query Query($code: String!) {
    country(code: $code) {
      code
      continent {
        name
      }
      name
      emoji
    }
  }
`;

export default function CountryDetails() {
  const router = useRouter();
  const { code } = router.query;

  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur :(</p>;

  return (
    <div>
      <h1>{data.country.name}</h1>
      <p>{data.country.continent.name}</p>
      <p>Code : {data.country.code}</p>
      <p>{data.country.emoji}</p>
    </div>
  );
}
