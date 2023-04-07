import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes, publicRoutes } from "~/routes";
import { DefaultLayout, AdminLayout } from "~/layouts";
import { AdminRoute } from "~/components/Route";

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
                <Route element={<AdminRoute />}>
                    {adminRoutes.map((route) => {
                        let Layout = AdminLayout;
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
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
