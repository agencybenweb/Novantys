import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, type } = body;

        // Validation basique
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Champs obligatoires manquants (Nom, Email, Message)' },
                { status: 400 }
            );
        }

        // Configuration du transporteur SMTP
        // Utilisation des variables d'environnement
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour les autres
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Configuration de l'email pour l'administrateur (Novantys)
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`, // L'expéditeur doit souvent être l'email authentifié
            replyTo: email,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Destinataire (Vous)
            subject: `[Nouveau Contact Site] ${subject || 'Demande de renseignements'}`,
            text: `
        Nouveau message reçu depuis le site web Novantys :
        
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone || 'Non renseigné'}
        Type de profil: ${type || 'Non spécifié'}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #C9A557;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
          <p><strong>Profil :</strong> ${type || 'Non spécifié'}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <h3 style="color: #555;">Message :</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-left: 4px solid #C9A557;">${message}</p>
        </div>
      `,
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email envoyé avec succès' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Erreur serveur lors de l\'envoi du message.' },
            { status: 500 }
        );
    }
}
