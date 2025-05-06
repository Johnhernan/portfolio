import { env } from '$env/dynamic/private';
import * as nodemailer from 'nodemailer';
import {dev} from "$app/environment";
import {error} from "@sveltejs/kit";

const transporter = nodemailer.createTransport({
    host: env.MAIL_HOST,
    port: env.MAIL_PORT,
    secure: dev, // true for port 465, false for other ports
    auth: {
        user: env.USERNAME,
        pass: env.TRANSPORT_PASSWORD
    },
});


export const POST = async (request) => {
    try {
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        return {
            success: true
        };
    } catch {
        return error(400, {
            message: "Mail could not reach its destination"
        });
    }
}