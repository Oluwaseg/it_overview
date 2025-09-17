import { transporter } from '@/lib/mailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company, inquiryType, message } = req.body;

    await transporter.sendMail({
      from: '"OCI Website" <info@ocitech.tech>',
      to: ['info@ocitech.tech', 'oluwatobiojo@yahoo.com', 'oladapoabel@gmail.com'],
      replyTo: email,
      subject: `New Inquiry: ${inquiryType || 'General'} from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Company: ${company || 'N/A'}
            Inquiry Type: ${inquiryType}
            Message:
            ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mailer error:', error);
    return res.status(500).json({ success: false, error });
  }
}
