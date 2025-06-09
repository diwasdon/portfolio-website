"use server"

import { Resend } from 'resend';

interface EmailData {
    email: string;
    message: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async ({ email, message }: EmailData) => {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'diwassapkota16@gmail.com',
            subject: `New message from ${email}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <p><strong>From:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
                        ${message.replace(/\n/g, '<br>')}
                    </p>
                </div>
            `
        });
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}