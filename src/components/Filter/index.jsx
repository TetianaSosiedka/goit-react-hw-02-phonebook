import PropTypes from 'prop-types';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <input
      onChange={onChangeFilter}
      type="text"
      name="filter"
      value={value}
    ></input>
  );
};
Filter.prototype = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};
