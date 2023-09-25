// import React from 'react'

import { useState } from "react";

export const QuizSection = () => {
  // Properties
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quizQuestions = [
    // Question 1
    {
      question: "1. What is my nickname?",
      options: [
        {
          id: 0,
          text: "Har",
          isCorrect: false,
        },
        {
          id: 1,
          text: "M",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Fauza",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Zan",
          isCorrect: true,
        },
      ],
    },
    // Question 2
    {
      question: "2. What is my full name?",
      options: [
        {
          id: 0,
          text: "Fauzan Juminhar M",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Fauza Jumdinar M",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Fauzan Jumdinhar M",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Everything is wrong",
          isCorrect: false,
        },
      ],
    },
    // Question 3
    {
      question: "3. How old am I?",
      options: [
        {
          id: 0,
          text: "23",
          isCorrect: true,
        },
        {
          id: 1,
          text: "25",
          isCorrect: false,
        },
        {
          id: 2,
          text: "22",
          isCorrect: false,
        },
        {
          id: 3,
          text: "24",
          isCorrect: false,
        },
      ],
    },
    // Question 4
    {
      question: "4. Where do I live?",
      options: [
        {
          id: 0,
          text: "Jakarta",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Blitar",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Blora",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Bandung",
          isCorrect: false,
        },
      ],
    },
    // Question 5
    {
      question: "5. I graduated from...",
      options: [
        {
          id: 0,
          text: "Universitas Gunadarma",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Universitas Gadjah Mada",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Universitas Gunungjati",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Institut Teknologi Bandung",
          isCorrect: false,
        },
      ],
    },
    // Question 6
    {
      question: "6. Who is the organizer of the bootcamp that I joined?",
      options: [
        {
          id: 0,
          text: "Harisenin.com",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Hariselasa.com",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Harirabu.com",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Harisabtu.com",
          isCorrect: false,
        },
      ],
    },
    // Question 7
    {
      question:
        "7. What is the name of the CSS framework that give the user the flexibility to create a component by inputing it on class attribute?",
      options: [
        {
          id: 0,
          text: "Bootstrap",
          isCorrect: false,
        },
        {
          id: 1,
          text: "React",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Vite",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Tailwind",
          isCorrect: true,
        },
      ],
    },
    // Question 8
    {
      question:
        "8. Based on question number 6, how long is the duration of the bootcamp?",
      options: [
        {
          id: 0,
          text: "3 months",
          isCorrect: false,
        },
        {
          id: 1,
          text: "6 months",
          isCorrect: true,
        },
        {
          id: 2,
          text: "9 months",
          isCorrect: false,
        },
        {
          id: 3,
          text: "1 year",
          isCorrect: false,
        },
      ],
    },
    // Question 9
    {
      question: "9. Where can I attend this bootcamp?",
      options: [
        {
          id: 0,
          text: "Jakarta",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Blora",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Anywhere",
          isCorrect: true,
        },
        {
          id: 3,
          text: "HariSenin Tower",
          isCorrect: false,
        },
      ],
    },
    // Question 10
    {
      question:
        "10. How many times did you refresh the page before reaching this question?",
      options: [
        {
          id: 0,
          text: "0-2 times",
          isCorrect: true,
        },
        {
          id: 1,
          text: "4-6 times",
          isCorrect: false,
        },
        {
          id: 2,
          text: "7-9 times",
          isCorrect: false,
        },
        {
          id: 3,
          text: "10 times or more",
          isCorrect: false,
        },
      ],
    },
  ];

  //   Functions
  const optionClicked = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
  };

  return (
    // Section and background
    <div
      id="quiz"
      className="flex flex-col px-10 py-10 justify-center items-center text-black xl:flex-row sm:h-screen rounded-es-full"
    >
      {showFinalResults ? (
        /* Result section */
        <div
          className="flex h-4/5  px-10 py-10 justify-center items-center text-black"
          id="result"
        >
          <div className="flex flex-col w-5/6 xl:w-5/6 bg-white rounded border-8 border-black items-center justify-center">
            <div className="flex flex-col justify-center text-center py-5 px-10 ">
              <h1 className="text-3xl lg:text-6xl font-bold text-slate-900 py-2 underline underline-offset-8">
                Result
              </h1>
              <p className="text-lg lg:text-3xl pt-3">Your Score is</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center py-2 lg:py-5 xl:pb-5 px-16">
              <h1 className="text-2xl lg:text-4xl font-bold text-slate-900 py-2 underline underline-offset-8">
                {score} / 10
              </h1>
              <p className="text-sm lg:text-base pt-3 pb-5">
                Congrats and thank you for doing the quiz! &#10024;{" "}
              </p>
            </div>
            <div className="flex justify-between pb-10">
              <button
                onClick={() => restartQuiz()}
                className="py-2 px-4 rounded-lg bg-grayDarker text-white font-semibold hover:bg-slate-900"
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Section */
        <div className="flex flex-col xl:flex-row w-full xl:w-5/6 bg-white rounded border-8 border-black">
          {/* Quiz notes */}
          <div className="xl:w-3/6 flex flex-col justify-center text-center  xl:py-10 px-5 xl:px-20">
            <h1 className="lg:my-5 text-4xl xl:text-6xl font-bold text-slate-900 py-5 sm:py-2 underline underline-offset-8">
              Quiz
            </h1>
            <p className="text-lg xl:text-3xl py-3">
              Let&apos;s see how far do you remember my 10 seconds
              information...&#128513;
            </p>
          </div>

          {/* Straight line */}
          <div className="p-1 bg-yellow-950 mx-5 sm:my-5 xl:mx-0"></div>

          {/* Questions */}
          <div className="xl:w-3/6 flex flex-col justify-center text-center py-8 xl:py-10 px-20">
            <h3 className="text-xl xl:text-3xl font-bold py-2">
              Question {currentQuestion + 1} out of 10
            </h3>
            <p className="py-3 font-semibold">
              {quizQuestions[currentQuestion].question}
            </p>

            {/* Options */}
            <div className="text-left">
              <ul>
                {quizQuestions[currentQuestion].options.map(option => {
                  return (
                    <li
                      onClick={() => optionClicked(option.isCorrect)}
                      key={option.id}
                      className="my-1 bg-slate-700 text-center p-2 text-white rounded-lg hover:bg-blue-500 cursor-pointer"
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
