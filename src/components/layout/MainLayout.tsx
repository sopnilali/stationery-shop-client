import { Layout, theme } from 'antd';
import Headers from '../Header/Headers';
import { Outlet } from 'react-router-dom';
import Footers from '../Footer/Footers';

const { Content } = Layout;

const MainLayout = () => {


  return (
    <Layout className='max-w-7xl mx-auto'>
      <Headers/>
      <Content>
        <div>
          <Outlet/>
        </div>
      </Content>
          <Footers/>
    </Layout>
    
  );
};

export default MainLayout;
