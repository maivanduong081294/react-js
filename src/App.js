import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { adminRoutes, publicRoutes, authenticationRoutes } from "~/routes";
import { DefaultLayout, AdminLayout, SimpleCenterLayout } from "~/layouts";
import {
    AdminRoute,
    PublicRoute,
    AuthenticationRoute,
} from "~/components/Route";
import Meta from "./components/Meta";

function App() {
    return (
        <HelmetProvider>
            <Meta />
            <Router>
                <Routes>
                    <Route element={<PublicRoute />}>
                        {publicRoutes.map((route) => {
                            let Layout = DefaultLayout;
                            if (route.layout === null) {
                                Layout = Fragment;
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
                    <Route element={<AuthenticationRoute />}>
                        {authenticationRoutes.map((route) => {
                            let Layout = SimpleCenterLayout;
                            if (route.layout === null) {
                                Layout = Fragment;
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
                    <Route element={<AdminRoute />}>
                        {adminRoutes.map((route) => {
                            let Layout = AdminLayout;
                            if (route.layout === null) {
                                Layout = Fragment;
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
        </HelmetProvider>
    );
}

export default App;
