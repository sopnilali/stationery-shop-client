import OrderData from "@/pages/admin/orderManagement/OrderData";
import CreateProductCategory from "@/pages/admin/productManagement/CreateProductCategory";
import CreateProducts from "@/pages/admin/productManagement/CreateProducts";
import GetProducts from "@/pages/admin/productManagement/GetProducts";
import ProductCategory from "@/pages/admin/productManagement/ProductCategory";
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
          name: 'Create P. Category',
          path: 'create-product-category',
          element: <CreateProductCategory />,
        },
        {
          name: 'Product Category',
          path: 'product-category',
          element: <ProductCategory />,
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