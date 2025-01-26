import { logout, selectCurrentUser } from '@/Redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { publicPaths, rightItemsPaths } from '@/routes/public.routes';
import { headerItemsGenerator } from '@/utils/headerItemsGenerator';
import { Button, Layout, Menu, } from 'antd';
import { toast } from 'sonner';

const { Header} = Layout;

const Headers = () => {

  const headerItems : any = headerItemsGenerator(publicPaths )

  const rightItemsPath: any = headerItemsGenerator(rightItemsPaths)
  const user = useAppSelector(selectCurrentUser);
  if (!user){
    toast.success('Logout Sucessfull');
  }
 

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
          backgroundColor: "#FFFFFF",
          color: "black"
        }}
      >
        <div>Logo</div>
        <Menu
          mode="horizontal"
          items={headerItems}
          style={{ display: 'flex', justifyContent: "center", width:"100%", color:'white' }}
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
