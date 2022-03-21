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
type MultipleChoicesFlashcardProps = {
  data: Data;
};

function Multiple(props: MultipleChoicesFlashcardProps) {
  const [addQuestion, setAddQuestion] = React.useState(props.data[2].question);
  const [answerSelected, setAnswerSelected] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [wrong, setwrong] = React.useState("");

  const handleInputText = (event: any) => {
    console.log("mon event", event);

    const checked = event.target.value;
    setAnswerSelected(checked);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("madata", answerSelected);
    console.log("wrong", wrong);
    answerSelected === "<script>"
      ? setBackgroundColor("bg bg-success")
      : setBackgroundColor("bg bg-danger");

    answerSelected === "<script>"
      ? setwrong("You got it!!")
      : setwrong("Wrong answer :( ");
    // setAnswerSelected();
    return addQuestion === props.data[2].question || props.data[2].answer
      ? setAddQuestion("")
      : null;
  };
  const reset = () => {
    setAnswerSelected("");
    setBackgroundColor("");
    setwrong("");
    setAddQuestion(addQuestion);
  };
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <p>Multiple</p>

          <section>
            <div className={`rounded  p-5 ${backgroundColor}`}>
              <div className="text-center">
                <h1 onClick={reset}>MultipleChoicesFlashcard</h1>
                <p>{wrong}</p>
                <p>{addQuestion}</p>
              </div>

              <form
                className="col-md text-center custom-control custom-radio "
                onSubmit={handleSubmit}
              >
                <div className="form-check" id="1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="<script>"
                    onChange={handleInputText}
                    value="<script>"
                  />

                  <label className="form-check-label" htmlFor="script">
                    {props.data[2].options[2]}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="<scripting>"
                    onChange={handleInputText}
                    value="<scripting>"
                  />
                  <label className="form-check-label" htmlFor="scripting">
                    {props.data[2].options[1]}
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id="<javascript>"
                    onChange={handleInputText}
                    value="<javascript>"
                  />
                  <label className="form-check-label" htmlFor="javascript">
                    {props.data[2].options[0]}
                  </label>
                </div>

                <br />
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default Multiple;
