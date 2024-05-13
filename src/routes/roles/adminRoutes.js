import * as LazyComponent from "../../utils/Lazyload";

const adminRoutes = [
  {
    path: "",
    component: LazyComponent.Admin.Dashboard,
  },
  {
    path: "Team",
    component: LazyComponent.Admin.Team,
  },
  {
    path: "Warehouse",
    component: LazyComponent.Admin.Warehous,
  },
  {
    path: "Shop",
    component: LazyComponent.Admin.Shop,
  }
];
export default adminRoutes;
