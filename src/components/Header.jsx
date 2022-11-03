function Header({text}) {
  return (
    <header>
        <h2>{text}</h2>
    </header>
  )
}
Header.defaultProps = {
    text: 'Feedback App'
}
export default Header
