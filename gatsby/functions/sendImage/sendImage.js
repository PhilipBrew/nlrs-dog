const sanityClient = require('@sanity/client');
const { basename } = require('path');
const fs = require('fs');
const request = require('request');

exports.handler = async (event, context) => {
  const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-04-10',
    token: process.env.SANITY_TOKEN_WRITE,
  });

  const { body } = event;
  const bodyObj = JSON.parse(body);
  const { type, filePath } = bodyObj;

  console.log('OBJ ------>', bodyObj);

  // const base64Image = image.split(';base64,').pop();

  // fs.writeFile('tmp.jpeg', base64Image, { encoding: 'base64' }, function (err) {
  //   console.log('File created');
  // });

  const file = new File(['foo'], 'foo.jpg', { type: 'image/jpg' });

  return client.assets
    .upload('image', file, {
      filename: basename(filePath),
    })
    .then((imageAsset) => ({
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        image_asset: imageAsset,
      }),
    }))
    .catch((error) => ({
      statusCode: 400,
      error,
    }));
};
