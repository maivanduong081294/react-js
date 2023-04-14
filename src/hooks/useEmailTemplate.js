import ReactDOMServer from "react-dom/server";

export const getEmailTemplate = (EmailTemplateComp) => {
    const html = ReactDOMServer.renderToString(EmailTemplateComp);
    return html;
};
