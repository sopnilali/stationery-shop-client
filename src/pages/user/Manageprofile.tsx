import { useGetWithMeQuery } from "@/Redux/features/user/userApi";


// src/components/ManageUser/ManageUser.tsx
const ManageUser: React.FC = () => {

  const {data: UserData, isLoading} = useGetWithMeQuery(undefined)

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      {/* User Listing Table */}
      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Email
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Address
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        City
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Role
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Status
      </th>
      <th scope="col" className="px-6 py-3 bg-gray-50"></th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {/* Loop through users */}
      <tr key={UserData?.data?._id}> 
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            {UserData?.data.photoURL && (
              <img className="h-10 w-10 rounded-full object-cover" src={UserData?.data?.photoURL} alt="" />
            )}
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{UserData?.data?.name}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{UserData?.data?.email}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{UserData?.data?.address}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{UserData?.data?.city}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {UserData?.data?.role}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {user.isBlocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}">
            {UserData?.data?.isBlocked ? 'Blocked' : 'Active'}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href={`/user/view-user/${UserData?.data?._id}`} className="text-blue-600 hover:text-blue-900">View</a> 
        </td>
      </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default ManageUser;