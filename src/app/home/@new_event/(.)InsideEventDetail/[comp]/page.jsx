import React from 'react'

export default function page({params}) {
    return(
        <div>
            {
                params.comp === '1' ? <div>First</div> : <div>Second</div>
            }
        </div>
    )

}
