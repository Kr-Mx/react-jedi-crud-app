import { useHistory } from 'react-router-dom'

export const useSectionName = () => useHistory().location.pathname.split('/')[1]
