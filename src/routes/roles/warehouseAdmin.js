import * as LazyComponent from "../../utils/Lazyload";

const warehouseAdminRoutes = [
  {
    path: "inventory",
    component: LazyComponent.WarhouseAdmin.Warhous,
    children: [
      {index:true,path: "Dashboard",component: LazyComponent.WarhouseAdmin.Dashboard,},
      {index:false,path: "Suppliers",component: LazyComponent.WarhouseAdmin.Suppliers,},
      {index:false,path: "StockMovement",component: LazyComponent.WarhouseAdmin.StockMovement,},
      {index:false,path: "Receiving",component: LazyComponent.WarhouseAdmin.Receiving,},
      {index:false,path: "Products",component: LazyComponent.WarhouseAdmin.Products,},
      {index:false,path: "Orders",component: LazyComponent.WarhouseAdmin.Orders,},
    ],
  },
  {
    path: "hrm",
    component: LazyComponent.WarhouseAdmin.Warhous,
    children: [
      {index:true,path: "Payroll",component: LazyComponent.WarhouseAdmin.Payroll,},
      {index:false,path: "Attendance",component: LazyComponent.WarhouseAdmin.Attendance,},
      {index:false,path: "Leave",component: LazyComponent.WarhouseAdmin.Leave,},
      {index:false,path: "Employees",component: LazyComponent.WarhouseAdmin.Employees,},
    ],
  },
  {
    path: "settings",
    component: LazyComponent.WarhouseAdmin.Warhous,
    children: [
      {index:true,path: "WarehouseDetails",component: LazyComponent.WarhouseAdmin.WarehouseDetails,},
    ],
  },
];
export default warehouseAdminRoutes;
