import React from 'react';
import Circle from 'react-circle';

function Meter () {
  return (
    <Circle
      animate={true} // Boolean: Animated/Static progress
      animationDuration="10s" // String: Length of animation
      responsive={true} // Boolean: Make SVG adapt to parent size
      size="100" // String: Defines the size of the circle.
      lineWidth="25" // String: Defines the thickness of the circle's stroke.
      progress="100" // String: Update to change the progress and percentage.
      progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
      bgColor="#ecedf0" // String: Color of "empty" portion of circle.
      textColor="#6b778c" // String: Color of percentage text color.
      textStyle={{
        font: 'bold 4rem Helvetica, Arial, sans-serif', // CSSProperties: Custom styling for percentage.
      }}
      percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
      roundedStroke={true} // Boolean: Rounded/Flat line ends
      showPercentage={true} // Boolean: Show/hide percentage.
      showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
    />
  );
}
export default Meter;
