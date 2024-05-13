import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const { loading, error } = useQuery(GET_ALL_COUNTRIES, {
    onCompleted: (data) => {
      setCountries(data.countries);
    },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur :(</p>;

  return (
    <div>
      {countries.map((country: any) => (
        <div>
          <h1 className="text-2xl ">{country.name}</h1>
          <h2 className="text-base ">{country.continent.name}</h2>
          <p className="text-2xl">{country.emoji}</p>
        </div>
      ))}
    </div>
  );
}
