import styles from "./style.module.css";

export const InputForm = ({
  inputValue,
  placeholder,
  handleChangeSearchKeyword,
}) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeSearchKeyword}
    />
  );
};
