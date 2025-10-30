import { useNavigate } from "react-router";
import { assets } from "../assets/assets";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-cover bg-no-repeat min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="reload.bg.mp4" type="video/mp4" />
      </video>

      <div className="px-4 text-center mb-6 z-10">
        <h1 className="text-5xl sm:text-6xl xl:text-6xl font-semibold mx-auto leading-[1.2] text-white">
          Unlock the
          <br />
          Full Potential <br /> of <span className="bg-primary">Your Self</span>
        </h1>

        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-white">
          Aigis.Ai translates your thoughts into Arcana-aligned insights,
          compelling visualizations, and stat-based improvement goals.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="font-semibold bg-primary text-white px-7 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button
          onClick={() => navigate("/ai")}
          className="font-semibold bg-white px-10 py-3 border-gray-300 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Watch demo
        </button>
      </div>

      <div className="flex items-center gap-4 mt-8 mx-auto text-white">
        <img src={assets.user_group} alt="Group of users" className="h-8" />
        Trusted by 8k+ people
      </div>
    </div>
  );
}
