
const Footer = ({ length }) => {
    const todat = new Date();
    return (
        <footer>
            <h3>Footer</h3>
            <p style={{margin: "0.5rem", color:"#f60707"}}>
                {/* {length} List {length <= 1 ? "Item" : "Items"} */}
            </p>
            <p className="copyright">Copyright {todat.getFullYear()}</p>
        </footer>
    )
}

export default Footer