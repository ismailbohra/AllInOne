import * as LazyComponent from "../../utils/Lazyload";

const adminRoutes = [
  {
    path: "inventory",
    component: LazyComponent.Admin.Admin,
    children: [
      {
        index:true,
        path: "Dashboard",
        component: LazyComponent.Admin.Dashboard,
      },
      {
        index:false,
        path: "Team",
        component: LazyComponent.Admin.Team,
      },
      {
        index:false,
        path: "Warehouse",
        component: LazyComponent.Admin.Warehous,
      },
      {
        index:false,
        path: "Shop",
        component: LazyComponent.Admin.Shop,
      },
    ],
  },
  {
    path: "hrm",
    component: LazyComponent.Admin.Admin,
    children: [
      {
        index:true,
        path: "Overview",
        component: LazyComponent.Admin.Dashboard,
      },
      {
        index:true,
        path: "Employees",
        component: LazyComponent.Admin.Dashboard,
      },
      {
        index:false,
        path: "Attendance",
        component: LazyComponent.Admin.Dashboard,
      },
      {
        index:false,
        path: "Payroll",
        component: LazyComponent.Admin.Dashboard,
      },
      {
        index:false,
        path: "Reports",
        component: LazyComponent.Admin.Dashboard,
      },
      {
        index:false,
        path: "Settings",
        component: LazyComponent.Admin.Dashboard,
      },
    ],
  },
];
export default adminRoutes;
