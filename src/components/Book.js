const Book = (props) => {
    const { title, author } = props;
    return (
        <>
            <h2>{title}</h2>
            <p>{ author}</p>
        </>
    )
}

export default Book