import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      <h1>{title ? title : 'Your title'}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
