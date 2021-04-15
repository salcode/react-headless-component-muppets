export default function withMuppets(Wrapped) {
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
  return function(props) {
    return <Wrapped muppets={muppets} {...props} />;
  };
}
