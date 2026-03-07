
function UserCard(props) {
  return (
    <>
      {/* <h4>Name:{props.name}</h4>
      <h4>Role:{props.role}</h4>
      <h4>Status:{props.isOnLine ? "Online" : "Offline"}</h4> */}
    
      <button onClick={props.updateStatus}>Toggle Status:</button>
    </>
  );
}

export default UserCard;
