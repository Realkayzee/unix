import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

const ModalFrame = ({ open, setOpen, children, className }: ModalProps) => {
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative p-4 w-full max-w-md rounded-xl shadow ${className}`}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFrame;
