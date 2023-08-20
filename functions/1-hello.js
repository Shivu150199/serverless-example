//domain/.netlify/functions/1-hello

exports.handler = async (event, context, cb) => {
  const person={
    firstName:'shivam',
    lastName:'singh'
  }
  return {
    statusCode: 200,
    body: JSON.stringify(person),
  }
}
