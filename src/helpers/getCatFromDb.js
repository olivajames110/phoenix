import { isArray, isNil } from "lodash";
import { db } from "../database/db";

export const getCatFromDb = ({
  list,
  animalName,
  returnProperty,
  returnPropertyIndex,
}) => {
  const cats = isNil(list) ? db.cats : list;
  const filteredCat = cats.filter((c) => c.name === animalName);
  const cat = filteredCat[0];
  if (isNil(cat)) {
    return "Unknown";
  }
  if (isNil(returnProperty) && isNil(returnPropertyIndex)) {
    return cat;
  }

  const returnVal = cat[returnProperty];

  if (isNil(returnPropertyIndex)) {
    return returnVal;
  }

  if (!isArray(returnVal)) {
    return returnVal;
  }
  const returnValItem = returnVal[returnPropertyIndex];
  return returnValItem;
};
