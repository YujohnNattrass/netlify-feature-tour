exports.handler = async () => {
  const env1 = process.env.ENV_1;
  const env2 = process.env.ENV_2;
  return {
    statusCode: 200,
    body: `hello world${env1}-${env2}!`,
  };
};
