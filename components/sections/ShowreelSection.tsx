import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

export default function ShowreelSection() {
  return (
    <section id="showreel" className="p-0 relative overflow-hidden">
      <div
        className="video-container relative overflow-hidden"
        style={{ height: '110vh', clipPath: 'inset(6% 4% 6% 4%)' }}
      >
        <video
          id="showreelVideo"
          playsInline
          muted
          autoPlay
          loop
          preload="metadata"
          className="absolute inset-0 w-full h-full block will-change-transform"
          style={{ objectFit: 'cover', objectPosition: 'center 0%' }}
        >
          <source src="https://pub-936a2a79cb9b473fabc46e4ad35a3e2e.r2.dev/demo-reel.mp4" type="video/mp4" />
        </video>
        <div
          id="videoOverlay"
          className="video-overlay absolute inset-0 flex items-center justify-center cursor-pointer z-[2] transition-[background,opacity] duration-300 text-white hover:bg-[rgba(217,26,33,0.3)]"
          style={{ background: "rgba(217,26,33,0.1)" }}
        >
          <FontAwesomeIcon icon={faPlay} className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] h-12 w-12" />
        </div>
        <button
          id="soundToggle"
          className="sound-toggle absolute bottom-5 right-5 z-[3] border-none text-white p-3 rounded-full cursor-pointer hidden [&.show]:block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <FontAwesomeIcon icon={faVolumeMute} id="soundIconMute" />
          <FontAwesomeIcon icon={faVolumeUp} id="soundIconUp" style={{ display: "none" }} />
        </button>
      </div>
    </section>
  );
}
