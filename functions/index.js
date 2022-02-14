const sgMail = require("@sendgrid/mail");
const functions = require("firebase-functions");
const apiKey = functions.config().sendgrid_service.key;
sgMail.setApiKey(apiKey);

exports.sendMail = functions
    .region("asia-northeast1")
    .https.onCall(async (data, context) => {
        const adminMassage = {
            to: "yuusongben14@gmail.com",
            from: "yuusongben14@gmail.com",
            subject: "【Newself】ホームページお問い合わせ",
            text: `以下内容でお問い合わせフォームより受け付けました。\n\nお名前：\n${data.name}\n\nメールアドレス：\n${data.email}\n\nお問い合わせ内容：\n${data.content}`,
        };
        const thanksMassage = {
            to: data.email,
            from: "yuusongben14@gmail.com",
            subject: "【Newself】お問い合わせありがとうございます",
            text: `${data.name}様\n\nお問い合わせありがとうございます。\n以下内容でお問い合わせを受け付けました。\n\nお名前：\n${data.name}\n\nメールアドレス：\n${data.email}\n\nお問い合わせ内容：\n${data.content}\n\n後ほどご連絡を差し上げます。\nよろしくお願いいたします。`,
        };
        try {
            await sgMail.send(adminMassage);
            await sgMail.send(thanksMassage);
            return {
                status: 200,
                message: "成功しました。",
            };
        } catch (error) {
            console.error(error);
            if (error.response) {
                console.error(error.response.body);
            }
            return {
                status: 999,
                message: error.message || "エラーが発生しました。",
            };
        }
    });

exports.test = functions
    .region("asia-northeast1")
    .https.onCall(async (data, context) => {
        console.log(data)
        return {
            status: 200
        }
    }
    )