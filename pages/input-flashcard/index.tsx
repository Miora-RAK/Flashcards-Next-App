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
type InputFlashcardProps = {
  data: Data;
};
// type InputFlashcardEvent = {
//   target: {
//     value: string;
//   };
// };
function Input(props: InputFlashcardProps) {
  const [formText, setFormText] = React.useState("");
  const [wrong, setwrong] = React.useState("");
  const [addQuestion, setAddQuestion] = React.useState(props.data[1].question);
  const [backgroundColor, setBackgroundColor] = React.useState("");

  const handleInputText = (event: any) => {
    console.log(event);
    const value = event.target.value;
    setFormText(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("ma data", formText);
    formText === props.data[1].answer
      ? setBackgroundColor("bg bg-success text-white")
      : setBackgroundColor("bg bg-danger text-white");

    formText === props.data[1].answer
      ? setwrong("You got it!!")
      : setwrong("Wrong answer :( ");
    setFormText("");
    return addQuestion === formText || props.data[1].answer
      ? setAddQuestion("")
      : null;
  };
  const reset = () => {
    setFormText("");
    setBackgroundColor("");
    setwrong("");
    setAddQuestion(props.data[1].question);
  };

  return (
    <>
      <Layout>
        <div className={styles.description}>
          <p>Input</p>

          <section>
            <div className={`rounded  text-white p-5 ${backgroundColor}`}>
              <div className="text-center">
                <h1 onClick={reset}>Input Flashcard</h1>
                <p>{wrong}</p>
              </div>

              <form className="text-center" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="question">{addQuestion}</label>
                  <hr />

                  {formText === addQuestion ? null : (
                    <input
                      onChange={handleInputText}
                      type="text"
                      className="form-control"
                      id="question"
                      placeholder="your answer"
                    />
                  )}
                </div>
                <br />
                {formText === addQuestion ? null : (
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default Input;
