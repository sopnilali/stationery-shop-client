

import SSForm from "@/components/form/SSForm";
import SSInput from "@/components/form/SSInput";
import { useRegisterMutation } from "@/Redux/features/auth/authApi";
import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { Controller, FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {

  const [register] = useRegisterMutation();


  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in');
      const image_hosting_key = '1d706f7f1b94e02b531d0f01ccf9cb6d'
      const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    
      const imageFile = { image: data.productImg }
    
      const result = await axios.post(image_hosting_api, imageFile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (result.data.success){
        
        const userInfo = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          photoURL: result.data.data.url,
          password: data.password,
        }
        console.log(userInfo)
  

        const res = await register(userInfo).unwrap();
        if (res) {
          toast.success('User Registration Successfull', { id: toastId, duration: 2000 });
        }
      }



  };

  return (
    <>
      <div className="text-center py-8 border-b">
        <h1 className="text-5xl ">User Registration</h1>
      </div>
      <div className="flex justify-center pt-8 items-center mx-auto">
        <div className="border px-10 py-10 my-5 shadow rounded-md">
          <SSForm onSubmit={onSubmit} >
            <Row gutter={5} className="max-w-5xl ">
              <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                <SSInput type="text" name="name" label="Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <SSInput type="email" name="email" label="Email" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <SSInput type="text" name="phone" label="Phone" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <SSInput type="text" name="address" label="Address" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <SSInput type="text" name="city" label="City" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="productImg"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <SSInput type="password" name="password" label="Password" />
              </Col>
            </Row>

            <Button htmlType="submit">Register</Button>
            <div className="text-center mt-4">
              <p>Already have an account? <a href="/login" >Login</a></p>
            </div>
          </SSForm>
        </div>
      </div>
    </>
  );
};

export default Register;
