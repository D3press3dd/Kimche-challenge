/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import {
  Card, CardInfo, Language, Phone,
} from '../styled-components';

function IndividualCard({ country, isActive }) {
  const {
    name, capital, emoji, currency, phone, languages, continent,
  } = country;

  const { isContinent } = isActive;

  return (

    <div>

      <h2>{isContinent ? `${continent.name}` : `${languages?.[0]?.name === undefined ? 'No language' : languages?.[0].name}`}</h2>

      <Card
        as={motion.div}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}

      >

        <CardInfo>
          <h2>{`${emoji}`}</h2>
          <h2>{name}</h2>
        </CardInfo>

        <h3>
          Capital:
          <span>
            {' '}
            {capital}
          </span>
        </h3>
        <h3>
          {currency ? 'Currencies:' : 'Not Currencies found'}

          {' '}
          <span>{currency}</span>
        </h3>

        <Language>
          <h3>
            Languages:
          </h3>
          {languages?.map((language) => (
            <p key={`${language.name}`}>

              {language.name}

            </p>
          ))}
        </Language>

        <Phone>
          <p>{`Phone: +${phone}`}</p>
        </Phone>

      </Card>
    </div>
  );
}

export default IndividualCard;
