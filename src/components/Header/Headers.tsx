import { logout, selectCurrentUser } from '@/Redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { publicPaths, rightItemsPaths } from '@/routes/public.routes';
import { headerItemsGenerator } from '@/utils/headerItemsGenerator';
import { Button, Layout, Menu, } from 'antd';

const { Header} = Layout;

const Headers = () => {

  const headerItems : any = headerItemsGenerator(publicPaths )

  const rightItemsPath: any = headerItemsGenerator(rightItemsPaths)
  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };



  return (
    <> 
          <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: "white",
          color: 'white'
        }}
      >
        <div><img   src="https://chromeadvice.wordpress.com/wp-content/uploads/2025/01/stationershop-logo.png" alt="" /></div>
        <Menu
          mode="horizontal"
          items={headerItems}
          color='#003D5F'
          style={{ display: 'flex', backgroundColor: "white", color: '#003D5F', justifyContent: "center",  width:"100%", }}
        />
        {user ? <Button onClick={handleLogout}>Logout</Button>: <Menu
          mode="horizontal"
          items={rightItemsPath}
          style={{ display: 'flex', color:'white' }}
        />}
      </Header>
    
    
    </>
  );
};

export default Headers;
