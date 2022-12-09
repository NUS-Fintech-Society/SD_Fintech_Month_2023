import type { NextApiRequest, NextApiResponse } from 'next';
import { writeValuesToSheet } from '../../utils/GoogleSheetsUtil';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log('Contact Controller');

    switch (req.method) {
      case 'POST':
        const values: string[] = req.body.values;
        const response = await writeValuesToSheet(
          values,
          process.env.GOOGLE_SHEETS_CONTACT_SHEET_NAME,
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
      .send({ message: error.message ?? 'Failed to save contact details.' });
  }
}
