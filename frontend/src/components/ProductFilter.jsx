import PropTypes from "prop-types";

const ProductFilter = ({ category, setCategory }) => {
  return (
    <div className="text-dark text-xl my-12 mx-auto">
      <ul className="flex flex-wrap max-md:flex-col items-center justify-center gap-12">
        <li>
          <button
            className={`${category === "All" && "active"} hover:text-primary`}
            onClick={() => {
              setCategory("All");
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`${
              category === "MacBook" && "active"
            } hover:text-primary`}
            onClick={() => {
              setCategory("MacBook");
            }}
          >
            MacBook
          </button>
        </li>
        <li>
          <button
            className={`${
              category === "iPhone" && "active"
            } hover:text-primary`}
            onClick={() => {
              setCategory("iPhone");
            }}
          >
            iPhone
          </button>
        </li>
        <li>
          <button
            className={`${
              category === "Apple Watch" && "active"
            } hover:text-primary`}
            onClick={() => {
              setCategory("Apple Watch");
            }}
          >
            Apple Watch
          </button>
        </li>
        <li>
          <button
            className={`${category === "iPad" && "active"} hover:text-primary`}
            onClick={() => {
              setCategory("iPad");
            }}
          >
            iPad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductFilter;

ProductFilter.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
