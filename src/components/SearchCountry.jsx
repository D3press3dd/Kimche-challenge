import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { motion } from 'framer-motion';

import useActive from '../hooks/useActive';
import useDebounce from '../hooks/useDebounce';

import IndividualCard from './IndividualCard';
import GET_COUNTRIES from '../graphql/getCountries';
import Spinner from './Spinner';

import {
  SearchContainer, LupaIcon, Search, GroupByContainer, GroupByTitle,
  GroupByButtonContainer, Button, CardContainer, NoResultsToShow, Error,
} from '../styled-components';

function SearchCountry() {
  const [query, setQuery] = useState('');
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [countries, setCountries] = useState([]);
  const { data, error, loading } = useQuery(GET_COUNTRIES);
  // custom hooks
  const { handleIsActive, isActive } = useActive();
  const queryDebounced = useDebounce(query, 500);

  const filterByName = (name) => {
    if (countries) {
      return countries.filter((country) => country
        .name.toLowerCase().includes(name));
    } return undefined;
  };

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
    setCountriesFiltered(filterByName(queryDebounced.toLowerCase()));
  }, [queryDebounced, data]);

  if (error) return <Error>{`${error.message} try again later`}</Error>;

  return (
    <>

      <SearchContainer
        as={motion.div}
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: -0 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}

      >
        <Search
          type="text"
          placeholder="Search a country"
          onChange={(e) => setQuery(e.target.value)}
        />
        <LupaIcon />
      </SearchContainer>

      <GroupByContainer>
        <GroupByTitle>Group by:</GroupByTitle>
        <GroupByButtonContainer>
          <Button
            onClick={handleIsActive}
            active={isActive.isContinent}
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
          >
            Continent
          </Button>
          <Button
            onClick={handleIsActive}
            active={isActive.isLanguage}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: -0 }}
            transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}

          >
            Language
          </Button>

        </GroupByButtonContainer>
      </GroupByContainer>

      <CardContainer>
        {
          countriesFiltered.length > 0
            ? countriesFiltered.map((country) => <IndividualCard key={`${country.code} ${country.name}`} country={{ ...country }} isActive={isActive} />)

            : (
              <NoResultsToShow
                as={motion.p}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -0 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                {loading ? <Spinner /> : 'Try looking something 😑'}

              </NoResultsToShow>
            )
        }

      </CardContainer>

    </>
  );
}

export default SearchCountry;
