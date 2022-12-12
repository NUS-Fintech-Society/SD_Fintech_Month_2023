import type { NextApiRequest, NextApiResponse } from 'next';
import { writeToSheet } from '../../utils/GoogleSheetsUtil';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log('Email Controller');

    switch (req.method) {
      case 'POST':
        const email: string = req.body.email;
        const response = await writeToSheet(
          email,
          process.env.GOOGLE_SHEETS_MAILING_LIST_SHEET_NAME,
        );
        res.status(200).json({ data: response.data });
        break;
      default:
        const message = 'Request method is not allowed.';
        console.log(message);
        res.status(400).send(message);
        break;
    }
  } catch (error: any) {
    console.log(error.message);
    return res
      .status(500)
      .send({ message: error.message ?? 'Failed to save email.' });
  }
}
