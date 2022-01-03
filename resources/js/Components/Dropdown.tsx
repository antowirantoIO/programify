import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { PropsWithChildren, useEffect, useState } from 'react';

interface Props {
  align?: string;
  contentClasses?: string;
  renderTrigger(): JSX.Element;
}

export default function Dropdown({
  align = 'right',
  contentClasses = 'py-1 bg-white',
  renderTrigger,
  children,
}: PropsWithChildren<Props>) {
  const [open, setOpen] = useState(false);

  const alignmentClasses = (() => {
    if (align === 'left') {
      return 'origin-top-left left-0';
    } else if (align === 'right') {
      return 'origin-top-right right-0';
    } else {
      return 'origin-top';
    }
  })();

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      e.key === 'Escape' ? setOpen(false) : '';
    });
  }, []);

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)}>{renderTrigger()}</div>

      {/* <!-- Full Screen Dropdown Overlay --> */}
      <div
        className="fixed inset-0 z-40"
        style={{ display: open ? 'block' : 'none' }}
        onClick={() => setOpen(false)}
      ></div>

      <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={classNames(
            'absolute w-60 z-50 mt-2 rounded-md shadow-lg',
            alignmentClasses,
          )}
          onClick={() => setOpen(false)}
        >
          <div
            className={classNames(
              'rounded-md ring-1 ring-black ring-opacity-5',
              contentClasses,
            )}
          >
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}
