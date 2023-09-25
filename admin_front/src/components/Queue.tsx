import React from "react";

interface QueueItem {
  id: string;
  text: string;
  time: number; // time in seconds
  donate: number;
  timestamp: number;
  imageSrc?: string; // URL to the image (optional)
  username?: string; // Username (optional)
}

interface QueueComponentProps {
  queue: QueueItem[];
  handleRemoveClick: (itemId: string) => void;
}

const QueueComponent: React.FC<QueueComponentProps> = ({
  queue,
  handleRemoveClick,
}) => {
  return (
    <div>
      {queue.map((item) => (
        <div
          key={item.id}
          className="border-solid border-black border-2 rounded-md p-2 my-1 flex flex-row justify-around"
        >
          <div id="Username-Usertext">
            {item.username && (
              <h2
                id="Username"
                className="text-dark-purple-highlight font-bold "
              >
                @{item.username}
              </h2>
            )}
            <h3 id="Usertext" className="text-center overflow-y-auto h-16 w-80">
              {item.text}
            </h3>
          </div>
          {item.imageSrc && (
            <div id="image" className=" mx-4">
              <img
                className="max-h-20 rounded-lg"
                src={item.imageSrc}
                alt={`Image for ${item.username}`}
              />
            </div>
          )}
          <div id="TimeDonateButton">
            <div id="time" className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95l-1.41 1.41L9 10.41z"
                />
              </svg>
              <div id="time-formatted" className="mx-2">
                {`${Math.floor(item.time / 60)
                  .toString()
                  .padStart(2, "0")} : 
                ${(item.time % 60).toString().padStart(2, "0")}`}
              </div>
            </div>
            <div id="Donate" className="flex flex-row my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666ZM23 24a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z" />
                  <path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628c.212-.114.44-.231.684-.35Zm17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002ZM16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.438-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274Zm-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916Z" />
                </g>
              </svg>
              <div id="donate-formatted" className="mx-2">
                {item.donate.toLocaleString()}
              </div>
            </div>
            <button
              onClick={() => handleRemoveClick(item.id)}
              className="bg-red-cancel hover:bg-dark-red-cancel text-white px-4 py-1  rounded-full flex flex-row items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M10 5h4a2 2 0 1 0-4 0ZM8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5H8.5Zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576l1.158 11.967Z"
                />
              </svg>
              <div className="ml-2">ลบ</div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QueueComponent;
