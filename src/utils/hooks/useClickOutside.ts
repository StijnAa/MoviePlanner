import { useCallback, useEffect } from "react";

export type UseClickOutsideOptions = {
  ref: React.RefObject<HTMLElement>;
  onClick: () => void;
};

const useClickOutside = (options: UseClickOutsideOptions) => {
  const { ref, onClick } = options;

  const effectHandler = useCallback(() => {
    const onClickOutside = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or inside it
      const target = event.target as Node;
      if (target) {
        if (!ref.current || ref.current.contains(target)) {
          return;
        }
      }

      onClick();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClick();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(effectHandler, [options]);
};

export default useClickOutside;
