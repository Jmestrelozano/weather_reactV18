export const loadImage = async (code: string) => {
  const url = `${import.meta.env.BASE_URL}assets/${code}.avif`;
  const urlDef = `${import.meta.env.BASE_URL}assets/04d.avif`;
  try {
    const resp = await fetch(url);

    if (resp.status === 200) {
      return resp.url;
    } else {
      return urlDef;
    }
  } catch (error) {
    return urlDef;
  }
};
