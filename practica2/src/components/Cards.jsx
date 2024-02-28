import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <section className="bg-pattern-characters-red py-28">
      <div className="mx-auto gap-5 p-3 lg:container md:flex md:w-full 2xl:w-3/5">
        <div className="left bg-character-mario mx-auto w-5/6 bg-contain bg-top bg-no-repeat pt-52 md:w-1/2">
          <div className="card mx-auto mt-72 overflow-hidden rounded-2xl bg-white text-center xl:w-4/5 2xl:w-5/6">
            <div className="cover bg-black">
              <video src="videos/video01.mp4" autoPlay loop muted></video>
            </div>
            <div className="content bg-wave-pattern relative -top-3 bg-repeat-x">
              <h3 className="py-10 text-4xl font-black">Play Together</h3>
              <p className="text-xl">
                Work with (or against) your friends and family*
              </p>
              <Link to="WatchTrailer" className="button group">
                Watch the Trailer
                <span className="arrow arrow-group "></span>
              </Link>
            </div>
            <div className="dots flex justify-between p-4">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="right mx-auto w-5/6 text-center md:w-1/2">
          <h2 className="py-8 text-6xl font-black text-white">Available Now</h2>
          <p className="mx-auto w-4/5 py-10 text-2xl font-bold text-white">
            One of the best Mario games ever...
          </p>
          <p className="mx-auto w-4/5 py-10 text-4xl font-black text-white">
            Team up for a paws-itvely adorable adventure!
          </p>
          <p className="mx-auto w-4/5 text-center text-white">
            Bowser is up to his old tricks again only Mario and his friends can
            save the day! Use power-ups like the Super Bell, which grants
            catlike abilities like climbing and scratching, to overcome Bowser
            and his MediaElementAudioSourceNode.
          </p>
          <div className="card mx-auto mt-16 overflow-hidden rounded-2xl bg-white text-center xl:w-4/5 2xl:w-5/6">
            <div className="cover bg-black">
              <video src="videos/video02.mp4" autoPlay loop muted></video>
            </div>
            <div className="content bg-wave-pattern relative -top-3 bg-repeat-x">
              <h3 className="py-8 text-4xl font-black">Play Together</h3>
              <p className="text-xl">
                Work with (or against) your friends and family*
              </p>
              <Link to="TakeLook" className="button group">
                Take a Look
                <span className="arrow arrow-group "></span>
              </Link>
            </div>
            <div className="dots flex justify-between p-4">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
