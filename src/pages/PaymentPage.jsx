export default function PaymentPage() {
  return (
    <div className=" bg-pink-200 w-full">
      <div>
        <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
          <button> &lt; Payment</button>
        </div>
        <div></div>
      </div>
      <div></div>
      <div className="flex justify-end m-4 y-2">
        <button className="btn btn-warning btn-wide text-2xl hover:bg-yellow-200 font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
}
