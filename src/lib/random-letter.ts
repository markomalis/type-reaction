const alphabet: string = "abcdefghijklmnopqrstuvwxyz"
const alphabetLength: number = alphabet.length

export default function(): string {
  return alphabet.charAt(Math.floor(Math.random() * alphabetLength))
}