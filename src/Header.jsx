
                // (props)
const Header = ({title}) => {
  // console.log(props);
  // console.log(title);
  return (
    <header>
      {/* props.title */}
        <h1>{title}</h1>
    </header>
  )
}

// default props
Header.defaultProps = {
  title: "Default title"  
}
export default Header