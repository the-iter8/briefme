import React from 'react';
import Text from '../components/Text';
import { dateParsed } from '../utils/DateTime';
// import { getUser } from '../utils/Firebase';
export default function NavbarQuote() {
  const { currentTime } = dateParsed;
  const timeDecide = currentTime < 12 ? 'morning' : 'evening';

  // getUser(user);
  return (
    <Text size='md' weight='semi-bold'>
      Good {timeDecide}, It's a fine day with you around.
    </Text>
  );
}
