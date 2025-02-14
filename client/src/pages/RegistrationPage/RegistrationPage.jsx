import { useState } from "react";
import { useNavigate } from "react-router";
import { UserApi } from "../../entities/UserApi";
import styles from "../RegistrationPage/RegistrationPage.module.css";

export default function RegistrationPage() {
  const [inputs, setInputs] = useState({ username: "", score: "" });
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!inputs.username) {
      alert("Введи имя, герой");
      return;
    }

    try {
      const response = await UserApi.create(inputs);

      if (response.error) {
        setError(response.message);
      }

      if (response.statusCode === 201) {
        setInputs({ username: "", score: "0" });
        setError("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h2>Регистрация</h2>
        <input
          className={styles.inputField}
          name="username"
          placeholder="введи имя"
          value={inputs.username}
          onChange={onChangeHandler}
        />

        <button
          type="submit"
          className={styles.submitButton}
          onClick={() => navigate("/themes")}
        >
          Нажать
        </button>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </form>
    </div>
  );
}
