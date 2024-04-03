import { useTheme } from '../themes/ThemeContext';

const Button = () => {
    const { theme, toggleTheme } = useTheme()



return (
    <>
    <button type="button" onClick={toggleTheme} className={theme}>Cambiar</button>
    </>
)
}
export default Button;