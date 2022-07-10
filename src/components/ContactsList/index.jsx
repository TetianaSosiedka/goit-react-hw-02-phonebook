import PropTypes from 'prop-types';

import { ContactsItem } from 'components/ContactsItem';

export const ContactList = ({ dates, onDeleteContact }) => {
  return (
    <ul>
      {dates.map(item => (
        <ContactsItem
          key={item.id}
          contactDetales={item}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  dates: PropTypes.array,
};
