const myPromise = new Promise((resolve, reject) => {
  let user = "Yogendra";
  let password = "1234";

  if (user === "Yogendra" && password === "1234") {
    resolve("success");
  } else {
    reject("invalid");
  }
});

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => console.log(msg))
  .finally(() => console.log("resource closed"));

async function Handlelogin() {
  const status = await myPromise;
  console.log(status);
}

async function orderRecieved() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("One order recieved");
    }, 1000);
  });
}

async function orderPreparation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("order prepared");
    }, 1000);
  });
}

async function HandleOrder() {
  const statuslogin = await myPromise;

  if (statuslogin === "success") {
    const status = await orderRecieved();
    console.log(status);
    return status;
  }
}

async function handleOrderPremp() {
  const statuslogin = await myPromise;

  if (statuslogin === "success") {
    const status = await orderPreparation();
    console.log(status);
    return status;
  }
}

async function orderHandOver() {
  const prepared = await handleOrderPremp();

  if (prepared) {
    console.log("Order handed over");
    return "Order handed over";
  }
}

async function orderCompleted() {
  const handedOver = await orderHandOver();

  if (handedOver) {
    console.log("Order completed");
    return "Order completed";
  }
}

orderCompleted();
