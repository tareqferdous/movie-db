export const formatDateToFullString = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date)) {
    throw new Error("Invalid date");
  }

  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export default function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function toMillion(num) {
  return (num / 1_000_000).toFixed(1) + "M";
}
