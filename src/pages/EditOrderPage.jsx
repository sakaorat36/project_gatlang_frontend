export default function EditOrderPage() {
  return (
    <div className="bg-pink-200 min-h-screen">
      <div className="p-6 grid grid-cols-1 justify-center relative overflow-x-auto overflow-y-auto">
        <table className="table-auto bg-white w-full">
          <thead>
            <tr className="text-center">
              <th className="px-6 py-3">ID</th>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Pay Slip</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-orange-100 hover:font-semibold">
              <td className="text-center ">1</td>
              <td className="text-center ">123</td>
              <td className="p-4">ice-cream Vanilla</td>
              <td className="text-right">200</td>
              <td className="text-center ">URL</td>
              <td className="text-center ">
                <span className="text-green-500">PAID</span>
              </td>
              <td className="text-center ">COMPLETE</td>
            </tr>
            <tr className="bg-white border-b hover:bg-orange-100 hover:font-semibold">
              <td className="text-center ">2</td>
              <td className="text-center ">124</td>
              <td className="p-4">ice-cream Vanilla X2</td>
              <td className="text-right">200</td>
              <td className="text-center ">URL</td>
              <td className="text-center ">
                <span className="text-red-600">PROCESSING</span>
              </td>
              <td className="text-center ">COOKING</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
