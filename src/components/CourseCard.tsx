import type { Course } from '../types/course'
import './CourseCard.css'

interface CourseCardProps {
  course: Course
  favorito: boolean
  onToggleFavorito: (id: string) => void
}

export function CourseCard({ course, favorito, onToggleFavorito }: CourseCardProps) {
  return (
    <article className="course-card">
      <div
        className="course-card__thumb"
        style={{ background: course.thumbnailColor }}
        aria-hidden="true"
      >
        {course.thumbnailLabel}
      </div>

      <div className="course-card__body">
        <div className="course-card__header">
          <h2 className="course-card__title">{course.nome}</h2>
          <button
            type="button"
            className="course-card__favorite"
            aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            aria-pressed={favorito}
            onClick={() => onToggleFavorito(course.id)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill={favorito ? 'currentColor' : 'none'}>
              <path
                d="M12 20s-7-4.35-9.5-8.55C.86 8.36 2.1 5 5.4 5c1.9 0 3.3 1.02 4.1 2.3.16.26.6.26.76 0C11.06 6.02 12.46 5 14.36 5c3.3 0 4.54 3.36 2.9 6.45C19 15.65 12 20 12 20Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="course-card__badges">
          <span className="course-card__badge course-card__badge--fill">{course.categoria}</span>
          {course.modalidades.map((modalidade) => (
            <span key={modalidade} className="course-card__badge course-card__badge--outline">
              {modalidade}
            </span>
          ))}
        </div>

        <p className="course-card__meta">
          {course.grau} | {course.duracao}
        </p>

        <button type="button" className="course-card__cta">
          Ver Mais
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
            <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}
