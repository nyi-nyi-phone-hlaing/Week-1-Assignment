import Card from "./Card";

const List = (props) => {
  const { userInfos } = props;
  return (
    <div className='list-container'>
      {userInfos.length > 0 ? (
        <>
          {userInfos.map((info) => (
            <Card key={info.email} info={info} />
          ))}
        </>
      ) : (
        <p>No user data avaliable now.</p>
      )}
    </div>
  );
};

export default List;
