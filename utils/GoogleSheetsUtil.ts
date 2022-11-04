import { sheets } from '@googleapis/sheets';
import { getGoogleAuthClient } from './GoogleAuthUtil';

const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID;
const sheets_v4 = sheets('v4');

export async function writeToSheet(value: string) {
  const authToken = await getGoogleAuthClient();

  const result = await sheets_v4.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
    range: 'Sheet1',
    auth: authToken,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      majorDimension: 'ROWS',
      values: [[value]],
    },
  });
  console.log('Successfully written data to Sheets');
  return result;
}
