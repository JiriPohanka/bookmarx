import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

function Card({ item, dragClass, className }) {

    return (
        <div className={`${className} card-file`}>
            {item.title ? <h4>{item.title}</h4> : <h4>{item.url}</h4>}
            <p>{item.description}</p>
            <p>{item.rating}</p>
            {/* keywords */}
            <div>
                {item.keywords.map(item => <span>{item}</span>)}
            </div>
        </div>
    );
}

// styles
const StyledCard = styled(Card)`
${tw`p-4 bg-red-200 break-all`}
`
export default StyledCard
