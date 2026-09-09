const filenames = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
];

export function randomCatUrl() {
  const name = filenames[Math.floor(Math.random() * filenames.length)];
  return `${import.meta.env.BASE_URL}cats/${name}`;
}

export function catUrlForStop(stopIndex) {
  const name = filenames[stopIndex % filenames.length];
  return `${import.meta.env.BASE_URL}cats/${name}`;
}
