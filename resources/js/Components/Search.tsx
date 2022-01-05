import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import Input from './Input';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'KU12QB6X6Z',
  'd9e0b5ab6251825c8fb4b14e9aefa6fc',
);

interface SearchBoxType {
  currentRefinement: string;
  isSearchStalled: boolean;
  refine: any;
}

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
}: SearchBoxType) => (
  <>
    <form className="w-full relative " noValidate action="" role="search">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="w-full py-4 pl-12 border-b border-gray-100 focus:outline-none placeholder-gray-400"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          className="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs"
          type="button"
        >
          Esc
        </button>
      </div>
    </form>
    {currentRefinement.length === 0 ? (
      <p className="font-semibold px-5 pt-2 text-gray-800">Populer</p>
    ) : (
      <div className="font-semibold px-5 pt-2 text-gray-800">
        You Search{' '}
        <span className="text-blue-600 font-bold tracking-tighter underline underline-blue-900">
          "{currentRefinement}"
        </span>
      </div>
    )}
  </>
);

const Hits = ({ hits }: any) => (
  <div className="overflow-auto pt-3">
    {hits.map((hit: any) => (
      <a
        href={`/series/${hit.slug}`}
        className="flex items-center px-5 text-md hover:text-white transition duration-200 py-3 hover:bg-primary-400 hover:rounded-md overflow-hidden"
        key={hit.objectID}
      >
        {hit.title}
      </a>
    ))}
    {hits.length === 0 ? (
      <p className="p-10 text-lg text-center text-gray-400">No results...</p>
    ) : null}
  </div>
);

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const SearchBoxInput = connectSearchBox(SearchBox);
  const HitsResult = connectHits(Hits);

  function closeSearch() {
    setIsOpen(false);
  }

  function openSearch() {
    setIsOpen(true);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      event.ctrlKey && event.keyCode === 191 ? setIsOpen(true) : '';
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div>
      <button
        className="items-center hidden gap-2 px-3 py-2 border md:flex border-white/10 bg-gray-700 rounded-xl"
        onClick={openSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="#ffffff"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <span className="px-2 text-sm text-gray-200 bg-gray-800 rounded-md">
          ⌘ + /
        </span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 z-50 overflow-y-auto"
          onClose={closeSearch}
        >
          <div className="text-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/20" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full sm:max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="relative">
                  <InstantSearch indexName="series" searchClient={searchClient}>
                    <SearchBoxInput />
                    <HitsResult />
                  </InstantSearch>
                </div>
                <div className="border-t border-gray py-3 pr-4 text-right">
                  Powered By ALGOLIA
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
