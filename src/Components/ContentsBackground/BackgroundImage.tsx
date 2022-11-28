import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppSelector } from "../../Global/globales";
import { loadImage } from "../../Services/GlobalServices/loadImage.service";
import { storeInterface } from "../../Store/store";

export const BackgroundImage = ({ children }: any) => {
  const url = `${import.meta.env.BASE_URL}assets/04d.avif`;
  const [iconRef, setIconRef] = useState(url);
  const {
    wheatherCity: { data },
  } = useAppSelector((store: storeInterface) => store.weather);

  const isExistImage = async () => {
    if (data[0] !== undefined) {
      const { weather } = data[0];
      const { icon } = weather[0];

      const img = await loadImage(icon);
      setIconRef(img);
    }
  };
  useEffect(() => {
    isExistImage();
  }, [data, iconRef]);

  return (
    <div
      style={{ backgroundImage: `url(${iconRef})` }}
      className={`max-w-screen py-5 px-32 bg-cover bg-center bg-no-repeat  min-h-screen shadow-xl shadow-gray-400`}
    >
      {children}
    </div>
  );
};
