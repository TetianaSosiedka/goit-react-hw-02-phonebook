import PropTypes from 'prop-types';

import { ContactsItem } from 'components/ContactsItem';

export const ContactList = ({ dates }) => {
  return (
    <ul>
      {dates.map(item => (
        <ContactsItem key={item.id} name={item.name} number={item.number} />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  dates: PropTypes.array,
};
