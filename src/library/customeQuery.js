export function customReplace(str) {
    return str
      .replace(/&/g, '+')
      .replace(/=/g, '~')
      .replace(/,/g, '--');
  }

export function customReverseReplace(str) {
    return str
      .replace(/\+/g, '&')
      .replace(/~/g, '=')
      .replace(/--/g, ',');
  }
  