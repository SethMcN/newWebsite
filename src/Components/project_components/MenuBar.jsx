import { React, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 20000, easing: (t) => t };

export default function MenuBar() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 4,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide javascript-logo">
        <img src="\language_icons\javascript-logo-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide html-logo">
        <img src="\language_icons\html-logo-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide css-logo">
        <img src="\language_icons\css-logo-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide react-logo">
        <img src="\language_icons\react-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide python-logo">
        <img src="\language_icons\python-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide C-logo">
        <img src="\language_icons\c-64x64.png" alt="" />
      </div>
    </div>
  );
}
