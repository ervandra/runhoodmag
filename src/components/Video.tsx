import react from "react";

export type VideoType = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export default function Video({ video }: { video: VideoType[] }) {
  const firstVideo = video[0];
  const otherVideos = video.slice(1, 4);
  return (
    <div className="main-watch pt-8 md:pt-24 pb-5 md:pb-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-5 md:mb-16 px-5 md:px-10">
          <h2 className="text-2xl md:text-[50px] font-[900]">WATCH</h2>
          <a
            href="https://www.youtube.com/@RunhoodMag"
            className="uppercase hidden md:flex items-center gap-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            All Videos{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="mb-5 md:mb-16 grid grid-cols-1 md:grid-cols-12 gap-10 px-0 md:px-10">
          <div className="col-span-full md:col-span-7">
            <div className="watch-item watch-large">
              <div className="watch-thumbnail mb-5">
                <a
                  href={`https://www.youtube.com/watch?v=${firstVideo.id.videoId}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={firstVideo.snippet.thumbnails.medium.url}
                    alt="watch"
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="px-5 md:px-0">
                <p className="watch-category mb-2 md:mb-4 text-xs md:text-xl uppercase">
                  {firstVideo.snippet.channelTitle}
                </p>
                <h3 className="watch-title mb-4 text-2xl md:text-[32px] font-bold uppercase">
                  <a
                    href={`https://www.youtube.com/watch?v=${firstVideo.id.videoId}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {firstVideo.snippet.title}
                  </a>
                </h3>
                <p className="watch-description text-sm md:text-xl leading-tight">
                  {firstVideo.snippet.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-5 flex flex-col gap-4 md:gap-5 px-5 md:px-0">
            {otherVideos.map((item, index) => (
              <div
                className="watch-item watch-medium grid grid-cols-2 gap-4 items-center"
                key={index}
              >
                <div className="watch-thumbnail">
                  <a
                    href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={item.snippet.thumbnails.medium.url}
                      alt="watch"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
                <h3 className="watch-title text-sm md:text-lg font-bold leading-tight uppercase">
                  <a
                    href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.snippet.title}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 md:px-0">
          <a
            href="https://www.youtube.com/@RunhoodMag"
            className="uppercase flex items-center gap-2 md:hidden text-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            All Videos{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
