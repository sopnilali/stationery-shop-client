import SSForm from "@/components/form/SSForm";
import SSInput from "@/components/form/SSInput";
import SSSelect from "@/components/form/SSSelect";
import SSTextArea from "@/components/form/SSTextArea";
import { brandOptions, categoryOptions } from "@/constants/global";
import { useGetSingleProductsQuery, useUpdateProductMutation } from "@/Redux/features/products/productsApi";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import axios from 'axios';
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";


const CreateProducts = () => {

    const useparams = useParams();

    const { data: singleProduct } = useGetSingleProductsQuery(useparams?.productId)

    const [updateProduct] = useUpdateProductMutation();
    const [productid, setproductId] = useState(useparams?.productId);

    

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {


        const image_hosting_key = '1d706f7f1b94e02b531d0f01ccf9cb6d'
        const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

        const imageFile = { image: data.productImg }

        const result = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (result.data.success) {

            const ProductData = {
                name: data.name,
                brand: data.brand,
                price: data.price,
                category: data.category,
                stock: data.stock,
                description: data.description,
                productImg: result.data.data.url,
            }
            const updateData = {
                id: productid,
                data: ProductData,
              };

            updateProduct(updateData);
        }
    };


    return (
        <Row justify="center" >
            <Col span={22}>
                <SSForm onSubmit={onSubmit}>
                    <Divider>Product Information</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                            <SSInput type="text" name="name" defaultValue={singleProduct?.data?.name} label="Product Name" />
                        </Col>
                        <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                            <SSSelect options={brandOptions} defaultValue={singleProduct?.data?.brand} name="brand" label="Brand Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                            <SSInput type="text" name="price" defaultValue={singleProduct?.data?.price} label="Price" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                            <SSSelect options={categoryOptions} defaultValue={singleProduct?.data?.category}  name="category" label="Category" />
                        </Col>
                        <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
                            <SSTextArea name="description" defaultValue={singleProduct?.data?.description}  label="Description" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                            <SSInput type="number" name="stock" defaultValue={singleProduct?.data?.stock} label="Stock" />
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
                    </Row>
                    <Button htmlType="submit">Update</Button>
                </SSForm>
            </Col>
        </Row>
    );
};

export default CreateProducts;
