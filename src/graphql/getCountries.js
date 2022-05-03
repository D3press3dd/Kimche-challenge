import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
query countries{
  countries{
    code
    name
    native
    capital
    emoji
    currency
    phone
    languages{
      name
      native
    }
    continent{
      name
      code
    }
  }
}`;

export default GET_COUNTRIES;
