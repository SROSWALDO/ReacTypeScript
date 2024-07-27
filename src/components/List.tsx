interface Props {
  subs: Array<{
    nick: string;
    subMonths: number;
    avatar: string;
    description?: string;
  }>;
}

const List = ({ subs }: Props)  => {
  return (
    <div className="App">
      <h2>Midu subs</h2>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img
                style={{ width: "100px", borderRadius: "100%" }}
                src={sub.avatar}
                alt={`avatar for ${sub.nick}`}
              />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>){" "}
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
