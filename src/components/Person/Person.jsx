export const Person = ({ person }) => {

  const partnerRole = person.sex === 'm' ? 'wife' : 'husband';

  const ageElement = person.age && (
    <p className="Person__age">I am {person.age}</p>
  );

  const marriageStatus = person.isMarried
    ? `${person.partnerName} is my ${partnerRole}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {ageElement}

      <p className="Person__partner">{marriageStatus}</p>
    </div>
  );
};
