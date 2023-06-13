
export function ReturnExperienceData({ year, place, description, role }) {
    return (
        <>
            <h3>{place}</h3>
            <div>
                <b><span>{role}</span> - <span>{year}</span></b>
            </div>
            <p>{description}</p>
        </>
    )

}