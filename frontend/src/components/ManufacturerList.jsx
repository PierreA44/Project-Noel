import PropTypes from "prop-types";
import SingleManufacturer from "./SingleManufacturer";

export default function ManufacturerList({ data }) {
  return (
    <div className="manufacturer-list">
      <h1>Manufacturer liste</h1>

      {data.map((m) => (
        <SingleManufacturer
          id={m.id}
          name={m.name}
          productionCountry={m.production_country}
          key={m.id}
        />
      ))}
    </div>
  );
}

ManufacturerList.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
};
