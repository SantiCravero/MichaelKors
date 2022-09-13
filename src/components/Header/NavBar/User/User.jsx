import React from "react";

function User() {
  return (
    <div className="relative ml-3">
      <button
        type="button"
        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User icon"
        />
      </button>
    </div>
  );
}

export default User;
