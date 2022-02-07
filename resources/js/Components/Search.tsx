import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
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
    <div className="w-full relative" role="search">
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
        className="w-full py-4 pl-12 border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder-gray-400"
        value={currentRefinement}
        placeholder="Belajar Apa Hari Ini?...."
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
      <div className="border-b border-gray-200" />
    </div>
    {currentRefinement.length === 0 ? (
      <p className="font-medium px-4 pt-2 text-gray-800">Populer 🔥</p>
    ) : (
      <div className="font-medium px-4 pt-2 text-gray-800">
        You Search{' '}
        <span className="text-primary-600 font-bold tracking-tighter underline underline-primary-400">
          "{currentRefinement}"
        </span>
      </div>
    )}
  </>
);

const Hits = ({ hits }: any) => (
  <div className="overflow-auto pt-3 px-3">
    {hits.map((hit: any) => (
      <a
        href={`/series/${hit.slug}`}
        className="group flex items-center -mx-2 justify-between px-3 py-2.5 bg-white rounded-md hover:bg-gray-300 trasition duration-300"
        key={hit.objectID}
      >
        <h4 className="font-medium">{hit.title}</h4>
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
        className="items-center hidden gap-2 px-3 py-2 border md:flex border-white bg-gray-700 rounded-xl"
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
        <span className='text-gray-200 text-xs'>Quick Search..</span>
        <span className="px-2 text-sm text-gray-200 bg-gray-800 rounded-md">
          ⌘ + /
        </span>
      </button>

      <button
        onClick={openSearch}
        className="flex items-center md:hidden gap-4 px-3 py-2 border border-white/10 bg-gray-800 rounded-xl"
      >
        <svg
          className="text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
        </svg>
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M238.7 220.73a110.36 110.36 0 1 1 110.36-110.37A110.49 110.49 0 0 1 238.7 220.73Zm0-216.94a106.57 106.57 0 1 0 106.57 106.57A106.69 106.69 0 0 0 238.7 3.79Z"
            className="fill-current text-primary-300"
          ></path>
          <circle
            cx="238.7"
            cy="110.37"
            r="57.53"
            className="fill-current text-primary-400"
          ></circle>
          <path
            d="M444.4 302.82a29.41 29.41 0 0 0-58.82 0v-22.55a29.41 29.41 0 0 0-58.82 0V267a29.41 29.41 0 0 0-58.82 0V119.93a29.41 29.41 0 1 0-58.82 0v205.88c0 16.24-14.4 35.63-29.41 29.41-20.38-8.44-62.39-62.39-62.39-62.39a29.41 29.41 0 0 0-41.59 0c-11.49 11.49-10.1 28.87 0 41.59C112 380.22 187.57 475 249.05 498.95c48.28 18.78 124.6 21.54 163.28-20.51 27.17-29.54 31.32-62.84 32-120.93 0-32.5.12-54.69.12-54.69Z"
            className="text-gray-300 fill-current"
          ></path>
        </svg>
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
                <div className="flex justify-between relative border-t border-gray py-3 px-3">
                  <a
                    href="#"
                    className="inline-flex items-center px-2 py-1 bg-gray-800 border border-transparent rounded-xl font-semibold text-xxs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  >
                    Lihat Semua
                  </a>
                  <img
                    className="h-9 w-auto"
                    src="https://www.vectorlogo.zone/logos/algolia/algolia-ar21.svg"
                    alt="algolia-logo"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
