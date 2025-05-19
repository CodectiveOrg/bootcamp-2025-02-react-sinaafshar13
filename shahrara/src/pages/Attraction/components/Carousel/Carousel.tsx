import { ReactElement, useEffect, useState } from "react";

import clsx from "clsx";

import styles from "./Carousel.module.css";

import { Attractions } from "../../../../types/attractions.ts";

type Props = {
  attraction: Attractions;
};

function Carousel({ attraction }: Props): ReactElement {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((old) => (old + 1) % attraction.carousel.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [attraction]);

  return (
    <div className={styles.carousel}>
      <ul style={{ transform: `translateX(${slideIndex * 100}%)` }}>
        {attraction.carousel.map((image) => (
          <li key={image}>
            <img
              src={`${import.meta.env.VITE_CDN_BASE_URL}/${image}`}
              alt=""
              height={480}
            />
          </li>
        ))}
      </ul>
      <div className={styles.bullets}>
        {attraction.carousel.map((_, index) => (
          <button
            key={index}
            className={clsx(
              styles.bullet,
              index === slideIndex && styles.active,
            )}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;