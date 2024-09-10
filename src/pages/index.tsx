/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Video from "../components/Video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ video, posts }) {
  console.log('video', video, posts);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="header bg-black py-7 md:py-10 w-full">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex  items-center">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" className="h-3 md:h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="content w-full overflow-x-hidden">
        <div className="main-banner">
          <div className="slideshow block md:hidden">
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySlideshow"
            >
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner1.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner2.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner3.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner4.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner5.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner6.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner7.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner8.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/mobile/banner9.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img
                    src="/images/banners/mobile/banner10.jpg"
                    alt="banner"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slideshow hidden md:block">
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySlideshow"
            >
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner1.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner2.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner3.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner4.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner5.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner6.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner7.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner8.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banners/desktop/banner9.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img
                    src="/images/banners/desktop/banner10.jpg"
                    alt="banner"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="main-about py-8 md:py-24 bg-black">
          <div className="container mx-auto text-white px-5 md:px-10">
            <h1 className="mb-10 text-left text-[#E21D03] text-base md:text-[32px] leading-snug font-bold">
              RUNHOOD IS A MEDIA COMMITTED TO FOSTERING THE GROWTH OF SPORTS,
              WITH A PARTICULAR FOCUS ON PROMOTING RUNNING IN INDONESIA.
            </h1>
            <div className="flex justify-end">
              <div className="w-11/12 md:w-9/12">
                <p className="text-sm md:text-xl mb-4">
                  We are here to inspire as many people as possible through mass
                  sports participation and are committed to support the
                  nation&lsquo;s sporting excellence.
                </p>
                <p className="md:text-xl">
                  We believe that sport is the foundation for our nation&lsquo;s
                  well-being, unity, education, and many other positive impacts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Video video={video} />
        <div className="main-latest pb-5 md:pb-24 pt-0 md:pt-12">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-3 md:mb-16 mx-5 md:mx-0 px-0 md:px-10 pt-5 border-t md:border-0">
              <h2 className="text-2xl md:text-[50px] font-[900]">LATEST</h2>
              <a
                href="https://www.instagram.com/runhoodmag/"
                className="uppercase hidden md:flex items-center gap-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                Follow along on Instagram{" "}
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
          <div className="main-carousel">
            <div className="inner-carousel">
              <Swiper
                slidesPerView={5}
                spaceBetween={0}
                loop={true}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest1.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest2.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest3.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest4.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest5.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest1.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest2.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest3.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest4.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="carousel-item">
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <img src="/images/latest5.jpg" alt="latest" />
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="px-5 md:px-0 pt-5 md:pt-0">
            <a
              href="https://www.instagram.com/runhoodmag/"
              className="uppercase flex items-center gap-2 md:hidden text-sm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Follow along on Instagram{" "}
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
      <div className="main-contact bg-[#E21D03] py-5 md:py-28 w-full">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex items-start md:items-center md:justify-between flex-col md:flex-row">
            <h2 className="text-white font-[900] text-xl md:text-[50px] leading-tight uppercase mb-2 md:m-0">
              Connect With Us
            </h2>
            <a
              href="mailto:admin@athleticacompany.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-white bg-black py-3 px-6 font-bold text-sm md:text-base"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="main-footer bg-black py-14 md:py-28 w-full">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-5 items-start">
            <div className="col-span-7 md:col-span-full">
              <h3 className="text-white text-2xl md:text-[32px] text-left leading-tight font-bold">
                Discover
                <br />
                The Running
                <br />
                Culture
                <br />
                in Indonesia
              </h3>
            </div>
            <div className="links flex flex-col gap-2 items-start justify-end order-1 md:order-2 md:hidden">
              <a
                href="https://www.youtube.com/@RunhoodMag/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Youtube
              </a>
              <a
                href="https://www.instagram.com/runhoodmag/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@runhoodmag?lang=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tiktok
              </a>
              <a
                href="https://www.strava.com/clubs/286856"
                rel="noopener noreferrer"
                target="_blank"
              >
                Strava
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 md:mt-20 gap-10">
            <div className="copyright text-white font-bold order-2 md:order-1 w-1/2 md:w-full">
              &copy; 2024 RUNHOOD. All Rights Reserved.
            </div>
            <div className="links gap-4 items-center justify-end order-1 md:order-2 hidden md:flex">
              <a
                href="https://www.youtube.com/@RunhoodMag/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Youtube
              </a>
              <a
                href="https://www.instagram.com/runhoodmag/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@runhoodmag?lang=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tiktok
              </a>
              <a
                href="https://www.strava.com/clubs/286856"
                rel="noopener noreferrer"
                target="_blank"
              >
                Strava

              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  // Fetch YouTube Video
  const YOUTUBE_API_KEY = 'AIzaSyAxwxP8RbucUE5ZbbsoTvcAsakhH76qI9I'; // Replace with your YouTube API key
  const YOUTUBE_CHANNEL_ID = 'UC96DJN2hL3qaLXJK5MKyuWQ'; // Replace with your channel ID

  const youtubeRes = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&order=date&part=snippet,id&type=video`
  );
  const youtubeData = await youtubeRes.json();
  const video = youtubeData.items.slice(0,5);

  // Fetch Instagram Posts
  // const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // Replace with your Instagram access token
  // const INSTAGRAM_USER_ID = 'YOUR_USER_ID'; // Replace with your Instagram User ID

  // const instagramRes = await fetch(
  //   `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_url&access_token=${INSTAGRAM_ACCESS_TOKEN}`
  // );
  // const instagramData = await instagramRes.json();
  // const posts = instagramData.data || [];

  return {
    props: {
      video,
      posts:null,
    },
    revalidate: 86400, // Revalidate every 24 hours (86400 seconds)
  };
}

