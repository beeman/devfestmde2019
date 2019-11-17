export class StringHelper {
  static alphanumeric(str: string): string {
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  static diacritics(str: string): string {
    const map = {
      '-': '_',
      a: 'á|à|ã|â|À|Á|Ã|Â',
      e: 'é|è|ê|É|È|Ê',
      i: 'í|ì|î|Í|Ì|Î',
      o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      c: 'ç|Ç',
      n: 'ñ|Ñ',
    };

    str = str.toLowerCase();

    for (let pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    }

    return str;
  }

  static searchable(str: string = ''): string {
    let result = StringHelper.diacritics(str);
    result = StringHelper.alphanumeric(result);
    return result.toLocaleLowerCase()
  }
}
