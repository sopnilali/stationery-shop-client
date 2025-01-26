

import SSForm from "@/components/form/SSForm";
import SSInput from "@/components/form/SSInput";
import { useRegisterMutation } from "@/Redux/features/auth/authApi";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateUser = () => {

  const defaultValues = {
    name: 'sopnil',
    email: 'sopnil@gmail.com',
    password: 'sopnil123',
    photoURL: "https://"
  };

      const [register] = useRegisterMutation();


  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');


    try {

      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: data.photoURL,
        password: data.password,
      };

      const res = await register(userInfo).unwrap();
      toast.success('User Registration Successfull', { id: toastId, duration: 2000 });

    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }



  };

  return (
    <>
      <div className="text-center py-8 ">
        <h1 className="text-5xl ">User Registration</h1>
      </div>
          <SSForm onSubmit={onSubmit} defaultValues={defaultValues} >
            <SSInput type="text" name="name" label="Name" />
            <SSInput type="text" name="email" label="Email" />
            <SSInput type="text" name="photoURL" label="Photo URL" />
            <SSInput type="text" name="password" label="Password" />
            <Button htmlType="submit">Register</Button>
          </SSForm>
    </>
  );
};

export default CreateUser;
