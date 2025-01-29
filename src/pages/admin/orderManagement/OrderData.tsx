import { useGetAllOrdersQuery, useShippedOrderMutation, useVerifyOrderMutation } from "@/Redux/features/order/orderApi";
import { TOrder } from "@/types/order.type";
import { Button, Table } from "antd";
import Swal from 'sweetalert2'

export type TTableData = Pick<
  TOrder,
  'user' | 'status' | 'transaction' | 'totalPrice'|'products'>;


const OrderData = () => {
  const {data: allOrderData, isFetching,} : any = useGetAllOrdersQuery(undefined)
  

  const [shippedOrder] = useShippedOrderMutation()

  const [verifyOrder] = useVerifyOrderMutation();

  const tableData = allOrderData?.data?.map(
    ({ _id , user, status, transaction, products,totalPrice } : any) => ({
      key: _id,
      user,
      status,
      transaction,
      totalPrice,
      products
    })
  );
  

  

  const HandleOrderStatus = (data: any) => {

    Swal.fire({
      title: "Has the user paid for the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, Paid it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const res = shippedOrder(data.key)
        if (!res) {
          Swal.fire({
            title: `Shipped!`,
            text: `Your Order Not Shipped.`,
            icon: "success"
          });
        }else{
          Swal.fire({
            title: `Shipped!`,
            text: `Your Order has been Shipped.`,
            icon: "success"
          });
        }
      }
    }); 
  };

  const HandleOrderVerify = (data: any) => {

    Swal.fire({
      title: "Would you like to shipped the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, Shipped it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const res = verifyOrder(data)
        if (!res) {
          Swal.fire({
            title: `Shipped!`,
            text: `Your Order Not Shipped.`,
            icon: "success"
          });
        }else{
          Swal.fire({
            title: `Shipped!`,
            text: `Your Order has been Shipped.`,
            icon: "success"
          });
        }
      }
    }); 
  };


  const columns: any = [
    {
      title: 'Customer Name',
      key: 'tid',
      render: (key: any) => {
        console.log(key)
        if(key?.user){
          return (
            <div>
              <h2>{key?.user?.name}</h2>
            </div>
          )
        }
      },
    },
    {
      title: 'Customer Email',
      key: 'tid',
      render: (key: any) => {

        if(key?.user){
          return (
            <div>
              <h2>{key?.user?.email}</h2>
            </div>
          )
        }
      },
    },
    {
      title: 'Transaction Id',
      key: 'tid',
      render: (key: any) => {

        if(key?.transaction?.id){
          return (
            <div>
              <h2>{key?.transaction?.id}</h2>
            </div>
          )
        }
      },
    },
    {
      title: 'Total Price',
      key: 'totalPrice',
      dataIndex: 'totalPrice',
    },
    {
      title: 'Quanity',
      key: 'tid',
      render: (key: any) => {

        console.log()

        if(key.products[0]){
          return (
            <div>
              <h2>{key.products[0].quantity}</h2>
            </div>
          )
        }
      },
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },{
      title: 'Action',
      key: 'x',
      render: (key: any) => {
       if(key.status == 'Pending'){
        return (
          <div className="space-x-3">
            <Button  size="small" type="primary" onClick={() => HandleOrderVerify(key?.transaction?.id)}>Order Verify</Button>
            <Button size="small" type="primary" onClick={() => HandleOrderStatus(key)}>Paid</Button>
          </div>
        )
       }else
       if(key.status == 'Paid'){
        return (
          <div>
            <h2>Shipped</h2>
          </div>
        )
       }
        
      },
    }
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default OrderData;
