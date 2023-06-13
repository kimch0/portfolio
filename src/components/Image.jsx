
export function ReturnImage({ img = '', alt = '', className = '', width = ''}) {
    return (
        <div className={className}>
            <img src={img} alt={alt} width={width} />
            <span className="tooltiptext">{alt}</span>
        </div>
    )
}