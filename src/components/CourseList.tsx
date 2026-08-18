import type { Course } from '../types/course'
import { CourseCard } from './CourseCard'
import './CourseList.css'

interface CourseListProps {
  courses: Course[]
  favoritos: Set<string>
  onToggleFavorito: (id: string) => void
}

export function CourseList({ courses, favoritos, onToggleFavorito }: CourseListProps) {
  if (courses.length === 0) {
    return (
      <div className="course-list__empty">
        <p>Nenhum curso encontrado para os filtros selecionados.</p>
      </div>
    )
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          favorito={favoritos.has(course.id)}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </div>
  )
}
