import { GoogleAuth } from 'googleapis-common';

export async function getGoogleAuthClient() {
  const auth = new GoogleAuth({
    keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const authClient = await auth.getClient();

  console.log('Successfully Authenticated to Google');
  return authClient;
}
