import PropTypes from 'prop-types';

// PropTypes for React-Router v4 based on its documentation.
export default {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string).isRequired,
    isExact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    action: PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.string,
    }).isRequired,
    push: PropTypes.func.isRequired, // push(path, [state])
    replace: PropTypes.func.isRequired, // push(path, [state])
    go: PropTypes.func.isRequired, // go(steps)
    goBack: PropTypes.func.isRequired, // goBack()
    goForward: PropTypes.func.isRequired, // goForward()
    block: PropTypes.func.isRequired, // block(prompt) or block(function(location, action)) - returns a function to unblock
  }).isRequired,
};
