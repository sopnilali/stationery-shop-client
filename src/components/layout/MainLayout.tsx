import { Layout, theme } from 'antd';
import Headers from '../Header/Headers';
import { Outlet } from 'react-router-dom';
import Footers from '../Footer/Footers';

const { Content } = Layout;

const MainLayout = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout>
      <Headers/>
      <Content style={{ padding: '20px 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
          <Footers/>
    </Layout>
  );
};

export default MainLayout;
