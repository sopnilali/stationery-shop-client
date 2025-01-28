import OrderData from "@/pages/admin/orderManagement/OrderData";
import CreateProducts from "@/pages/admin/productManagement/CreateProducts";
import GetProducts from "@/pages/admin/productManagement/GetProducts";
import UpdateProducts from "@/pages/admin/productManagement/UpdateProducts";
import CreateUser from "@/pages/admin/userManagement/CreateUser";
import UserData from "@/pages/admin/userManagement/UserData";
import UserDetails from "@/pages/admin/userManagement/UserDetails";


export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: "This is ",
    },
    {
      name: 'Product Management',
      children: [
        {
          name: 'Create Product',
          path: 'create-product',
          element: <CreateProducts />,
        },
        {
          name: 'Products',
          path: 'product-data',
          element: <GetProducts />,
        },
        {
          path: 'update-product/:productId',
          element: <UpdateProducts />,
        }
      ],
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create User',
          path: 'create-user',
          element: <CreateUser />,
        },
        {
          name: 'Users',
          path: 'user-data',
          element: <UserData />,
        },
        {
          path: 'user-data/:userid',
          element: <UserDetails />,
        }
      ],
    },
    {
      name: 'Order Management',
      children: [
        {
          name: 'Orders',
          path: 'order-data',
          element: <OrderData />,
        }
      ],
    },
  ];