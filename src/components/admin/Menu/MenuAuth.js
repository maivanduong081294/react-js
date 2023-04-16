import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightFromBracket,
    faUser,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import config from "~/config";
import Button from "~/components/Button";

function MenuAuth() {
    const menu = [
        {
            title: "Chỉnh sửa thông tin",
            to: config.routes.adminProfile,
            icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
            title: "Hộp thư",
            to: config.routes.adminContacts,
            icon: <FontAwesomeIcon icon={faEnvelope} />,
        },
        {
            title: "Đăng xuất",
            to: config.routes.login,
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        },
    ];
    return (
        <ul>
            {menu.map((item, key) => {
                return (
                    <li key={key}>
                        <Button
                            full
                            text
                            left
                            to={item.to}
                            iconLeft={item.icon}
                        >
                            {item.title}
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuAuth;
