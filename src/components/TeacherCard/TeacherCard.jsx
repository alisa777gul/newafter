import { useState, useEffect } from "react";
import styles from "./TeacherCard.module.css";

export default function TeacherCard({ teacher }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(teacher.id));
  }, [teacher.id]);

  const toggleFavourite = () => {
    const favorites = JSON.parse(localStorage.getItem("favourites")) || [];
    let updated;
    if (favorites.includes(teacher.id)) {
      updated = favorites.filter((id) => id !== teacher.id);
      setIsFavorite(false);
    } else {
      updated = [...favorites, teacher.id];
      setIsFavorite(true);
    }
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
    <li className={styles.card}>
      <img
        src={teacher.avatar_url}
        alt={`${teacher.name} ${teacher.surname}`}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <h3 className={styles.name}>
          {teacher.name} {teacher.surname}
        </h3>

        <p>
          <strong>Languages:</strong> {teacher.languages.join(", ")}
        </p>
        <p>
          <strong>Levels:</strong> {teacher.levels.join(", ")}
        </p>
        <p>
          <strong>Experience:</strong> {teacher.experience}
        </p>
        <p>
          <strong>Lessons done:</strong> {teacher.lessons_done}
        </p>
        <p>
          <strong>Price/hour:</strong> ${teacher.price_per_hour}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {teacher.rating}
        </p>
        <p>
          <strong>Lesson info:</strong> {teacher.lesson_info}
        </p>
        <p>
          <strong>Conditions:</strong> {teacher.conditions}
        </p>

        <button
          onClick={toggleFavourite}
          className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ""}`}
        >
          {isFavorite ? "★ Remove from favorites" : "☆ Add to favorites"}
        </button>
      </div>
    </li>
  );
}
