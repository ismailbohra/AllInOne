import React from "react";

export const Warhous = React.lazy(() =>import("../../Pages/Inventory/Warehous/warehous/Warehouse"));
export const Dashboard = React.lazy(() =>import("../../Pages/Inventory/Warehous/Admin/Dashboard/Dashboard"));
export const Attendance = React.lazy(() =>import("../../Pages/Inventory/Warehous/Admin/Attendance/Attendance"));
export const Suppliers = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Suppliers/Suppliers"));
export const StockMovement = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/StockMovement/StockMovement"));
export const Receiving = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Receiving/Receiving"));
export const Products = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Products/Products"));
export const Orders = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Orders/Orders"));
export const Payroll = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Payroll/Payroll"));
export const Leave = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Leave/Leave"));
export const Employees = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/Employees/Employees"));
export const WarehouseDetails = React.lazy(() => import("../../Pages/Inventory/Warehous/Admin/WarehouseDetails/WarehouseDetails"));

