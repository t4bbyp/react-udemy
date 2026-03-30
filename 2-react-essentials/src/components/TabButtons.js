export default function TabButtons(props) {
  return (
    <li>
      <button
        className={props.isActive ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}

//can also do:
/*
export default function TabButtons({children}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    )
}
*/

/*another one for the ...props:
export... ({children, ...props}) {
  return ...
  <button className={blabla} {...props}>{children}</button>
}

here ...props replaces the onClick
*/
