import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

function Card({ item, dragClass, className }) {

    console.log(item)

    return (
        <div className={`${className} card-file`}>
            <h4>{item.title}</h4>
            <p>{item.url}</p>
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
${tw`p-4 bg-red-200`}
`

const StyledYellowCard = styled(Card)`
${tw`p-4 bg-yellow-200`}
`

const StyledGrayCard = styled(Card)`
${tw`p-4 bg-gray-200`}
`
export default StyledCard
