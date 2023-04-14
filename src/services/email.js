import { post } from "~/utils/httpRequest";

const send = async ({ ...args }) => {
    try {
        if (args.to === undefined) {
            return { status: 0, message: "Vui lòng thêm người nhận" };
        }
        if (args.subject === undefined) {
            return { status: 0, message: "Vui lòng thêm tiêu đề" };
        }
        if (args.text === undefined && args.html === undefined) {
            return { status: 0, message: "Vui lòng thêm nội dung" };
        }
        const transport = {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "maivanduong081294@gmail.com",
                pass: "qqvpwsgossxlbrgj",
            },
        };
        const options = {
            ...args,
            from: args.from || "maivanduong081294@gmail.com",
        };
        const res = await post("emails/send", { transport, options });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const emailService = {
    send,
};
