import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DataGrid, GridToolbar, elGR } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
//DATA FETCHING
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, deleteCategory, reset } from '../../../redux/categories/categoriesSlice'

const screenHeight = window.innerHeight - 0.18 * window.innerHeight

const theme = createTheme(elGR)

function Categories() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categories, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.categories
  )
  const [isDeleted, setIsDeleted] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [deletedCategory, setDeletedCategory] = useState({})

  useEffect(() => {
    dispatch(getCategories())
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch])

  useEffect(() => {
    if(isDeleted){
      if (isError) {
        toast.error('Ουπς, κάτι πήγε στραβά, ο σέρβερ λέει: ' + message )
      }

      if (isSuccess) {
        toast.info(`Η κατηγορία ${deletedCategory.name} διαγραφθηκε επιτυχώς`)
        setIsDeleted(false)
      }
    }
  }, [isDeleted])


  const rows = categories

  const handleClick = (cellValues) => {
    //TODO - make edit page a modal
    navigate(`${cellValues.row._id}`)
  }

  const handleDelete = (cellValues) => {
    setIsFirstLoad(false)
    setIsDeleted(true)
    setDeletedCategory(cellValues.row)
    dispatch(deleteCategory(cellValues.row._id))
    dispatch(getCategories())
  }

  // function handleShowModal() {
  //   console.log('showModal', showModal)
  //   setShowModal(!showModal)
  // }

  const columns = [
    { field: 'name', headerName: 'Ονομασία', flex: 1 },
    { field: 'description', headerName: 'Περιγραφή', flex: 2.3 },
    { field: '_id', headerName: 'ID', flex: 0.1, hide: true  },
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
    {
      field: 'Διαγραφή',
      headerName: '',
      renderCell: (cellValues) => {
        return (
          <Button
            variant='contained'
            color='error'
            onClick={() => {
              handleDelete(cellValues)
            }}>
            Διαγραφή
          </Button>
        )
      },
    },
  ]

  if (isLoading && isFirstLoad)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress className='spinner' />
      </Box>
    )

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
