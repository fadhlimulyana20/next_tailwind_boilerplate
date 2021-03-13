import React, { ReactEventHandler, RefObject, useEffect, useRef } from 'react'
import { OutsideActionProps, OutsideDivClickProps } from './interface';

/**
 * Hook that alerts clicks outside of the passed ref
 */
 const useOutside = (
   ref: RefObject<HTMLDivElement>,
   callback: () => void
 ) =>  {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
          if (ref.current && !ref.current.contains(event.target)) {
              callback()
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

/**
* Component that alerts if you click outside of it
*/
export const OutsideAction: React.FC<OutsideActionProps> = ({ children, callback }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutside(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
}