import images from "~/assets/images";
import config from "~/config";
import Image from "../Image/Image";
function RegisterEmailTemplate(props) {
    return (
        <table
            border="0"
            cellPadding="0"
            cellSpacing="0"
            width="100%"
            bgcolor="#f4f4f4"
        >
            <tr>
                <td align="center">
                    <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        style={{ maxWidth: "600px" }}
                    >
                        <tr>
                            <td
                                align="center"
                                valign="top"
                                style={{ padding: "40px 10px 40px 10px" }}
                            >
                                {" "}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" style={{ padding: "0px 10px 0px 10px" }}>
                    <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        style={{ maxWidth: "600px" }}
                    >
                        <tr>
                            <td
                                bgcolor="#3924d7"
                                align="center"
                                valign="top"
                                style={{
                                    padding: "20px",
                                    borderRadius: "4px 4px 0px 0px",
                                    color: "#111111",
                                    fontSize: "48px",
                                    fontWeight: 400,
                                    letterSpacing: "4px",
                                    lineHeight: "48px",
                                }}
                            >
                                <Image
                                    src={images.Logo}
                                    width="200"
                                    height="39"
                                    style={{ display: "block", border: "0px" }}
                                    alt="Logo"
                                />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td
                    bgcolor="#f4f4f4"
                    align="center"
                    style={{ padding: "0px 10px 0px 10px" }}
                >
                    <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        style={{ maxWidth: "600px" }}
                    >
                        <tr>
                            <td bgcolor="#ffffff" align="left">
                                <table
                                    width="100%"
                                    border="0"
                                    cellSpacing="0"
                                    cellPadding="0"
                                >
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="center"
                                            style={{
                                                padding: "20px 30px 30px 30px",
                                            }}
                                        >
                                            <table
                                                border="0"
                                                cellSpacing="0"
                                                cellPadding="0"
                                            >
                                                <tr>
                                                    <td>
                                                        <h1
                                                            style={{
                                                                fontSize:
                                                                    "48px",
                                                                fontWeight: 400,
                                                                margin: 2,
                                                            }}
                                                        >
                                                            Welcome!
                                                        </h1>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        align="center"
                                                        style={{
                                                            borderRadius: "3px",
                                                        }}
                                                        bgcolor="#2db14c"
                                                    >
                                                        <a
                                                            href={props.link}
                                                            style={{
                                                                fontSize:
                                                                    "20px",
                                                                color: "#ffffff",
                                                                textDecoration:
                                                                    "none",
                                                                padding:
                                                                    "15px 25px",
                                                                borderRadius:
                                                                    "2px",
                                                                display:
                                                                    "inline-block",
                                                            }}
                                                        >
                                                            Activate Account
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td
                                bgcolor="#ffffff"
                                align="left"
                                style={{
                                    padding: "0px 30px 40px 30px",
                                    borderRadius: "0px 0px 4px 4px",
                                    color: "#666666",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    lineHeight: "25px",
                                }}
                            >
                                <p style={{ margin: 0 }}>Follow me on:</p>
                                <div>
                                    <a
                                        style={{ paddingRight: "10px" }}
                                        href={config.followUs.messenger}
                                    >
                                        <Image
                                            src={images.IconMessenger}
                                            width="25"
                                            alt="Messenger"
                                        />
                                    </a>
                                    <a href={config.followUs.zalo}>
                                        <Image
                                            src={images.IconZalo}
                                            width="25"
                                            alt="Zalo"
                                        />
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        style={{ maxWidth: "600px" }}
                    >
                        <tr>
                            <td
                                align="center"
                                valign="top"
                                style={{ padding: "40px 10px 40px 10px" }}
                            >
                                {" "}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
}

export default RegisterEmailTemplate;
