import Sidebar from "@/components/layout/Sidebar";
import { logout } from "@/Redux/features/auth/authSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const AdminLayout = () => {

    const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>{' '}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
