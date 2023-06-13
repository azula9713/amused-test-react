import "./LoadingAnimationStyles.scss";

function LoadingAnimation() {
  return (
    <div className="wrapper">
      <div className="cocktail">
        <div className="liquid" />
        <div className="ice-cubes">
          <div className="ice-cube ice-cube-1" />
          <div className="ice-cube ice-cube-2" />
          <div className="ice-cube ice-cube-3" />
        </div>
        <div className="lemon-slice" />
        <div className="leaves">
          <div className="leave leave-1" />
          <div className="leave leave-2" />
          <div className="leave leave-3" />
        </div>
        <div className="straw" />
        <div className="straw-surface" />
        <div className="shadow" />
      </div>
    </div>
  );
}

// Animation inspired by https://codepen.io/srekoble/pen/yqYwxY and https://dribbble.com/shots/4818487-Mojito

export default LoadingAnimation;
