import { useEffect, useRef, useState } from 'react';

const useLazyBackgroundImage = (initialImage: string) => {
  const [bgImage, setBgImage] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBgImage(initialImage);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [initialImage]);

  return { ref, bgImage };
};

export default useLazyBackgroundImage;