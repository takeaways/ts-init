type ShadowType = "hard";

interface Option {
  shadow_type: ShadowType;
  padding?: boolean;
}

function shadowizard(option: Option) {
  const images = document.querySelectorAll<HTMLImageElement>(".shadowizard");
  let shadow: string;
  if (option.shadow_type === "hard") {
    shadow = "0px";
  } else {
    shadow = "15px";
  }

  images.forEach((image) => {
    //x y shadow spread color
    image.style.boxShadow = `10px 10px ${shadow} 1px rgba(0,0,0,0.12)`;

    if (option.padding) {
      image.style.padding = `1em`;
    }
  });
}

export default shadowizard;
