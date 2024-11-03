## Installation

You can install this package via npm:

```bash ```
npm install  bd_state

## Usage

```js
import React, {useState } from "react";
import {BdGetState} from 'bd_state';
function DbState() {
  const {GetDbDivision,GetDbDistrict,GetDbUpazila} = BdGetState();
  const[divisionName,setDivisionName]=useState('');
  const[districtName,setDistrictName]=useState('');
  const[upazilaName,setUpazilaName]=useState('');
  const[divisionId,setDivisionId]=useState();
  const[districtId,setDistrictId]=useState();
  const[upazilaId,setUpazilaId]=useState();


  const divisionChange = (event) => {
    const values = event.target.value.split(",");
    setDivisionId(values[0]);
    setDivisionName(values[1]);
  };

  const districtChange = (event) => {
    const values = event.target.value.split(",");
    setDistrictId(values[0]);
    setDistrictName(values[1]);
  };

  const upzaliaChange = (event) => {
    const values = event.target.value.split(",");
    setUpazilaId(values[0]);
    setUpazilaName(values[1]);
  };

}
```
## Usage Form
        <form onSubmit={handleSubmit}>
            <select
                   onChange={divisionChange}
                      >
                        <option>{divisionName}</option>
                        {GetDbDivision().map((division) => (
                          <>
                            <option
                              key={"division"}
                              value={[division.id, division.division_name]}
                            >
                              {division.division_name}
                            </option>
                          </>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        type="text"
                        onChange={districtChange}
                      >
                        <option>{districtName}</option>
                        {GetDbDistrict(divisionId)?.map(
                          (district) => (
                            <option
                              key={"district"}
                              className="text-white "
                              value={[district.id, district.district_name]}
                            >
                              {district.district_name}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div>
                      <select
                        type="text"
                        onChange={upzaliaChange}
                      >
                        <option>{upazilaName}</option>
                        {GetDbUpazila(districtId)?.map((upazila) => (
                          <option
                            key={"upazila"}
                            value={[upazila.id, upazila.upazila_name]}
                          >
                            {upazila.upazila_name}
                          </option>
                    ))}
         </select>
  </form>

## Build
```npm run build ```
