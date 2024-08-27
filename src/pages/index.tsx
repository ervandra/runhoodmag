/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="header bg-black py-10 w-full">
        <div className="container mx-auto px-10">
          <div className="flex justify-center md:justify-between items-center">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" width="146" />
            </div>
          </div>
        </div>
      </div>
      <div className="content w-full overflow-x-hidden">
        <div className="main-banner">
          <div className="slideshow">
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
                  <img src="/images/banner1.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner2.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner3.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner4.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner5.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner6.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner7.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner8.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner9.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner10.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner11.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner12.jpg" alt="banner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item">
                  <img src="/images/banner13.jpg" alt="banner" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="main-about py-24 bg-black  px-10">
          <div className="container mx-auto text-white">
            <h1 className="mb-10 text-left text-[#E21D03] text-2xl md:text-[32px] leading-snug font-bold">
            RUNHOOD IS A MEDIA COMMITTED TO FOSTERING THE GROWTH OF SPORTS, WITH A PARTICULAR FOCUS ON PROMOTING RUNNING IN INDONESIA.
            </h1>
            <p className="md:text-xl mb-4">We are here to inspire as many people as possible through mass sports participation and are committed to support the nation&lsquo;s sporting excellence.</p>
            <p className="md:text-xl">We believe that sport is the foundation for our nation&lsquo;s well-being, unity, education, and many other positive impacts. </p>
          </div>
        </div>
        <div className="main-watch pt-24 pb-12 px-10">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl md:text-[50px] font-[900]">WATCH</h2>
              <a
                href="https://www.youtube.com/@RunhoodMag"
                className="uppercase"
                rel="noopener noreferrer"
                target="_blank"
              >
                All Videos 🡒
              </a>
            </div>
            <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="col-span-full md:col-span-7">
                <div className="watch-item watch-large">
                  <div className="watch-thumbnail mb-5">
                    <a
                      href="https://www.youtube.com/watch?v=t1jMNh3UQLM"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="/images/watch1.jpg"
                        alt="watch"
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <p className="watch-category mb-4 text-xl">
                    Running For Dummies
                  </p>
                  <h3 className="watch-title mb-4 text-xl md:text-[32px] font-bold uppercase">
                    <a
                      href="https://www.youtube.com/watch?v=t1jMNh3UQLM"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      BISA GAK SIH LARI TANPA SMARTWATCH?
                    </a>
                  </h3>
                  <p className="watch-description text-xl">
                    Kenapa sih, sekarang semua pelari pake smartwatch? Emang
                    seperlu itu ya? 🤔 Eits, makanya di video ini Minhood
                    jelasin riset tentang smartwatch dan apa aja kegunaannya.
                  </p>
                </div>
              </div>
              <div className="col-span-full md:col-span-5 flex flex-col gap-5">
                <div className="watch-item watch-medium grid grid-cols-2 gap-4 items-center">
                  <div className="watch-thumbnail">
                    <a
                      href="https://www.youtube.com/watch?v=EM8juFYLrRk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="/images/watch2.jpg"
                        alt="watch"
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <h3 className="watch-title text-lg font-bold leading-tight uppercase">
                    <a
                      href="https://www.youtube.com/watch?v=EM8juFYLrRk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      AKHIRNYA PUMA KELUARIN SUPER TRAINER! | PUMA Deviate Nitro
                      3
                    </a>
                  </h3>
                </div>
                <div className="watch-item watch-medium grid grid-cols-2 gap-4 items-center">
                  <div className="watch-thumbnail">
                    <a
                      href="https://www.youtube.com/watch?v=XejzOYibuwQ"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="/images/watch3.jpg"
                        alt="watch"
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <h3 className="watch-title text-lg font-bold leading-tight uppercase">
                    <a
                      href="https://www.youtube.com/watch?v=XejzOYibuwQ"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      PELARI PEMULA HARUS TAU INI SEBELUM BELI JAM TANGAN LARI
                    </a>
                  </h3>
                </div>
                <div className="watch-item watch-medium grid grid-cols-2 gap-4 items-center">
                  <div className="watch-thumbnail">
                    <a
                      href="https://www.youtube.com/watch?v=gA85jHU1sWk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="/images/watch4.jpg"
                        alt="watch"
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <h3 className="watch-title text-lg font-bold leading-tight uppercase">
                    <a
                      href="https://www.youtube.com/watch?v=gA85jHU1sWk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      SEPATU SERBA BISA DARI PUMA | Unboxing PUMA Deviate Nitro
                      3
                    </a>
                  </h3>
                </div>
                <div className="watch-item watch-medium grid grid-cols-2 gap-4 items-center">
                  <div className="watch-thumbnail">
                    <a
                      href="https://www.youtube.com/watch?v=w2qKLTQifPs"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="/images/watch5.jpg"
                        alt="watch"
                        className="w-full h-auto"
                      />
                    </a>
                  </div>
                  <h3 className="watch-title text-lg font-bold leading-tight uppercase">
                    <a
                      href="https://www.youtube.com/watch?v=w2qKLTQifPs"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      REKOMENDASI ROTASI SEPATU GLOBAL TENGAH TAHUN 2024!
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-latest pb-24 pt-12">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl md:text-[50px] font-[900]">LATEST</h2>
              <a
                href="https://www.instagram.com/runhoodmag/"
                className="uppercase"
                rel="noopener noreferrer"
                target="_blank"
              >
                Follow along on Instagram 🡒
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
        </div>
      </div>
      <div className="main-contact bg-[#E21D03] py-28 w-full">
        <div className="container mx-auto px-10">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-[900] text-xl md:text-[50px] leading-tight uppercase m-0">
              Connect With Us
            </h2>
            <a
              href="mailto:admin@athleticacompany.com"
              rel="noopener noreferrer"
              target="_blank"
              className="text-white bg-black py-3 px-6 font-bold"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="main-footer bg-black py-28 w-full">
        <div className="container mx-auto px-10">
          <h3 className="text-white text-3xl md:text-[32px] text-center md:text-left leading-tight font-bold">
            Discover
            <br />
            The Running
            <br />
            Culture
            <br />
            in Indonesia
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center mt-20 gap-10">
            <div className="copyright text-white font-bold order-2 md:order-1">
              &copy; 2024 RUNHOOD. All Rights Reserved.
            </div>
            <div className="links flex gap-4 items-center justify-end order-1 md:order-2">
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
