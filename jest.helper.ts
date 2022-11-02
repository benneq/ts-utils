export function* symbolGenerator() {
  let counter = 0;
  while (true) {
    yield Symbol(++counter);
  }
}
