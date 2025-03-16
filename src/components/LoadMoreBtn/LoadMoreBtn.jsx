import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ setPage, pageCount }) {
  const handleClick = () => {
    setPage(pageCount + 1);
  };
  return (
    <>
      <button className={css.btn} type="button" onClick={handleClick}>
        Load more
      </button>
    </>
  );
}
