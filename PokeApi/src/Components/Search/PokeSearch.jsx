import React from "react";

function PokeSearch() {
  return (
    <div className="col-6 mt-5">
      <div className="">
        <h1 className="text-center">Podex</h1>
      </div>
      <div class="input-group my-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter poke name..."
        />
        <button class="btn btn-primary" type="button" id="button-addon2">
          Button
        </button>
      </div>
    </div>
  );
}

export default PokeSearch;
