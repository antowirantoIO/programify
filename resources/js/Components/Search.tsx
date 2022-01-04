import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import Input from './Input';

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
                <div className="flex items-center">
                  <Input
                    className="relative"
                    type="text"
                    placeholder="Belajar Laravel..."
                  />
                  <div className="absolute bg-gray-700 text-white text-tiny rounded-md py-1 px-2 mr-8 right-0">
                    ESC
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
