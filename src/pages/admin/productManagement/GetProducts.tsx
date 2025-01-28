import { useDeleteProductMutation, useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import { TQueryParam } from "@/types";
import { TProducts } from "@/types/product.type";
import { Button, Dropdown, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export type TTableData = Pick<
  TProducts,
  'name' | 'brand' | 'category' | 'stock' | 'price'>;

  const items = [
    {
      label: 'Update',
      key: 'update',
    },
    {
      label: 'Delete',
      key: 'Delete',
    }
  ];


const GetProducts = () => {
  const {data: ProductsData, isLoading, isFetching,} : any = useGetAllProductsQuery(undefined)

  const [deleteProduct] = useDeleteProductMutation()

  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);


  const tableData = ProductsData?.data?.map(
    ({ _id , name, brand, category, price, stock } : any) => ({
      key: _id,
      name,
      brand,
      category,
      price,
      stock
    })
  );

  const handleProductUpdate = (data: any) => {
    
    // updateSemesterStatus(updateData);
  };

  

  const handleProductDelete = (data: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const res : any = deleteProduct(data.key)
        if (res) {
          Swal.fire({
            title: `Deleted!`,
            text: `Your ${data.name} has been deleted.`,
            icon: "success"
          });
        }
      }
    });


    
  };


  const columns: any = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Brand',
      key: 'brand',
      dataIndex: 'brand',
    },
    ,
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: 'Availibality',
      key: 'stock',
      dataIndex: 'stock',
    },
    {
      title: 'Action',
      key: 'x',
      render: (key: any) => {
        return (
          <div className="space-x-1">
           <Link to={`/admin/update-product/${key.key}`}> <Button onClick={()=>handleProductUpdate(key)}>Update</Button></Link>
            <Button style={{backgroundColor: "gray", color: "white"}} onClick={()=>handleProductDelete(key)}>Delete</Button>
          </div>
        );
      },
    },
  ];


const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default GetProducts;
