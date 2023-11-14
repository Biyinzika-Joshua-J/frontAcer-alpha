"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes({setFileName}:{setFileName:(file:string)=>void}) {
 const [activeLanguage, setActiveLanguage] = React.useState('JavaScript')
  const [python, setPython] = React.useState<Checked>(false)
  const [js, setJS] = React.useState<Checked>(true)

  function onCheckedChangeHandler(lang:string){
        if (lang === 'js'){
            setJS(true)
            setPython(false)
            setActiveLanguage('JavaScript')
            setFileName('main.js')
        }else if (lang === 'python'){
            setPython(true)
            setJS(false)
            setActiveLanguage('Python')
            setFileName('main.py')
        }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-[#303134] hover:bg-[#303134] text-white hover:text-white outline-none border-none min-w-[150px]">{activeLanguage} <FontAwesomeIcon icon={faChevronCircleDown} className="text-white ml-2" size="1x"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Langauge </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={python}
          onCheckedChange={()=>onCheckedChangeHandler('python')}
        >
         Python
        </DropdownMenuCheckboxItem>
       
        <DropdownMenuCheckboxItem
          checked={js}
          onCheckedChange={()=>onCheckedChangeHandler('js')}
        >
          JavaScript
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
