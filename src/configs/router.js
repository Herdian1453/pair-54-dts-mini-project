import RequireAuth from "../helper/auth";
import Layout from "../layout";
import NotFoundView from "../views/404";
import DetaillistView from "../views/detaillist";
import HomeView from "../views/home";
import LoginView from "../views/login";
import RegisterView from "../views/register";
import RequireAnonym from "../helper/redirectHome";

let routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeView /> },
      {
        path: "/detail",
        element: (
          <RequireAuth>
            <DetaillistView />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <RequireAnonym>
        <LoginView />
      </RequireAnonym>
    ),
  },
  {
    path: "/register",
    element: (
      <RequireAnonym>
        <RegisterView />
      </RequireAnonym>
    ),
  },
  { path: "*", element: <NotFoundView /> },
];

export default routesConfig;
