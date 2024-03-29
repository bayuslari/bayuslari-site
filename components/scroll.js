import React, { createContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useResizeObserver from 'use-resize-observer';

export const SmoothScrollContext = createContext({
  scroll: null,
  isReady: false
});

export const SmoothScrollProvider = ({ children, containerRef, options }) => {
  const { height } = useResizeObserver({ ref: containerRef });
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef(null);
  const { route } = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        console.log();
        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') ?? undefined,
          ...options
        });

        setIsReady(true); // Re-render the context
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`);
      }
    })();

    return () => {
      if (LocomotiveScrollRef.current) {
        LocomotiveScrollRef.current.destroy();
      }

      setIsReady(false);
    };
  }, [route]);

  useEffect(() => {
    if (LocomotiveScrollRef.current) {
      LocomotiveScrollRef.current.update();
    }
  }, [height]);

  return (
    <SmoothScrollContext.Provider
      value={{ scroll: LocomotiveScrollRef.current, isReady }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const SmoothScrollProviderWithouDestroy = ({
  children,
  options,
  containerRef
}) => {
  const { height } = useResizeObserver({ ref: containerRef });
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef(null);
  const { route } = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') ?? undefined,
          ...options
        });

        setIsReady(true); // Re-render the context
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`);
      }
    })();

    return () => {
      if (LocomotiveScrollRef.current) {
        LocomotiveScrollRef.current.destroy();
      }

      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (LocomotiveScrollRef.current) {
      LocomotiveScrollRef.current.update();
    }
  }, [height, route]);

  return (
    <SmoothScrollContext.Provider
      value={{ scroll: LocomotiveScrollRef.current, isReady }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';
SmoothScrollProviderWithouDestroy.displayName =
  'SmoothScrollProviderWithouDestroy';
