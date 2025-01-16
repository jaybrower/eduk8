import './index.css';

const Footer = () => {
    return (
        <footer>
            <span className="text-xs">© {new Date().getFullYear()} Josiah Brower</span>
        </footer>
    );
}

export { Footer };