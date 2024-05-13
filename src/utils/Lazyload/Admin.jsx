import React from "react";

export const Admin = React.lazy(() =>
  import("../../Pages/Inventory/Admin/Admin/index")
);
export const Dashboard = React.lazy(() =>
  import("../../Pages/Inventory/Admin/Dashboard/AdminDashboard")
);
export const Shop = React.lazy(() => import("../../Pages/Inventory/Admin/Shop"));
export const Team = React.lazy(() => import("../../Pages/Inventory/Admin/Team"));
export const Warehous = React.lazy(() =>
  import("../../Pages/Inventory/Admin/Warehous")
);

