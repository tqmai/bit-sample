import React from "react";
import PropTypes from "prop-types";

// export interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {

// };

// export const Search = ( {children, ...rest}: SearchProps ) => {
//   return (
//     <div {...rest}>
//       {children}
//     </div>
//   )
// };

const Search = ({ className, color, width }) => (
  <svg
    className={className}
    fill={color}
    stroke={color}
    width={width}
    height={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3334 15.4795C13.0948 15.4795 15.3334 13.2409 15.3334 10.4795C15.3334 7.71807 13.0948 5.47949 10.3334 5.47949C7.57195 5.47949 5.33337 7.71807 5.33337 10.4795C5.33337 13.2409 7.57195 15.4795 10.3334 15.4795ZM10.3334 17.4795C14.1994 17.4795 17.3334 14.3455 17.3334 10.4795C17.3334 6.6135 14.1994 3.47949 10.3334 3.47949C6.46738 3.47949 3.33337 6.6135 3.33337 10.4795C3.33337 14.3455 6.46738 17.4795 10.3334 17.4795Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7929 14.737C14.1834 14.3465 14.8166 14.3465 15.2071 14.737L20.864 20.3939L19.4497 21.8081L13.7929 16.1512C13.4024 15.7607 13.4024 15.1275 13.7929 14.737Z"
    />
  </svg>
);

Search.defaultProps = {
  className: "",
  color: "black",
  width: 48,
};

Search.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
};

export default Search;
