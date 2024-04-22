export function MessageFormatter(message: string) {
  const formattedMessage = message.replace(/ /g, "%20");
  return formattedMessage;
}
