import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Link from "next/link";

const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      emoji
      code
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
    <div className="grid grid-cols-3 gap-4 p-3 m-5">
      {countries.map((country: any) => (
        <div
          key={country.id}
          className="flex justify-center rounded-md border-2 border-stone-300 "
        >
          <Link href={`/country/${country.code}`}>
            <h1 className="text-2xl ">{country.name}</h1>
            <h2 className="text-base ">{country.continent.name}</h2>
            <p className="text-2xl">{country.emoji}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
