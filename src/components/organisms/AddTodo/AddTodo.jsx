import { InputForm } from "../../atoms/InputForm";

import styles from "./style.module.css";

export const AddTodo = ({ addInputValue, onChangeTodo, handleAddTodo }) => {
  return (
    <>
      <h2 className={styles.subTitle}>タスクを追加する</h2>
      <InputForm
        inputValue={addInputValue}
        placeholder={"タスクを入力してください"}
        handleChangeValue={onChangeTodo}
        handleKeyDown={handleAddTodo}
      />
    </>
  );
};
