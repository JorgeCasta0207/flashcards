import placeholder from "../assets/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg";

const Profile = () => {
  return (
    <div className="max-w-[1100px] mx-auto mt-6 p-2">
      <div className="w-fit mx-auto">
        <img
          className="w-32 h-32 rounded-full mx-auto mb-4"
          src={placeholder}
          alt="Rounded avatar"
        ></img>
        <div className="py-2 px-8 bg-accent w-fit rounded-full border-2 border-black">
          <h3 className="text-lg font-bold">xXDeath | Angel| GamerXx</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-accent p-6 mt-4 rounded-xl w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-md font-bold">Change Username</h2>
        <input
          className="border-b-2 bg-transparent text-black placeholder-black"
          placeholder="Enter new username"
        />
        <input
          className="border-b-2 bg-transparent text-black placeholder-black"
          placeholder="Enter password"
        />
        <button className="text-white bg-purple-900 w-28 rounded-full p-2 mx-auto">
          Submit
        </button>
      </div>
      <div className="flex flex-col gap-4 bg-accent p-6 mt-4 rounded-xl w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-md font-bold">Change Password</h2>
        <input
          className="border-b-2 bg-transparent text-black placeholder-black"
          placeholder="Enter old password"
        />
        <input
          className="border-b-2 bg-transparent text-black placeholder-black"
          placeholder="Enter new password"
        />
        <input
          className="border-b-2 bg-transparent text-black placeholder-black"
          placeholder="Confirm new password"
        />
        <button className="text-white bg-purple-900 w-28 rounded-full p-2 mx-auto">
          Submit
        </button>
      </div>
      <div className="mx-auto w-fit">
        <button className="text-red-500 bg-white w-45 rounded-full px-5 py-2 mt-5">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
