
import { Button, Card } from "antd";
import { useGetAllProductsQuery } from '@/Redux/features/products/productsApi';
import { TProducts } from "@/types/product.type";
import { Link } from "react-router-dom";

const Products = () => {

    const product = useGetAllProductsQuery(undefined);

    console.log(product)
    if (product.isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="max-w-7xl">
            <div className="my-5 px-2 grid gap-2 grid-cols-1 md:grid-cols-3">
                {product.data?.data.slice(0, 6).map((product: TProducts) => (
                    <Card key={product._id} title={product.name} bordered={false} style={{ width: "100%" }} >
                        <p><span className="font-semibold">Category</span>: {product?.category}: </p>
                        <p><span className="font-semibold">Price</span>: {product?.price} Taka</p>

                    </Card>
                ))}

            </div>
            <div className="text-center">
                <Link to={'/products'}><Button>View All</Button></Link>
            </div>
        </div>
    );
};

export default Products;
