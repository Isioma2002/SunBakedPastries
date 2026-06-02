import { useState } from "react";

import gallery1 from "../assets/Gallery.jpg";
import gallery2 from "../assets/Gallery1.jpg";
import gallery3 from "../assets/Gallery2.jpg";
import gallery4 from "../assets/Gallery3.jpg";
import gallery5 from "../assets/Gallery.jpg";
import gallery6 from "../assets/Gallery1.jpg";
import gallery7 from "../assets/Gallery2.jpg";
import gallery8 from "../assets/Gallery3.jpg";
import gallery9 from "../assets/Gallery.jpg";
import gallery10 from "../assets/Gallery1.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="home1">

      <div className="gallery-grid">
        <img src={gallery1} alt="Baked good 1" onClick={() => setSelectedImage(gallery1)} />
        <img src={gallery2} alt="Baked good 2" onClick={() => setSelectedImage(gallery2)} />
        <img src={gallery3} alt="Baked good 3" onClick={() => setSelectedImage(gallery3)} />
        <img src={gallery4} alt="Baked good 4" onClick={() => setSelectedImage(gallery4)} />
        <img src={gallery5} alt="Baked good 5" onClick={() => setSelectedImage(gallery5)} />
        <img src={gallery6} alt="Baked good 6" onClick={() => setSelectedImage(gallery6)} />
        <img src={gallery7} alt="Baked good 7" onClick={() => setSelectedImage(gallery7)} />
        <img src={gallery8} alt="Baked good 8" onClick={() => setSelectedImage(gallery8)} />
        <img src={gallery9} alt="Baked good 9" onClick={() => setSelectedImage(gallery9)} />
        <img src={gallery10} alt="Baked good 10" onClick={() => setSelectedImage(gallery10)} />
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </section>
  );
}