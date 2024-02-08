import React from "react";

const NotificationModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="notificationModal"
        tabIndex="-1"
        aria-labelledby="notificationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="notificationModalLabel">
                What's new on app
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card notification-content">
                <div className="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;
