import PropTypes from 'prop-types';

export const ContactsItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

ContactsItem.prototype = {
  name: PropTypes.string,
  number: PropTypes.string,
};
