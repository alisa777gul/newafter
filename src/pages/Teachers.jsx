import { useState } from "react";
import teachersData from "../data/teachers.json";
import TeacherCard from "../components/TeacherCard/TeacherCard";

export default function Teachers() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);
  const visibleTeachers = teachersData.slice(0, visibleCount);

  return (
    <section style={{ padding: "24px" }}>
      <h2>Our Teachers</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {visibleTeachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={{ ...teacher, id: index }} />
        ))}
      </ul>

      {visibleCount < teachersData.length && (
        <button
          onClick={handleLoadMore}
          style={{
            marginTop: "16px",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: "#ff8c00",
            color: "#fff",
            border: "none",
          }}
        >
          Load more
        </button>
      )}
    </section>
  );
}
