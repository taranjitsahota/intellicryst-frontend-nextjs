import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Convert all fields into email rows dynamically
    const rows = Object.entries(body)
      .map(
        ([key, value]) => `
        <tr>
          <td width="180" style="padding:8px 0;font-weight:bold;text-transform:capitalize;">
            ${key.replace(/([A-Z])/g, " $1")}
          </td>
          <td style="padding:8px 0;">
            ${value || "-"}
          </td>
        </tr>
      `
      )
      .join("");

    await transporter.sendMail({
      from: `"Intellicryst" <${process.env.EMAIL_USER}>`,
      to: "intellicryst@gmail.com",
      subject: "New Website Inquiry",
      html: `
      <div style="background:#f4f6f8;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
      
        <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;">
          
          <tr>
            <td style="background:#012B48;color:white;padding:20px;text-align:center;">
              <h2 style="margin:0;">Intellicryst</h2>
              <p style="margin:4px 0 0;font-size:13px;opacity:.8;">
                New Website Inquiry
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              
              <table width="100%" cellpadding="0" cellspacing="0">
                ${rows}
              </table>

            </td>
          </tr>

          <tr>
            <td style="background:#f9fafb;padding:12px;text-align:center;font-size:12px;color:#6b7280;">
              Message sent from Intellicryst website
            </td>
          </tr>

        </table>

      </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}