import React from "react";

const AppItemFilters = () => {
  return (
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-secondary">
        All
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Active
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default AppItemFilters;
