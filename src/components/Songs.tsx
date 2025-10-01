import React from "react";
import { Music, Headphones, Guitar } from "lucide-react";

const Songs = () => {
  return (
    <>
      <h2 className="mx-auto text-center pt-5 text-5xl font-bold header">
        Songs
      </h2>
      <div className="justify-center mx-auto mb-10">
        <h4 className="text-white text-center mb-10 pt-5 subhead">
          Listen while you work or play. Check out this music getting
          attention...
        </h4>
        <div className="max-w-10/12 mx-auto px-10">
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-lg font-bold opacity-60 tracking-wide subhead text-primary">
                Instruments learned by ear vs formal training
            </li>

            <li className="list-row">
              <div>
                <Music />
              </div>
              <div>
                <div className="font-bold">Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div>
              </div>
              <p className="list-col-wrap text-xs">
                "Remaining Reason" became an instant hit, praised for its
                haunting sound and emotional depth. A viral performance brought
                it widespread recognition, making it one of Dio Lupa’s most
                iconic tracks.
              </p>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </li>

            <li className="list-row">
              <div>
                <Headphones />
              </div>
              <div>
                <div className="font-bold">Ellie Beilish</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Bears of a fever
                </div>
              </div>
              <p className="list-col-wrap text-xs">
                "Bears of a Fever" captivated audiences with its intense energy
                and mysterious lyrics. Its popularity skyrocketed after fans
                shared it widely online, earning Ellie critical acclaim.
              </p>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </li>

            <li className="list-row">
              <div>
                <Guitar />
              </div>
              <div>
                <div className="font-bold">Sabrino Gardener</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Cappuccino
                </div>
              </div>
              <p className="list-col-wrap text-xs text-black">
                "Cappuccino" quickly gained attentio for its smooth melody and
                relatable themes. The song’s success propelled Sabrino into the
                spotlight, solidifying their status as a rising star.
              </p>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Songs;
