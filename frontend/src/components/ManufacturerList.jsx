import PropTypes from "prop-types";
import SingleManufacturer from "./SingleManufacturer";

export default function ManufacturerList({ data }) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 m-4">
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
