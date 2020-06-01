import axios from 'axios'
import { API_BASE_URL } from 'react-native-dotenv'

/**
 * Set Axios Base URL
 *
 * set API_BASE_URL to .env file at root folder to change api base url
 */
axios.defaults.baseURL = API_BASE_URL

/**
 * Creates a Axios request object
 *
 * @param params
 */
export const callApi = async (params, onSuccess, onError, allOnError = null) => {
  try {
    const response = await axios({...params})

    return onSuccess ? await onSuccess(response) : response
  } catch (error) {
    if (allOnError) allOnError(error)
    if (onError) onError(error)
    else throw error
  }
}
