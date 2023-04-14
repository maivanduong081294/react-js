import { emailService } from "~/services";

const send = async ({ ...params }) => {
    const result = await emailService.send({ ...params });
    return result;
};

export const emailActions = {
    send,
};
