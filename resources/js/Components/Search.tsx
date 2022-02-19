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
        <span className="text-primary-500 font-semibold tracking-tighter shadow shadow-primary-strike">
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
        className="group flex mb-1.5 items-center -mx-2 justify-between px-3 py-2.5 bg-white hover:border-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors duration-3000"
        key={hit.objectID}
      >
        <span className="font-medium space-y-1">
          <h4>{hit.title}</h4>
        </span>
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
        className="items-center hidden gap-2 px-3 py-2 border xl:flex border-gray-500/40 rounded-xl"
        onClick={openSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#1f2937"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <span className="text-gray-800 text-sm">Quick Search..</span>
        <span className="px-2 text-sm text-gray-200 bg-gray-800 rounded-md">
          ⌘ + /
        </span>
      </button>
      <button
        onClick={openSearch}
        className="flex items-center xl:hidden gap-4 px-3 py-2 border border-white/10 bg-gray-300 rounded-xl"
      >
        <svg
          className="text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg
          className="w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M238.7 220.73a110.36 110.36 0 1 1 110.36-110.37A110.49 110.49 0 0 1 238.7 220.73Zm0-216.94a106.57 106.57 0 1 0 106.57 106.57A106.69 106.69 0 0 0 238.7 3.79Z"
            className="fill-current text-primary-300"
          />
          <circle
            cx="238.7"
            cy="110.37"
            r="57.53"
            className="fill-current text-primary-400"
          />
          <path
            d="M444.4 302.82a29.41 29.41 0 0 0-58.82 0v-22.55a29.41 29.41 0 0 0-58.82 0V267a29.41 29.41 0 0 0-58.82 0V119.93a29.41 29.41 0 1 0-58.82 0v205.88c0 16.24-14.4 35.63-29.41 29.41-20.38-8.44-62.39-62.39-62.39-62.39a29.41 29.41 0 0 0-41.59 0c-11.49 11.49-10.1 28.87 0 41.59C112 380.22 187.57 475 249.05 498.95c48.28 18.78 124.6 21.54 163.28-20.51 27.17-29.54 31.32-62.84 32-120.93 0-32.5.12-54.69.12-54.69Z"
            className="text-gray-500 fill-current"
          />
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
                <div className="py-2 mt-2 mb-2 text-xs px-4 font-medium flex justify-between items-center text-gray-500 capitalize">
                  <a
                    className="bg-gray-100 hover:bg-primary-500 hover:text-white rounded-lg text-black px-2.5 transition duration-300 py-1"
                    href="/series?filter=popular"
                  >
                    Lihat semua
                  </a>
                  <div className="shadow-undersky">Hello</div>
                  <a
                    href="http://algolia.com?ref=programify.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Power By{' '}
                    <span className="text-indigo-500 shadow-indigo-down-strike">
                      <img
                        src="/images/logo/algolia-logo.svg"
                        className="w-auto h-5"
                        alt=""
                      />
                    </span>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
