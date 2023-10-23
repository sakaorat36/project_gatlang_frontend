export default function Modal({ slipURL }) {
  return (
    <dialog id="image-modal" className="modal">
      <div className="modal-box">
        <img src={slipURL} alt="slip" />
        <div className="modal-action flex flex-col items-center">
          <form method="dialog">
            <button className="btn text-white font-semibold rounded-full py-3 px-6 bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 hover:text-black">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
