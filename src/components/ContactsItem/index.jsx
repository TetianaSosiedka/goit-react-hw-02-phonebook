import PropTypes from 'prop-types';

export const ContactsItem = ({ contactDetales, onDeleteContact }) => {
  return (
    <li>
      {contactDetales.name}: {contactDetales.number}
      <button type="button" id={contactDetales.id} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.prototype = {
  contactDetales: PropTypes.object,
  onDeleteContact: PropTypes.func,
};
