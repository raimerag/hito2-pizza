const NavBar = () => {
  const total = 25000;
  const token = false;
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm py-0">
        <div className="flex-1">
          <h2 className=" text-xl">
            <button className="cursor-pointer">¡Pizzeria Mamma Mia!</button>
          </h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-xs mt-2">
            <li>
              <a>🍕Home</a>
            </li>
            {token ? (
              <>
                <li>
                  <a>🔓Profile</a>
                </li>
                <li>
                  <a>🔒Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a>🔐Register</a>
                </li>
                <li>
                  <a>🔐Login</a>
                </li>
              </>
            )}

            <li>
              <button className="btn btn-dash ml-1 text-xs">{total}</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
