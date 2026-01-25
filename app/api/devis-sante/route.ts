import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. Validation basique
        if (!data.email || !data.nom || !data.telPortable) {
            return NextResponse.json(
                { error: "Champs obligatoires manquants" },
                { status: 400 }
            );
        }

        // 2. Configuration du transporteur (SMTP)
        // Ces variables seront lues depuis .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true", // true pour 465, false pour autres
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // 3. Construction du corps de l'email (HTML soigné)
        const garantiesHtml = Object.entries(data)
            .filter(([key]) => ['soinsCourants', 'hospitalisation', 'dentaire', 'optique', 'prothesesHorsDentaire', 'confort'].includes(key))
            .map(([key, value]) => `<li><strong>${key}</strong> : Niveau ${value}</li>`)
            .join('');

        const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
          Nouvelle Demande de Devis : Complémentaire Santé
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #000;">👤 Assuré Principal</h3>
          <p><strong>Nom :</strong> ${data.civilite} ${data.nom} ${data.prenom}</p>
          <p><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Téléphone :</strong> ${data.telPortable} / ${data.telDomicile || 'N/A'}</p>
          <p><strong>Adresse :</strong> ${data.adresse}, ${data.codePostal} ${data.ville}</p>
          <p><strong>Date de naissance :</strong> ${data.dateNaissance} à ${data.villeNaissance}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #000;">👨‍👩‍👧‍👦 Situation & Famille</h3>
          <p><strong>Situation Familiale :</strong> ${data.situationFamiliale}</p>
          <p><strong>Enfants :</strong> ${data.nombreEnfants} (dont ${data.enfantsACharge} à charge)</p>
          <p><strong>Situation Pro :</strong> ${data.situationProfessionnelle}</p>
          <p><strong>Profession :</strong> ${data.profession}</p>
        </div>

        <div style="background-color: #fff8e1; padding: 15px; border-radius: 5px; border: 1px solid #D4AF37;">
          <h3 style="margin-top: 0; color: #D4AF37;">🏥 Besoins Santé Souhaités</h3>
          <ul>
            ${garantiesHtml}
          </ul>
        </div>

        <p style="font-size: 12px; color: #666; margin-top: 20px;">
          Ce message a été envoyé via le simulateur du site Novantys.
        </p>
      </div>
    `;

        // 4. Envoi de l'email
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL || '"Novantys Site" <no-reply@novantys.fr>',
            to: process.env.CONTACT_EMAIL, // L'adresse où vous recevrez les demandes
            subject: `[Devis Santé] Demande de ${data.nom} ${data.prenom}`,
            text: `Nouvelle demande de devis santé de ${data.nom} ${data.prenom}. Voir version HTML.`, // Fallback texte brut
            html: htmlContent,
        });

        return NextResponse.json({ success: true, message: "Demande envoyée avec succès" });
    } catch (error) {
        console.error("Erreur d'envoi de mail :", error);
        return NextResponse.json(
            { error: "Erreur lors de l'envoi de l'email." },
            { status: 500 }
        );
    }
}
