import Table1 from '@/components/home/Table1'
import Table2 from '@/components/home/Table2'
import React from 'react'

export default function page({params}) {
    if(params.page==1){
        return(
            <Table1/>
        )
    }
    else if(params.page==2){
        return(
            <Table2/>
        )
    }
    return null
}
