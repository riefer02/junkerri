import React, { useRef } from "react";
import { useModal } from "@/hooks/use-modal";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const Modal = () => {
  const { isActive, modalData, closeModal } = useModal();
  const ref = useRef(null);
  console.log({ modalData });
  useOnClickOutside(ref, () => closeModal());

  if (isActive)
    return (
      <div className="z-10 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div
          ref={ref}
          className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full border"
          onClick={() => closeModal()}
        >
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-0 text-center sm:mt-0 sm:text-left">
                {modalData?.image && (
                  <img src={modalData?.image} alt={modalData?.name} />
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                onClick={() => closeModal()}
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    );
};
