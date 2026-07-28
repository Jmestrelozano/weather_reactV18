import { ICityGroup, ICityWorld } from "../../../interfaces/slices.interface";

export const groupCitiesByInitial = (cities: ICityWorld[]): ICityGroup[] => {
  const groups = new Map<string, ICityWorld[]>();

  cities.forEach(({ city }) => {
    const sigla = city.charAt(0);
    const group = groups.get(sigla);

    if (group) {
      group.push({ city });
      return;
    }

    groups.set(sigla, [{ city }]);
  });

  return Array.from(groups.entries()).map(([sigla, data]) => ({ sigla, data }));
};

export const findCityByExactName = (
  name: string,
  groups: ICityGroup[],
): ICityWorld | undefined => {
  if (groups.length === 0 || name.trim() === "") {
    return undefined;
  }

  const initial = name.charAt(0).toUpperCase();
  const group = groups.find(({ sigla }) => sigla === initial);

  if (!group) {
    return undefined;
  }

  const normalizedName = name.toLowerCase();
  return group.data.find(({ city }) => city.toLowerCase() === normalizedName);
};
