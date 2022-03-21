import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import React from "react";
type Data = {
  id: number;
  type: string;
  question: string;
  answer: string;
  options: string[];
}[];
type MentalFlashcardProps = {
  data: Data;
};
function Mental(props: MentalFlashcardProps) {
  // const randomData = props.data[Math.floor(Math.random() * props.data.length)];
  // console.log("random", randomData);
  const [randomNumber, setRandomNumber] = React.useState(
    random(0, props.data.length - 1)
  );
  const [selected, setSelected] = React.useState(props.data[randomNumber]);

  const [showAnswer, setShowAnswer] = React.useState(false);
  const addSolution = (): void => {
    setShowAnswer(!showAnswer);
  };
  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <p>Mental</p>

          <section>
            <div className="card text-white bg-secondary p-5">
              <div className="card-header">
                <h1>Mental Flashcard</h1>
              </div>
              <div className="card-body" onClick={addSolution}>
                {showAnswer ? (
                  <p className="card-text-center">{selected.answer}</p>
                ) : (
                  <p className="card-text-center">{selected.question}</p>
                )}
              </div>
            </div>
          </section>
          <button
            className="btn btn-light"
            onClick={() => setRandomNumber(random(0, props.data.length - 1))}
          >
            Next
          </button>
        </div>
      </Layout>
    </>
  );
}

export default Mental;
