function TagItem({tag, index, setTags}) {
    const handleClick = position => setTags(prev => prev.filter((tag, index) => index !== position));

    return (
        <div className="btn tag">
            {tag}
            <i onClick={() => handleClick(index)} className="fas fa-times"></i>
        </div>
    );
}

function App() {
    const [tag, setTag] = React.useState('');
    const [tags, setTags] = React.useState(() => ['reactjs', 'nodejs']);

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            setTag(tag.trim());
            if (tag && !tags.includes(tag))
                setTags(prev => [...prev, tag]);
            setTag('');
        }
    };

    return (
        <div className="container">
            <div className="header">Search Tags</div>
            <div className="body">
                { tags.map((tag, index) => <TagItem setTags={setTags} key={index} tag={tag} index={index} />)}
                <input onChange={e => setTag(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Type and enter" value={tag} autoFocus={true}/>
            </div>
            <div onClick={() => setTags([])} className="btn footer">Remove All</div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));