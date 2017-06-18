import reactBemify from 'react-bemify';

// App-wide CSS namespace (change as required)
const APP_CSS_NAMESPACE = 'react-app';

export default component => reactBemify(APP_CSS_NAMESPACE)(component);
