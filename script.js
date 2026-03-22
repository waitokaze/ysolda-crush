const footStomp = document.querySelector("#foot-stomp");
const bam = document.querySelector(".bam");
const bamDuration = 500;
const bamObserver = new IntersectionObserver(
  ([{ isIntersecting, boundingClientRect }]) => {
    if (isIntersecting && boundingClientRect.top > 0) {
      // appear
      bam.animate(
        { opacity: [0, 1, 1, 0], offset: [0, 0.01, 0.7, 1] },
        bamDuration
      );
      bam.animate({ scale: [0.8, 1, 1], offset: [0, 0.8, 1] }, bamDuration);

      // shake
      bam.animate(
        {
          transform: [
            "translate3d(0, 0, 0)",
            "translate3d(-5%, 2%, 0)",
            "translate3d(8%, -4%, 0)",
            "translate3d(-8%, 4%, 0)",
            "translate3d(5%, -2%, 0)",
            "translate3d(0, 0, 0)"
          ]
        },
        bamDuration
      );
    }
  }
);
bamObserver.observe(footStomp);