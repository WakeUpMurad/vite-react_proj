import { useState } from "react";
import Button from "./UI/Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0)
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = () => {};

  function toggleError() {
    setHasError((prev) => {!prev})
  }

  return (
    <section style={{ marginBottom: "1rem" }}>
      <h3>Обратная связь</h3>

        <Button onClick={toggleError}>Toggle error</Button>

      <form action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{
            border: hasError ? '1px solid red' : null,
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={handleReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button onClick={handleSubmit} disabled={hasError || !name}>Отправить</Button>
      </form>
    </section>
  );
}
