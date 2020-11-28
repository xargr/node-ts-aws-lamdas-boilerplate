interface PrintMessage {
  (message: string): void;
}

const printMessage: PrintMessage = (message) => {
  console.log(message);
}

export default printMessage;