export default function SaranPage() {
  return (
    <div className="h-fit w-5/6 md:w-4/6 mx-auto mt-20 min-h-max">
      <div className="px-10 py-8 ">
        <p className="text-2xl font-bold  text-center">Saran Untuk Kami</p>
      </div>
      <form action="w-full">
        <div className="form-control w-full flex flex-row gap-4 ">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full rounded-none"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full rounded-none"
            />
          </div>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Masukan</span>
          </label>
          <textarea
            placeholder="tulis pesan anda disini..."
            className="textarea textarea-bordered textarea-lg w-full rounded-none"
          ></textarea>
        </div>
        <button className="btn btn-outline w-full rounded-none">Submit</button>
      </form>
    </div>
  );
}
