interface Props {
  followers: Array<Follower>
}

export default function List({followers}: Props) {
  return (
    <>
      <div className="App">
        <h1>Followers</h1>
        <div className="followers">
          {followers.map((follower) => (
            <div className="follower">
              <img src={follower.avatar} alt="avatar"/>
              <h3>{follower.name}</h3>
              <p>{follower.age}</p>
              <p>{follower.description?.substring(1, 100)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
