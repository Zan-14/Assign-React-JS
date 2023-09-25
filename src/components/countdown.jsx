// /* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";

// function Countdown({ seconds }) {
//     const [countdown, setCountdown] = useState(seconds);
//     const timerId = useRef();

//     useEffect(() => {
//       timerId.current = setInterval(() => {
//         setCountdown(prev => prev - 1);
//       }, 1000);
//       return () => clearInterval(timerId.current);
//     }, []);

//     useEffect(() => {
//       if (countdown <= 0) {
//         clearInterval(timerId.current);
//         setAfterCountdown(true);
//       }
//     });

//     return <span>{countdown}</span>;
//   }
// }

// export default Countdown;
