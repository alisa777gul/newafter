import { useState } from "react";
import teachersData from "../data/teachers.json";
import TeacherCard from "../components/TeacherCard/TeacherCard";

export default function Teachers() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);
  const visibleTeachers = teachersData.slice(0, visibleCount);

  return (
    <section>
      <h2>Our Teachers</h2>
      <ul>
        {visibleTeachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={{ ...teacher, id: index }} />
        ))}
      </ul>

      {visibleCount < teachersData.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </section>
  );
}
