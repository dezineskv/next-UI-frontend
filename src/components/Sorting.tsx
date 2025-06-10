import React from "react";

const Sorting = () => {

  return (
    <>
      <h2 className="mx-auto text-center pt-5 text-5xl font-bold text-amber-500">
        Greatness Awaits
      </h2>
      <div className="justify-center mx-auto mt-5 mb-10 pb-10 max-w-9/12">
        <div className="bg-base-100 shadow-base-300/20 rounded-box grid w-full grid-cols-1 gap-5 p-4 shadow-sm sm:grid-cols-2">
          <div>
            <p className="text-base-content text-base font-semibold">
              Pending Tasks
            </p>
            <ul
              className="divide-base-content/25 divide-y *:cursor-move *:p-3 *:flex *:items-center"
              id="pending-tasks"
            >
              <li>
                <span>Design new company logo.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-11.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Prepare quarterly report.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Schedule team meeting.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-13.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Update client database.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-14.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Plan marketing campaign.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-15.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-base-content text-base font-semibold">
              Completed Tasks
            </p>
            <ul
              className="divide-base-content/25 divide-y *:cursor-move *:p-3 *:flex *:items-center"
              id="completed-tasks"
            >
              <li>
                <span>Launch new website.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-16.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Finalize budget proposal.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Conduct employee training.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-18.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Organize office relocation.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-19.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
              <li>
                <span>Attend industry conference.</span>
                <div className="avatar ms-auto">
                  <div className="size-6 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-20.png"
                      alt="avatar"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
