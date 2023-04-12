import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
function Meta() {
    const { meta } = useSelector((state) => state);
    const metaKey = Object.keys(meta);

    return (
        <Helmet>
            {meta !== {} &&
                metaKey.map((key) => {
                    if (meta[key]) {
                        if (key === "title") {
                            return <title key={key}>{meta[key]}</title>;
                        } else {
                            return (
                                <meta
                                    key={key}
                                    name={key}
                                    content={meta[key]}
                                />
                            );
                        }
                    }
                })}
        </Helmet>
    );
}

export default Meta;
