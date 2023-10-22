// import cone from "../assets/icecreamCone.png";

export default function Card({ productName, productImage }) {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-6 w-96 hover:bg-orange-100">
        <figure className="w-36 ">
          <img src={productImage} alt="Icecream Cone" />
        </figure>
        <div className="card-body justify-between items-center  ">
          <h2 className="card-title">{productName}</h2>

          <div className="card-actions justify-end">
            <div className="flex gap-4 px-4  justify-between items-center">
              <button className="btn btn-warning btn-xs hover:bg-yellow-200">
                +
              </button>
              <button className="btn btn-warning">0</button>
              <button className="btn btn-warning btn-xs hover:bg-yellow-200">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
