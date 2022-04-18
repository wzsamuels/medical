/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

let aws = require("aws-sdk");
let ses = new aws.SES({ region: "us-east-1" });
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const createPatient = gql`
    mutation createPatient($input: CreatePatientInput!) {
        createPatient(input: $input) {
            id
            userID
        }
    }
`

exports.handler = async function (event) {

  let params

  try {
    const graphqlData = await axios({
      url: process.env.API_NEWMEDICAL_ENDPOINT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_NEWMEDICAL_KEY
      },
      data: {
        query: print(createPatient),
        variables: {
          input: {
            userID: `${event.request.userAttributes.sub}`
          }
        }
      }
    });

    console.log(process.env)
    console.log(graphqlData.data.data.createPatient)

    params = {
      Destination: {
        ToAddresses: ["contact@twinsilverdesign.com"],
      },
      Message: {
        Body: {
          Text: { Data: `Account signup confirmed`},
        },

        Subject: { Data: 'Account creation completed' },
      },
      Source: 'wzsamuels@gmail.com',
    }
  } catch (err) {
    console.log('error: ', err);
  }

  return ses.sendEmail(params).promise()
};