import { useState } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";

import styles from "./style.module.css";

export const TodoTemplate = () => {
  /** Todo List */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        {originTodoList.length > 0 ? (
          <ul className={styles.list}>
            {originTodoList.map((todo) => (
              <li key={todo.id} className={styles.todo}>
                <span className={styles.task}>{todo.title}</span>
                <div className={styles.far}>
                  {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
                  <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noList}>リストがありません</p>
        )}
      </section>
    </div>
  );
};
