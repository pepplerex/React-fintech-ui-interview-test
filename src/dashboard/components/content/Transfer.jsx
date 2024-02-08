import React from "react";

const Transfer = () => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasTransafer"
        aria-labelledby="offcanvasTransaferLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasTransaferLabel">
            Transfer
          </h5>
          <p>
            Send money to your family & friends directly from your app wallet
            balance
          </p>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
