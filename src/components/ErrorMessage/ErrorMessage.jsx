import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <p className={css.error}>Oops, error, reload the page.</p>
    </>
  );
}
