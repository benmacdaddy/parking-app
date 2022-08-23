import { React, useState } from "react";

function SearchBar() {
  return (
    <div class="input-group mt-3 mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Location</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
  );
}

export default SearchBar;