import { React, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 20000, easing: (t) => t };

const MenuBar = (props) => {
  const setLanguage = props.setLanguage;

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 4,
    },
    beforeChange(s) {
      console.log("changed");
      s.update();
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

  const javascript = () => {
    setLanguage("JavaScript");
  };

  const html = () => {
    setLanguage("HTML");
  };

  const css = () => {
    setLanguage("CSS");
  };

  const react = () => {
    setLanguage("React");
  };

  const python = () => {
    setLanguage("Python");
  };

  const c = () => {
    setLanguage("C");
  };

  return (
    <div ref={sliderRef} className="keen-slider">
      <div
        className="keen-slider__slide javascript-logo language-logo"
        onClick={javascript}
      >
        <img src="\language_icons\javascript-logo-64x64.png" alt="" />
      </div>

      <div
        className="keen-slider__slide html-logo language-logo "
        onClick={html}
      >
        <img src="\language_icons\html-logo-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide css-logo language-logo" onClick={css}>
        <img src="\language_icons\css-logo-64x64.png" alt="" />
      </div>

      <div
        className="keen-slider__slide react-logo language-logo"
        onClick={react}
      >
        <img src="\language_icons\react-64x64.png" alt="" />
      </div>

      <div
        className="keen-slider__slide python-logo language-logo"
        onClick={python}
      >
        <img src="\language_icons\python-64x64.png" alt="" />
      </div>

      <div className="keen-slider__slide C-logo language-logo" onClick={c}>
        <img src="\language_icons\c-64x64.png" alt="" />
      </div>
    </div>
  );
};

export default MenuBar;
