const { deterministicPartitionKey } = require("./dpk");

const PARTION_KEY_384_LENGTH = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49fddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49fddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f';

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns the literal of length 128 when no partitionKey is supplied ",  () => {
    const hexKey = deterministicPartitionKey({});
    expect(hexKey.length).toBe(128)
  })

  it("Returns the same literal as partitionKey as string when length is less than 256 and number is supplied",  () => {
    const hexKey = deterministicPartitionKey({ partitionKey: 12321});
    expect(hexKey).toBe("12321")
  });

  it("Returns the same literal as partitionKey when length is less than 256",  () => {
    const hexKey = deterministicPartitionKey({ partitionKey: "12231231"});
    expect(hexKey).toBe("12231231")
  });

  it("Returns the literal of length 128 when partitionKey of length greater than 256 is supplied ",  () => {
    const hexKey = deterministicPartitionKey({ partitionKey: PARTION_KEY_384_LENGTH});
    expect(hexKey.length).toBe(128)
  })
});
