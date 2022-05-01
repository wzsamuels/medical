import * as AWS from 'aws-sdk';

const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1:4c6f466a-30c6-4017-a038-386780b48e9d"; // An Amazon Cognito Identity Pool ID.

// Create an Amazon Lex service client object.

  AWS.config.region = REGION
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID ,
  });
   const lexClient = new AWS.LexRuntime();

export default lexClient;