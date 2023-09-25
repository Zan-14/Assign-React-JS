/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { QuizSection } from "./quiz-section";

const HeroSection = () => {
  const [afterCountdown, setAfterCountdown] = useState(false);

  function Countdown({ seconds }) {
    const [countdown, setCountdown] = useState(seconds);
    const timerId = useRef();

    useEffect(() => {
      timerId.current = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
      if (countdown <= 0) {
        clearInterval(timerId.current);
        setAfterCountdown(true);
      }
    });

    return <span className="text-4xl ">{countdown}</span>;
  }

  return (
    <div
      id="home"
      className="flex flex-col h-fit px-10 py-10 items-center text-grayLight lg:flex-row xl:h-[95vh]"
    >
      <div className="lg:hidden py-10 text-center text-4xl font-extrabold lg:p-0 lg:text-6xl lg:text-left">
        <h1>Hmmm.... </h1>
      </div>

      {/* <!-- image --> */}
      <div className="flex justify-center pb-5  lg:pt-24 lg:w-4/6 xl:w-3/6 xl:pl-20 xl:shrink-0">
        <img
          className="object-cover"
          src="/assets/img/PP 1 no BG slate.png"
          alt="Hero-Image"
        />
      </div>

      {afterCountdown ? (
        /* <!-- text --> */
        /* <!-- after 10 seconds --> */
        <div>
          <QuizSection />
        </div>
      ) : (
        /* <!-- before 10 seconds --> */
        <div className="flex-col items-center lg:max-w-xl lg:pt-32 xl:p-0">
          <div className="hidden py-4 text-center text-4xl font-extrabold lg:inline-block lg:p-0 lg:text-6xl lg:text-left">
            <h1 className="">Hmmm.... </h1>
          </div>
          <div className="lg:p-4 text-justify sm:text-left">
            <p className="pb-4 text-2xl lg:text-xl text-center lg:text-left font-bold underline">
              you have seconds <Countdown seconds={10} /> to read this.
            </p>
            <p className="lg:text-lg lg:text-left">
              I am{" "}
              <span className="font-semibold">
                Fau
                <span className="text-3xl font-bold">ZAN</span> Jumdinhar M
              </span>
              . The &quot;M&quot; is not important. Anyway, just call me
              <span className="text-3xl font-bold">ZAN</span>.<br />
              <span className="font-bold underline">23</span> Years old single
              who has a bachelor of aquatic resources management.
              <br /> I live in a town called{" "}
              <span className="font-bold underline">Blora</span>. You maybe
              don&apos;t know where is it. Blora is a{" "}
              <span className="font-bold underline">regency</span> in Central
              Java, Indonesia.
              <br />
              <br /> No computer science degree or programming experience, but{" "}
              <b>confident</b> in the ability and passion to learn something new
              and become good at it. An open-to-criticism individual who will
              adapt quickly and take any chance to gain more{" "}
              <b>software engineering knowledge</b>.
              <span className="text-xs">
                {" "}
                Graduated from Universitas Gadjah Mada a year ago and currently
                learning at HariSenin.com bootcamp
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
