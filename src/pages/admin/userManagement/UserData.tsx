import { useGetAllUserQuery, useUpdateStatusMutation } from "@/Redux/features/user/userApi";
import { TUser } from "@/types/User.type";
import { Button, Table } from "antd";
import Swal from 'sweetalert2'

export type TTableData = Pick<
  TUser,
  'name' | 'email' | 'phone' | 'address' | 'role' | 'isBlocked'>;


const UserData = () => {
  const {data: ProductsData, isFetching,} : any = useGetAllUserQuery(undefined)

  const [updateStatus] = useUpdateStatusMutation()


  const tableData = ProductsData?.data?.map(
    ({ _id , name, email, phone, address, role, isBlocked } : any) => ({
      key: _id,
      name,
      email,
      phone,
      address,
      role,
      isBlocked
    })
  );

  

  const HandleStatus = (data: any) => {

    Swal.fire({
      title: "Are you sure?",
      text: "This account not activate!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, Deactivate it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const res : any = updateStatus(data.key)
        if (res) {
          Swal.fire({
            title: `Deactivated!`,
            text: `Your Account has been Deactivated.`,
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
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    ,
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
    },
    {
      title: 'Status',
      key: 'x',
      render: (key: any) => {

        if(key.isBlocked == true) {

          return (
            <div>
              <h2>Not Active</h2>
            </div>
          );
        }else{
          return (
            <div>
              <Button onClick={()=>HandleStatus(key)}>Active</Button>
            </div>
          );
        }
        
      },
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default UserData;
