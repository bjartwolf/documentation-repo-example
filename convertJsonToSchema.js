const toJsonSchema = require('to-json-schema');
const convert = require('@openapi-contrib/json-schema-to-openapi-schema');

const okRes =
  '{"status":"Healthy","totalDuration":"00:00:00.0095605","entries":{"sqlserver":{"data":{},"duration":"00:00:00.0088036","status":"Healthy","tags":[]}}}';

const failedRes =
  '{"status":"Unhealthy","totalDuration":"00:00:00.2294396","entries":{"sqlserver":{"data":{},"description":"Login failed for user \u0027Some User\u0027.","duration":"00:00:00.2078386","exception":"Login failed for user \u0027Some User\u0027.","status":"Unhealthy","tags":[]}}}';

const schema1 = toJsonSchema(JSON.parse(okRes));

(async (schema) => {
  const convertedSchema = await convert(schema);
  console.log(JSON.stringify(convertedSchema));
})(schema1);
