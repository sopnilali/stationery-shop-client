import Sidebar from "@/components/layout/Sidebar";
import { logout } from "@/Redux/features/auth/authSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useState } from "react";

const { Header, Content } = Layout;

const UserLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <Layout style={{ height: '100%' }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
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

export default UserLayout;
