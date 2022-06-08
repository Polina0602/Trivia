import React from "react";
import { useEffect } from "react";
import s from "./autocomplete.module.css";
import { Routes, Route, useRoutes, Link } from "react-router-dom";
import Questions from "../routes/Questions";


// import Location from "./components/pages/locationPage";
// import Registration from "./components/pages/registrationPage";
// import { FrontPage } from "./components/pages/frontPage";


// <Routes>   
//         {/* <Route path="/" element={<FrontPage />} />
//         <Route path="/Registration" element={<Registration />} />
//         <Route path="/Location" element={<Location />} /> */}
//         <Route path="/Qustions" element={<Qustions />} />

//       </Routes>

import usePlacesAutocomplete, {

  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

<Routes>
  <Route path="/Questions" element={<Questions />}></Route>


</Routes>


export const Autocomplete = ({ isLoaded, onSelect }) => {

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });


  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);


    if (e.target.value === "555") {
      window.location.replace("http://localhost:3000/Questions")
    }


  };
  function checklocation(e) {
    if (e.target.value === "תל אביב") {
      window.location.replace("http://localhost:3000/Questions")
    }if(e.target.value==="נוף הגליל"){
      window.location.replace("http://localhost:3000/Qustions1");
    }
    else {
      alert("pleas enter the location name")
    }
  }


  const handleSelect =
    ({ description }) =>
      () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
        console.log(description);

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log("📍 Coordinates: ", { lng });
            onSelect({ lat, lng })
          })
          .catch((error) => {
            console.log("😱 Error: ", error);
          });
      };


  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (

        <li
          className={s.listItem}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <div className={s.root} ref={ref}>
      <input id="a"
        type="text"
        value={value}
        className={s.input}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Choose your favorite place"
      />
      <button value={value} onClick={checklocation}>sumbit</button>

      {status === "OK" && (
        <ul className={s.suggestion}>{renderSuggestions()}

        </ul>
      )}
    </div>
  );
};

/**<label>
          Pick your favorite flavor:
          <select >    
            <option value="nof-haglil">nof_haglil</option>
            <option value="tel-aviv">tel-aviv</option>
          </select>
        </label> */

/*<h1><Link to ="/Location/Qustions" ><Qustions></Qustions></Link></h1>/
        /** <input
        type="text"
        value={value}
        className={s.input}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Choose your favorite place"
      /> */