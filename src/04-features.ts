function makeArr<T>(arg: T): T[] {
  return [arg];
};

const arrayOfString: string[] = makeArr<string>('abc');
const arrayOfNumber: number[] = makeArr<number>(123);

export interface ListItem<T> {
  data: T,
  desc: string,
}
const numberListItem: ListItem<number> = { data: 2, desc: '' };

//--------------------------------------------------

enum DaysOfWeek {
  Sun, // 0
  Mon, // 1
  Tue, // 2
  Wed, // 3
  Thu, // 4
  Fri, // 5
  Sat = 6
};

let today = DaysOfWeek.Thu;

enum CatNames {
  Masya, // 0
  Lucy = 5,
  Chloe, // 6
  Sophie = 10,
  // .... // 11, 12, ...
  Simba = 'justCat',
  Misty = 1, // Error
};

interface Cat {
  name: CatNames
}

const cat: Cat = {
  name: CatNames.Misty,
}

console.log(CatNames[0], CatNames.Lucy); // Masya, 5