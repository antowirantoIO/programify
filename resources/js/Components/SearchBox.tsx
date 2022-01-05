import React from 'react';
import { connectAutoComplete } from 'react-instantsearch-dom';

const Autocomplete = ({ hits, currentRefinement, refine }: any) => (
  <ul>
    <li>
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </li>
    {hits.map((hit: any) => (
      <li key={hit.objectID}>{hit.name}</li>
    ))}
  </ul>
);

const CustomAutocomplete = connectAutoComplete(Autocomplete);
