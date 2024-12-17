import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FiltersGroup = props => {
  const renderEmploymentTypesList = () => {
    const {updateEmploymentTypeChecked} = props

    return employmentTypesList.map(each => {
      const updateTypesList = () =>
        updateEmploymentTypeChecked(each.employmentTypeId)

      return (
        <li className="filters-list-item" key={each.employmentTypeId}>
          <input
            type="checkbox"
            className="checkbox-input"
            onChange={updateTypesList}
            id={each.employmentTypeId}
          />
          <label htmlFor={each.employmentTypeId} className="filter-label">
            {each.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <>
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="filters-list">{renderEmploymentTypesList()}</ul>
    </>
  )

  const renderSalaryRangesList = () => {
    const {updateSalaryRangeId, activeSalaryRangeId} = props

    return salaryRangesList.map(each => {
      const onChangeSalaryRange = () => updateSalaryRangeId(each.salaryRangeId)

      const isChecked = each.salaryRangeId === activeSalaryRangeId

      return (
        <li className="filters-list-item" key={each.salaryRangeId}>
          <input
            type="radio"
            className="checkbox-input"
            checked={isChecked}
            name="salary ranges"
            onChange={onChangeSalaryRange}
            id={each.salaryRangeId}
          />
          <label className="filter-label" htmlFor={each.salaryRangeId}>
            {each.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <>
      <h1 className="filter-heading">Salary Range</h1>
      <ul className="filters-list">{renderSalaryRangesList()}</ul>
    </>
  )

  return (
    <div className="filters-group-container">
      {renderEmploymentType()}
      <hr className="separator" />
      {renderSalaryRange()}
    </div>
  )
}
export default FiltersGroup
