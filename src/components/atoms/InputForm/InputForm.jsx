import styles from "./style.module.css";

export const InputForm = ({
  inputValue,
  placeholder,
  handleChangeValue,
  handleKeyDown,
  onCompositionStart,
  onCompositionEnd,
}) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  );
};
