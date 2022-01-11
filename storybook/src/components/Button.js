import React from 'react';
import PropTypes from 'prop-types';

export function Button({ label, color }) {
  return <button style={{ background: color }}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  label: 'Valor padrão',
};
