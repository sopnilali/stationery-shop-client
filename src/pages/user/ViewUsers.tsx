import { useGetWithMeQuery } from "@/Redux/features/user/userApi";

const ViewUsers = () => {

      const {data: UserData} = useGetWithMeQuery(undefined)


  return (
    <div className="p-4">
  <h1 className="text-2xl font-bold mb-4">User Details</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
      <p>
        <strong>Name:</strong> {UserData?.data?.name}
      </p>
      <p>
        <strong>Email:</strong> {UserData?.data?.email}
      </p>
      <p>
        <strong>Role:</strong> {UserData?.data?.role}
      </p>
      <p>
        <strong>Status:</strong> {UserData?.data?.isBlocked ? 'Blocked' : 'Active'}
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <p>
        <strong>Phone:</strong> {UserData?.data?.phone}
      </p>
      <p>
        <strong>Address:</strong> {UserData?.data?.address}
      </p>
      <p>
        <strong>City:</strong> {UserData?.data?.city}
      </p>
    </div>
  </div>
  {UserData?.data?.photoURL && (
    <div className="mt-4">
      <img className="w-48 h-48 rounded-full object-cover" src={UserData?.data?.photoURL} alt="" />
    </div>
  )}
</div>
  );
};

export default ViewUsers;
