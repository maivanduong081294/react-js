import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/layouts";

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route) => {
                    let Layout = DefaultLayout;
                    if (route.layout === null) {
                        Layout = "";
                    } else if (route.layout !== undefined) {
                        Layout = route.layout;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
