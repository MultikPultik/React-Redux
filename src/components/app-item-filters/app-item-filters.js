import React from "react";

const AppItemFilters = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" className="btn btn-outline-primary active">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Active
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default AppItemFilters;
