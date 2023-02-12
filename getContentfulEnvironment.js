const contentful = require('contentful-management');
require('dotenv').config();

module.exports = () => {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  });

  return client
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT)
    );
};
