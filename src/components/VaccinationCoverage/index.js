import './index.css'

const VaccinationCoverage = props => {
  const {coverageDetails} = props
  const {vaccineDate, dose1, dose2} = coverageDetails

  return (
    <div>
      <p>{vaccineDate}</p>
      <p>{dose1}</p>
      <p>{dose2}</p>
    </div>
  )
}

export default VaccinationCoverage
