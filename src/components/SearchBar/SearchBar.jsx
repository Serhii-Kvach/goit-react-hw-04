import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.input.value.trim();
    if (inputValue === "") {
      toast.error("Enter text!");

      return;
    }

    onSubmit(inputValue);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}

export default SearchBar;
