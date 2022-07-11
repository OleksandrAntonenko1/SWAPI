import React from "react";

const ThemeSwitch = () => (
  <select
    className="select select-bordered w-full max-w-xs"
    data-choose-theme={true}
  >
    <option value="night">Night</option>
    <option value="fantasy">Fantasy</option>
    <option value="synthwave">Synthwave</option>
  </select>
);

export default ThemeSwitch;
