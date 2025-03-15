import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import { fetchGallery } from "../../fetchApi";

import { useState, useEffect } from "react";
import css from "./App.module.css";

function App() {
  const [foto, setFoto] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectFoto, setSelectFoto] = useState(null);

  const openModal = (photo) => {
    setSelectFoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectFoto(null);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchGallery(query, page);
        setFoto((prev) => {
          return [...prev, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const handleSubmit = (topic) => {
    setPage(1);
    setQuery(topic);
    setFoto([]);
  };
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {foto.length > 0 && <ImageGallery images={foto} getImage={openModal} />}
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
      {foto.length !== 0 && (
        <LoadMoreBtn onClick={() => setPage(() => page + 1)} />
      )}

      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          photo={selectFoto}
        />
      )}
    </div>
  );
}

export default App;
