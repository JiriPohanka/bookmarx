import DataGrid from "./DataGrid"
import styled from "styled-components"
import tw from "twin.macro"

// styled-component
const StyledDataGrid = styled(DataGrid)`
${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4`}
`
export default StyledDataGrid
