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
  <form className="w-full relative " noValidate action="" role="search">
    <Input
      type="text"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
      <button
        className="flex items-center p-1 uppercase font-semibold tracking-wider bg-gray-700 text-gray-200 rounded-md border border-gray-800 focus:outline-none focus:border-gray-700 text-xxs"
        type="button"
      >
        Esc
      </button>
    </div>
  </form>
);

const SearchBoxInput = connectSearchBox(SearchBox);

const Hits = ({ hits }: any) => (
  <div className="overflow-auto pt-3">
    <ul>
      {hits.map((hit: any) => (
        <li className="flex items-center py-2.5 relative" key={hit.objectID}>
          {hit.title}
        </li>
      ))}
    </ul>
  </div>
);

const HitsResult = connectHits(Hits);

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="absolute inset-0 z-10 overflow-y-auto"
          onClose={closeSearch}
        >
          <div className="px-4 text-center">
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
              <div className="inline-block w-full sm:max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="relative">
                  <InstantSearch indexName="series" searchClient={searchClient}>
                    <SearchBoxInput />
                    <HitsResult />
                  </InstantSearch>
                </div>
                <div className="border-t border-gray pt-2 text-right">
                  Search by ALGOLIA
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
