
import Manageprofile from "@/pages/user/Manageprofile";
import UserDashboard from "@/pages/user/UserDashboard";
import ViewOrders from "@/pages/user/ViewOrders";

export const userPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <UserDashboard/>,
    },
    {
      name: 'View Order',
      path: 'view-orders',
      element: <ViewOrders/>,
    },
    {
        name: 'Manage Profile',
        path: 'manage-profile',
        element: <Manageprofile/>
    }
  ];