export default function ImageCard({ image, getImages }) {
  const handleClick = () => {
    getImages(image);
  };

  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}
