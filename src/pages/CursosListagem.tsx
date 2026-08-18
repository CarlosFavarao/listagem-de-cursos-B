import { useMemo, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { CourseFilters, type CourseFiltersValue } from '../components/CourseFilters'
import { CourseList } from '../components/CourseList'
import { courses } from '../data/courses'
import type { Area, Categoria, Modalidade } from '../types/course'
import './CursosListagem.css'

const CATEGORIAS: Categoria[] = ['Graduação', 'Pós-Graduação', 'Profissionalizante', 'Técnico']
const MODALIDADES: Modalidade[] = ['Presencial', 'EaD', 'Semipresencial']
const AREAS: Area[] = [
  'Educação',
  'Saúde',
  'Exatas e Tecnologia',
  'Humanas',
  'Negócios',
  'Artes e Design',
]

export function CursosListagem() {
  const [filters, setFilters] = useState<CourseFiltersValue>({
    busca: '',
    categoria: '',
    modalidade: '',
    area: '',
  })
  const [favoritos, setFavoritos] = useState<Set<string>>(new Set())

  const cursosFiltrados = useMemo(() => {
    const busca = filters.busca.trim().toLowerCase()

    return courses.filter((course) => {
      const combinaBusca = busca === '' || course.nome.toLowerCase().includes(busca)
      const combinaCategoria = filters.categoria === '' || course.categoria === filters.categoria
      const combinaModalidade =
        filters.modalidade === '' || course.modalidades.includes(filters.modalidade)
      const combinaArea = filters.area === '' || course.area === filters.area

      return combinaBusca && combinaCategoria && combinaModalidade && combinaArea
    })
  }, [filters])

  function handleToggleFavorito(id: string) {
    setFavoritos((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="cursos-listagem">
      <Navbar />

      <button type="button" className="cursos-listagem__back" aria-label="Voltar">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <CourseFilters
        value={filters}
        onChange={setFilters}
        categorias={CATEGORIAS}
        modalidades={MODALIDADES}
        areas={AREAS}
      />

      <CourseList
        courses={cursosFiltrados}
        favoritos={favoritos}
        onToggleFavorito={handleToggleFavorito}
      />
    </div>
  )
}
