import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DataGrid, GridToolbar, elGR } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import { Navigate, useNavigate } from "react-router-dom"
//DATA FETCHING
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../../../redux/categories/categoriesActions'

const screenHeight = window.innerHeight - 0.15 * window.innerHeight

const theme = createTheme(elGR)

function Categories() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categoriesList = useSelector((state) => state.categoriesList)
  const { loading, error, categories } = categoriesList
  
  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  const rows = categories

  console.log('categories', categories)
  
  const handleClick = (cellValues) => {
    console.log(cellValues.row._id)
    navigate(`${cellValues.row._id}`)
  };

  const columns = [
    { field: 'name', headerName: 'Ονομασία', flex: 1 },
    { field: 'description', headerName: 'Περιγραφή', flex: 2.3 },
    { field: '_id', headerName: 'ID', flex: 0.1 },
    {
      field: 'Επεξεργασία',
      headerName: '',
      renderCell: (cellValues) => {
        return (
          <Button
          variant='contained'
          color='primary'
          onClick={() => {
            handleClick(cellValues)
          }}>
            Edit
          </Button>
        )
      },
    },
  ]

  return (
    <div style={{ height: screenHeight, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          columns={columns}
          getRowId={(row) => row._id}
          rows={rows}
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            panel: {
              sx: {
                '& .MuiTypography-root': {
                  color: '',
                  fontSize: 20,
                },
              },
            },
          }}
          />
      </ThemeProvider>
    </div>
  )
}

export default Categories
