export default function MuppetList({muppets}) {
  return (
    <ul className="muppet-list">
    {
      muppets.map(
        muppet =>
          <li key={muppet.name}>
            {muppet.name}
          </li>
      )
    }
    </ul>
  );
}
