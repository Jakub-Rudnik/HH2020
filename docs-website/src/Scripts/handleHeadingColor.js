const handleHeadingColor = (x) => {
  switch (x) {
    case 'black':
      return '#303030';
    case 'grey':
      return '#F5F5F7';
    case 'yellow':
      return 'yellow';
    default:
      return '-webkit-linear-gradient(#AACF8A, #2F9432);';
  }
};

export default handleHeadingColor;
