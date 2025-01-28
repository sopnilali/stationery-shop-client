

import SSForm from "@/components/form/SSForm";
import SSInput from "@/components/form/SSInput";
import SSSelect from "@/components/form/SSSelect";
import { roleOptions } from "@/constants/global";
import { useRegisterMutation } from "@/Redux/features/auth/authApi";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import axios from "axios";
import { Controller, FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateUser = () => {

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
          role: data.role,
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
      <div className="">
        <div className="border px-10 py-10 my-5 shadow rounded-md">
          <SSForm onSubmit={onSubmit} >
          <Divider>User Information</Divider>
            <Row gutter={5} >
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
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
              <SSSelect options={roleOptions} name="role" label="Role" />
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

            <Button htmlType="submit">User Register</Button>
          </SSForm>
        </div>
      </div>
    </>
  );
};

export default CreateUser;