import { useState, useMemo } from "react";
import { TodoList } from "../../organisms/TodoList";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";

import styles from "./style.module.css";

export const TodoTemplate = () => {
  /** Todo List */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /** 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");

  /** 検索キーワードで絞り込んだTodo List */
  const filteredTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      //　検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp("" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /** action */
  const handleChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <input
          className={styles.input}
          type="text"
          placeholder="検索キーワード"
          value={searchKeyword}
          onChange={(e) => handleChangeSearchKeyword(e)}
        />
      </section>
      <section className={styles.common}>
        {filteredTodoList.length > 0 ? (
          <TodoList todoList={filteredTodoList} />
        ) : (
          <p className={styles.noList}>リストがありません</p>
        )}
      </section>
    </div>
  );
};
