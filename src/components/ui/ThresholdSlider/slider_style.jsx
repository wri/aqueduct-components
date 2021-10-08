const style = ({ colors }) => {
  const height = 14;
  const bgColors = colors || ['#ffffc1', '#fff063', '#ffc163', '#ff7263', '#c16363'];
  const gradientStops = bgColors.map((color, i) => {
    const basePercentage = 100 / bgColors.length;
    const percentOne = i > 1 ? `${basePercentage * i}%` : `${basePercentage}%`;
    const percentTwo = i > 0 ? `${basePercentage * (i + 1)}%` : '';
    return ` ${color} ${percentOne} ${percentTwo}`;
  });
  const handleStyle = {
    height: height * 2,
    width: height * 2,
    marginTop: (height / 2) * -1,
    border: 0,
    boxShadow: '1px 4px 10px 2px rgba(0,0,0,.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateX(-25%) !important'
  };
  const trackStyle = {
    height,
    background: 'rgba(0,0,0,0)'
  };
  const railStyle = {
    height,
    background: `linear-gradient(to right, ${gradientStops.join(', ')}`
  };
  const dotStyle = {
    height: 8,
    width: 8,
    top: '-50%',
    bottom: 'auto',
    transform: 'translateY(50%)',
    background: 'rgba(0,0,0,.2)',
    border: 0,
    '&:nthChild(odd)': {
      height: '12px !important',
      width: '12px !important'
    },
    '&:firstOfType': {
      transform: 'translateX(100%)'
    },
    '&:lastOfType': {
      transform: 'translateX(-100%)'
    }
  };
  return {
    dotStyle,
    handleStyle,
    railStyle,
    trackStyle
  };
};

export default style;
