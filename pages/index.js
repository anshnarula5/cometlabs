import {Paper} from "@mui/material"
import {useEffect} from "react"
import DataTab from "../components/DataTab"
import {getData}from "../redux/actions/dataAction"

export default function Home() {

  return (
    <Paper sx = {{my : 5}}>
      <DataTab />
    </Paper>
  )
}