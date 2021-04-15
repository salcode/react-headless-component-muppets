export default function MuppetList({Muppet, muppets}) {
  return (
    <ul className="muppet-list">
    {
      muppets.map(
        muppet =>
          <li key={muppet.name}>
            <Muppet
              name={muppet.name}
            />
          </li>
      )
    }
    </ul>
  );
}
