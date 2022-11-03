function Header({text, bgColor, textColor}) {
  const headerStyle= {
      backgroundColor: bgColor,
      color: textColor
  }
  return (
    <header style={headerStyle}>
        <h2>{text}</h2>
    </header>
  )
}
Header.defaultProps = {
    text: 'Feedback App',
    bgColor: '#59C3C3',
    textColor: '#fff'
}
export default Header
