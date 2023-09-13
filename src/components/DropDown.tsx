import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { ICategory } from '@/@types/blog';

type IDropDownProps = {
  selected: ICategory;
  onChange: (selected: ICategory) => void;
  options?: ICategory[];
  name: string;
  placeholder?: string;
  style?: string;
  showClose?: boolean;
};

export default function DropDown({
  name,
  selected,
  options,
  placeholder,
  onChange,
  style,
  showClose = false,
}: IDropDownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      role="button"
      className={`relative w-full transition-all duration-200 ease-in-out ${
        style && style
      }`}
      onClick={toggleOpen}
      ref={dropdownRef}
    >
      <div className="relative w-full">
        <input
          type="text"
          id={name}
          name={name}
          value={selected?.name}
          className="h-10 w-full cursor-pointer rounded-lg border border-gray-50 bg-white px-4 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500 focus-visible:outline-none"
          placeholder={placeholder}
          required
          readOnly
        />
        {selected?.name && showClose && (
          <div
            role="button"
            className="absolute bottom-0 right-9 top-0 flex items-center text-gray-300 hover:text-gray-600"
            onClick={() => onChange({ id: null, name: '', slug: '' })}
          >
            <IoClose />
          </div>
        )}
        <div
          role="button"
          className="absolute bottom-0 right-4 top-0 flex items-center text-gray-300 hover:text-gray-600"
        >
          <svg
            className="h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </div>
      {options?.length && open && (
        <div className="left-0 right-0 z-40 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-300/60 bg-white md:absolute md:border-none">
          {options.map((option, idx) => (
            <div
              role="button"
              key={option.slug}
              className={`flex w-full flex-row items-center hover:bg-gray-300 ${
                !idx && 'rounded-t-lg'
              } ${idx == options.length - 1 && 'rounded-b-lg'} ${
                idx && 'border-t border-t-gray-300/60'
              }`}
              onClick={() => {
                onChange(option);
                toggleOpen();
              }}
            >
              <p className="px-4 py-2.5 !text-sm text-gray-600">
                {option.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
