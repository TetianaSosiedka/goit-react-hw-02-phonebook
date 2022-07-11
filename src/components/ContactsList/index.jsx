import PropTypes from 'prop-types';

import { List } from './styled';

import { ContactsItem } from 'components/ContactsItem';

export const ContactList = ({ dates, onDeleteContact }) => {
  return (
    <List>
      {dates.map(item => (
        <ContactsItem
          key={item.id}
          contactDetales={item}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.prototype = {
  dates: PropTypes.array,
};
