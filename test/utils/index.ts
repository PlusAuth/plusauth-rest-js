import Done = Mocha.Done;

export function expectPromise(arg: any, done: Done) {
  arg.then(done.bind(null, null))
    .catch(done.bind(null, null));
}
