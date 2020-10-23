const handleParagraphColor = (x) => {
  switch (x) {
    case 'grey':
      return '#F5F5F7';
    case 'yellow':
      return 'yellow';
    default:
      return '#303030';
  }
};

export default handleParagraphColor;
