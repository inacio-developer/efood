export const formatsFieldText = (
  e: React.ChangeEvent<HTMLInputElement>,
): string => {
  let name: string = e.target.value
    .replace(/[0-9.,=\-/@*&_+.:;?¨'!#$&()]/g, '')
    .replace(/\s+/g, ' ');
  return name;
};
