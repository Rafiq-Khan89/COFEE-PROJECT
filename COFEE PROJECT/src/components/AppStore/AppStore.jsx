import React from "react";
import BgPng from "../../assets/Website/coffee-beans-bg.png";
import AppStoreImg from "../../assets/Website/app_store (1).png";
import PlayStoreImg from "../../assets/Website/play_store (1).png";


const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
    return (
      <>
        <div className="py-14" style={backgroundStyle}>
          <div className="container">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
              <div data-aos="fade-up"  className="space-y-6 max-w-xl max-auto" >
                {/* text section */}
                <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                  Coffee Cafe is available for Android and IOS
                </h1>
                {/* img section */}
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                  <a href="#">
                    <img
                      src={PlayStoreImg}
                      alt="Play store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={AppStoreImg}
                      alt="App store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                  </a>
                </div>
              </div>
              {/* Empty div */}
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AppStore;