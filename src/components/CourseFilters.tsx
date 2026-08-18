import type { Area, Categoria, Modalidade } from '../types/course'
import './CourseFilters.css'

export interface CourseFiltersValue {
  busca: string
  categoria: Categoria | ''
  modalidade: Modalidade | ''
  area: Area | ''
}

interface CourseFiltersProps {
  value: CourseFiltersValue
  onChange: (value: CourseFiltersValue) => void
  categorias: Categoria[]
  modalidades: Modalidade[]
  areas: Area[]
}

export function CourseFilters({ value, onChange, categorias, modalidades, areas }: CourseFiltersProps) {
  return (
    <section className="course-filters">
      <h1 className="course-filters__heading">
        Busque pelo curso desejado e acesse todas as informações
      </h1>

      <div className="course-filters__search">
        <input
          type="text"
          placeholder="Busque por um Curso"
          value={value.busca}
          onChange={(e) => onChange({ ...value, busca: e.target.value })}
          aria-label="Busque por um curso"
        />
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="course-filters__selects">
        <label className="course-filters__select">
          <span className="sr-only">Categoria</span>
          <select
            value={value.categoria}
            onChange={(e) => onChange({ ...value, categoria: e.target.value as Categoria | '' })}
          >
            <option value="">Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>

        <label className="course-filters__select">
          <span className="sr-only">Modalidade</span>
          <select
            value={value.modalidade}
            onChange={(e) => onChange({ ...value, modalidade: e.target.value as Modalidade | '' })}
          >
            <option value="">Modalidade</option>
            {modalidades.map((modalidade) => (
              <option key={modalidade} value={modalidade}>
                {modalidade}
              </option>
            ))}
          </select>
        </label>

        <label className="course-filters__select">
          <span className="sr-only">Área</span>
          <select
            value={value.area}
            onChange={(e) => onChange({ ...value, area: e.target.value as Area | '' })}
          >
            <option value="">Área</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  )
}
