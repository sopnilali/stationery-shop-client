import SSForm from "@/components/form/SSForm";
import SSInput from "@/components/form/SSInput";
import { useLoginMutation } from "@/Redux/features/auth/authApi";
import { setUser } from "@/Redux/features/auth/authSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

    const defaultValues = {
        email: 'sopnil@gmail.com',
        password: 'sopnil1234',
      };

    const [login, ] = useLoginMutation();


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in');
    
        try {
          const userInfo = {
            email: data.email,
            password: data.password,
          };
          const res = await login(userInfo).unwrap();
          const user = verifyToken(res.data.accessToken);
          dispatch(setUser({ user: user, token: res.data.accessToken }));
          toast.success('Logged in', { id: toastId, duration: 2000 });
          navigate(`/${user?.role}/dashboard`);
        } catch (err) {
          toast.error(`Somthing Error`, { id: toastId, duration: 2000 });
        }
      };


  return (
    < >
      <Row justify="center" align="middle" style={{ height: '100vh'}}>
      <div className="border p-4 shadow rounded-md">
      <SSForm onSubmit={onSubmit} defaultValues={defaultValues} >
        <SSInput type="text" name="email" label="Email:" />
        <SSInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
        <p className="text-center mt-4">Don't have an account? <a href="/register">Register</a></p>
      </SSForm>
      </div>
    </Row>
    
    </>
  );
};

export default Login;
