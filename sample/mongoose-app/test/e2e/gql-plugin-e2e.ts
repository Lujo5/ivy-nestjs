const transformer = require('@nestjs/graphql/plugin');

module.exports.name = 'nestjs-graphql-transformer';
// you should change the version number anytime you change the configuration below - otherwise, jest will not detect changes
// Clean jest cache with command: npx jest --clearCache
module.exports.version = 11;

module.exports.factory = (cs) => {
  return transformer.before(
    {
      // @nestjs/graphql/plugin options (can be empty)
      typeFileNameSuffix: ['.schema.ts', '.entity.ts', '.dto.ts'],
      introspectComments: true
    },
    cs.program // "cs.tsCompiler.program" for older versions of Jest (<= v27)
  );
};
