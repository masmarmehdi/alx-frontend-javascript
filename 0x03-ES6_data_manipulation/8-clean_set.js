export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== "string") {
    return "";
  }

  let final_string = "";

  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      final_string += `${element.slice(startString.length)}-`;
    }
  });

  return final_string.slice(0, final_string.length - 1);
}
