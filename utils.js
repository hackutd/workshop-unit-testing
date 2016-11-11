module.exports = {
  reverse(text) {
    if (this.isString(text)) {
      return text.split('').reverse().join('');
    }

    return undefined;    
  },  
  isString(value) {
    return typeof value === 'string';
  },
  piglatin(message) {
    if (this.isString(message)) {
      const words = message.toLowerCase().split(' ');
    
      for (let i = 0; i < words.length; i++) {
        words[i] = this.reverse(words[i]);
        words[i] = words[i] + 'ay';
      }

      const result = words.join(' ');
      const sentence = result.charAt(0).toUpperCase() + result.slice(1);

      return sentence;
    }

    return undefined;
  },
};
