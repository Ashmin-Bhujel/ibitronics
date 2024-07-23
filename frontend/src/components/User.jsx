import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div className="flex w-full p-6 rounded-lg shadow-md bg-light max-lg:flex-col max-lg:justify-center max-lg:gap-4 justify-evenly">
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">ID:</p>
        <p className="text-center max-lg:text-left">{user.id}</p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Username:</p>
        <p className="text-center max-lg:text-left">{user.username}</p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Full Name:</p>
        <p className="text-center max-lg:text-left">{user.fullName}</p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Email:</p>
        <p className="text-center max-lg:text-left">{user.email}</p>
      </div>
      <div className="max-lg:flex max-lg:gap-2">
        <p className="font-bold text-center max-lg:text-left">Type:</p>
        <p className="text-center max-lg:text-left">
          {user.isAdmin ? "Admin" : "User"}
        </p>
      </div>
    </div>
  );
};

export default User;

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    isAdmin: PropTypes.number,
  }),
};
