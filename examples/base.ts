import { Configuration, DefaultApi } from "../src";


// get the api instance
const configuration = new Configuration({
  basePath: "http://localhost:7861", // change this to your server address
});

const api = new DefaultApi(configuration);

// text2image
api.text2imgapiSdapiV1Txt2imgPost({
  prompt: "a cat flying in the sky",
});

// get the progress
api.progressapiSdapiV1ProgressGet();