import data from "../../data/courses.json";

const numItems = data.length;

// test('Number of items equal to 12', () => {
//     expect(numItems).toBe(12);
// });

// test('Number of items greater than or equal to 12', () => {
//     expect(numItems).toBeGreaterThanOrEqual(12);
// });

// ✨ REFACTORED ✨
describe("Number tests", () => {
  test("Number of items equal to 12", () => {
    expect(numItems).toBe(12);
  });

  test("Number of items greater than or equal to 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

// test('There is a JS in this title', () => {
//     expect(dataTest).toMatch(/JS/);
// });

// test('The title contains React', () => {
//     expect(dataTest).toContain('React');
// });

// ✨ REFACTORED ✨
describe("String tests", () => {
  test("There is a JS in this title", () => {
    expect(dataTest).toMatch(/JS/);
  });

  test("The title contains React", () => {
    expect(dataTest).toContain("React");
  });
});

const data2 = ["React", "React Native"];

// test('The list of courses contains React Native and React', () => {
//     //expect(data2).toEqual(expect.arrayContaining(data2));
//     expect(['React', 'React Native', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
// });

// test('The first course to have a property title', () => {
//     expect(data[0]).toHaveProperty('title');
// });

// test('The first course to have a property title and value of 31,266', () => {
//     //expect(data[0]).toHaveProperty('title', '31,266');
//     expect(data[0]).toHaveProperty('views', '31,266');
// });

// ✨ REFACTORED ✨
describe("Arrays and Objects tests", () => {
  test("The list of courses contains React Native and React", () => {
    //expect(data2).toEqual(expect.arrayContaining(data2));
    expect(["React", "React Native", "MeteorJS"]).toEqual(
      expect.arrayContaining(data2)
    );
  });

  test("The first course to have a property title", () => {
    expect(data[0]).toHaveProperty("title");
  });

  test("The first course to have a property title and value of 31,266", () => {
    //expect(data[0]).toHaveProperty('title', '31,266');
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
