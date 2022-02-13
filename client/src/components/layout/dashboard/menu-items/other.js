// assets
import SettingsEthernet from '@mui/icons-material/SettingsEthernet'
import Info from '@mui/icons-material/Info'

// ==============================|| other MENU ITEMS ||============================== //

const other = {
  id: 'other',
  title: 'Λοιπά',
  type: 'group',
  icon: <SettingsEthernet/>,
  subheader: 'Test',
  children: [
    {
      id: 'appifno',
      title: 'Πληροφορίες εφαρμογής',
      type: 'item',
      url: '/info/',
      icon: <Info/>,
    }
  ],
}

export default other
