import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'KU12QB6X6Z',
  'd9e0b5ab6251825c8fb4b14e9aefa6fc',
);

const Hit = ({ hit }: any) => (
  <p>
    <Highlight attribute="name" hit={hit} tagName="mark" />
  </p>
);

export default function Dashboard() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white py-10 overflow-hidden shadow-xl sm:rounded-lg">
          <InstantSearch indexName="series" searchClient={searchClient}>
            <SearchBox />
            <Hits />
          </InstantSearch>
        </div>
      </div>
    </div>
  );
}

Dashboard.layout = (page: JSX.Element) => (
  <AppLayout
    children={page}
    title="Dashboard"
    renderHeader={() => (
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Dashboard
      </h2>
    )}
  />
);
