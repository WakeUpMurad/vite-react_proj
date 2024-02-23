import { useState, useRef } from "react";
import Button from "./UI/Button/Button";

function StateVsRef() {
    const [show, setShow] = useState(false)
  const input = useRef()

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
        setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current?.value} </h3>
      <input type="text" className="control" ref={input} onKeyDown={handleKeyDown}/>
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  const handleNameChange = (event) => {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  };

  const handleReasonChange = (event) => {
    setForm((prev) => ({
      ...prev,
      reason: event.target.value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <section style={{ marginBottom: "1rem" }}>
      <h3>Обратная связь</h3>
      <form action="" style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handleNameChange}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handleReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>

        <Button onClick={handleSubmit} disabled={form.hasError || !form.name}>
          Отправить
        </Button>
      </form>

      <StateVsRef />
    </section>
  );
}
