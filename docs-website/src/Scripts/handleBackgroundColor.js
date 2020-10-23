const handleBackgroundColor = (x) => {
  switch (x) {
    case 'black':
      return '#303030';
    case 'yellow':
      return 'yellow';
    default:
      return '#F5F5F7';
  }
};

export default handleBackgroundColor;
