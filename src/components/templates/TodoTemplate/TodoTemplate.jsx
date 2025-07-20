import { useState, useMemo } from "react";
import { TodoList } from "../../organisms/TodoList";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import styles from "./style.module.css";

export const TodoTemplate = () => {
  /** Todo List */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /** 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /** Todo　採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  /** タスクを追加する */
  const [addInputValue, setAddInputValue] = useState("");

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

  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  /** タスクを追加する */
  const handleAddTodo = (e) => {
    /** エンターキーが押された時にTodoを追加する  */
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId.length + 1;

      // スプレッド構文の処理
      const nextTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(nextTodoList);

      // 採番IDを更新する
      setUniqueId(nextUniqueId);
      // todo 入力フォームを空にする
      setAddInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* タスクを追加する */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/* 検索キーワードを入力する */}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"検索キーワード"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* タスクを表示する */}
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
