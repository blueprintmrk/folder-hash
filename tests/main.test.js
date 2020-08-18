const util = require("../util");

test("get folder hash", async () => {
  const hash = await util.getHashFromFolder(["tests/fixtures/folder-hash"]);
  expect(hash).toBe("2cd272294a96ccb77798288e7c0eb6672bc47ef7");
});

test("get empty folder hash", async () => {
  const hash = await util.getHashFromFolder([
    "tests/fixtures/folder-hash-not-exist",
  ]);
  expect(hash).toBe("");
});
