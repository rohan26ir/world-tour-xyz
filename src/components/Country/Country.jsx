import './Country.css'

const Country = ({country}) => {

  console.log(country);
  
  const {name, flags, idd, car} = country;

  return (
    <div className=''>
      <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="SVG" />
      <p>idd Root: {idd.root}</p>
      <p>Car Side: <span className='car'>{car.side}</span></p>
      <p>Region: {country.region}</p>
      <p>CCA2:  {country.cca2}</p>
    </div>
    </div>
  );
};

export default Country;