import PropTypes from "prop-types";
import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Loader from "../components/Loader";
import adminRoutes from "./roles/adminRoutes";
import Auth from "../utils/Auth";
import { USER_TYPES } from "../utils/Enum";
import PrivateRoute from "../utils/PrivateRoutes";
import UserLogin from "../Pages/Shared/Users/userLogin/UserLogin";
import AppbarAndNAvabar from "../components/Navbar/Navbar";
import BadRequest from "../Pages/Shared/Badrequest";
import Home from "../Pages/Shared/Home";

const Routes = () => {
  // let userType = Auth.getRoles() || USER_TYPES.STUDENT;
  let userType = USER_TYPES.ADMIN;
  // const isAuth = Auth.isAuth() || "test";
  const isAuth =  "test";
  const location = useLocation();
  useEffect(() => {
    userType = "Auth.getRoles()";
  }, [location]);

  return (
    <>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        {isAuth ? (
          <Route path="admin/" element={<AppbarAndNAvabar />}>
            {userType === USER_TYPES.ADMIN &&
              adminRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={`${route.path}`}
                  element={
                    <Suspense fallback={<Loader />}>
                      <PrivateRoute>{<route.component />}</PrivateRoute>
                    </Suspense>
                  }
                >
                  {route.children?.length
                    ? route.children.map((childRoute) => {
                        return (
                          <Route
                            index={childRoute.index}
                            key={childRoute.path}
                            path={`${childRoute.path}`}
                            element={
                              <Suspense fallback={<Loader />}>
                                <PrivateRoute>
                                  {<childRoute.component />}
                                </PrivateRoute>
                              </Suspense>
                            }
                          />
                        );
                      })
                    : null}
                </Route>
              ))}
          </Route>
        ) : null}
        <Route path="*" element={<BadRequest />} />
      </ReactRouterRoutes>
    </>
  );
};

Routes.propTypes = {
  userType: PropTypes.string,
};

export default Routes;
