import { PropsWithChildren, useEffect, useState } from "react";
import { useAppSelector } from "../../Global/globales";
import { loadImage } from "../../Services/GlobalServices/loadImage.service";

export const BackgroundImage = ({ children }: PropsWithChildren) => {
  const url = `${import.meta.env.BASE_URL}assets/04d.avif`;
  const [iconRef, setIconRef] = useState(url);
  const {
    wheatherCity: { data },
  } = useAppSelector((store) => store.weather);

  const isExistImage = async () => {
    const weatherCondition = data[0]?.weather[0];
    if (!weatherCondition) {
      return;
    }

    const img = await loadImage(weatherCondition.icon);
    setIconRef(img);
  };
  useEffect(() => {
    void isExistImage();
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
