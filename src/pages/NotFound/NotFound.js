import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";
import images from "~/assets/images";
import Image from "~/components/Image";
import Button from "~/components/Button/Button";
import config from "~/config";

const cx = classNames.bind(styles);
function NotFound() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("main")}>
                    <Image
                        className={cx("image")}
                        src={images.IconSadFace}
                        alt="Error page"
                    />
                    <h1 className={cx("title")}>404</h1>
                    <p className={cx("description")}>
                        Trang bạn đang cố truy cập hiện không khả dụng. Điều này
                        có thể là do trang không tồn tại hoặc đã bị di chuyển.
                    </p>
                    <Button to={config.routes.home} primary uppercase>
                        Quay lại trang chủ
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
