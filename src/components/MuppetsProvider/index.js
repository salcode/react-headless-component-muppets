import React from 'react';

export default function MuppetsProvider({children}) {
  const muppets = [
    {
      muppetShow: true,
      name: 'Fozzie Bear',
    },
    {
      name: 'Grover',
      sesameStreet: true,
    },
    {
      muppetShow: true,
      name: 'Gonzo',
    },
    {
      muppetShow: true,
      name: 'Kermit',
      sesameStreet: true,
    },
  ];

  // Add "muppets" prop to each children
  const childrenWithMuppetsProp = React.Children.map(
    children,
    (child) => {
      if (! React.isValidElement(child)) {
        return child;
      }
      return React.cloneElement(
        child,
        { muppets }
      );
    }
  );
  return (
    <>
      {childrenWithMuppetsProp}
    </>
  );
}
