import React, { useReducer, useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Flickr from 'flickr-sdk'
import SearchBar from './Search'
import SettingsBtn from './Settingsbtn'
import LogOutLink from './LogOut'
import UserGreeting from './UserGreeting'
import { GET_VIEWER, PREFERENCES } from './graphql'
import { Image } from '../Welcome/styles'
import {
  Container, Page, TopBarWrapper, WeatherWrapper,
} from './styles'

const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

const MainPage = () => {
  const [preferences, setPreferences] = useReducer(
    formReducer, {
      searchBar: true, weatherCur: true, greeting: true, orientation: 'CENTER',
    },
  )

  const { loading, error, data } = useQuery(GET_VIEWER, {
    onCompleted: ({ getViewer }) => setPreferences(
      {
        searchBar: getViewer.prefs.searchBar,
        weatherCur: getViewer.prefs.weatherCur,
        greeting: getViewer.prefs.greeting,
        orientation: getViewer.prefs.orientation,
      },
    ),
  })
  const [fade, setFade] = useState(false)
  const flickr = new Flickr('4f9c1a03cd916127c332df8c7bb5f877')
  const [weather, setWeather] = useState()
  const [image, setImage] = useState()
  const [temp, setTemp] = useState()
  const [description, setDescription] = useState()

  useEffect(() => {
    setTimeout(() => setFade(true), 500)
  }, [])
  useEffect(() => {
    if (!weather) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const weatherData = await response.json()
        setWeather(weatherData)
        setTemp(weatherData.main.temp)
        setDescription(weatherData.weather[0].description)
        const imgLibrary = await flickr.photos.search({
          text: `${weatherData.weather[0].description} background`,
          extras: ['url_c', 'description'],
          per_page: 1,
          sort: 'relevance',
          tags: 'desktop wallpaper',
        })

        if (imgLibrary.body.photos.photo[0].url_c) {
          setImage(imgLibrary.body.photos.photo[0].url_c)
        } else {
          setImage('https://cdn.wallpapersafari.com/64/53/DI52GS.jpg')
        }
      // eslint-disable-next-line no-alert
      }, () => alert('Failed to fetch weather data.'))
    }
  }, [weather])


  const [updatePrefs, { loadingPrefs, prefsError }] = useMutation(PREFERENCES, {
    variables: {
      input: preferences,
    },
    update: (client, { data: { updatePreferences } }) => {
      try {
        const currentData = client.readQuery({ query: GET_VIEWER })

        currentData.getViewer.prefs = updatePreferences

        client.writeQuery({ query: GET_VIEWER, data: currentData })
      } catch (e) {
        throw new Error(e)
      }
    },
  })


  if (error || prefsError) {
    return `${error}`
  }
  if (loading || loadingPrefs) {
    return 'Loading...'
  }

  const orientation = preferences.orientation.toLowerCase()
  let orient = ''
  if (orientation === 'center') {
    orient = 'center'
  } else if (orientation === 'flex_start') {
    orient = 'flex-start'
  } else {
    orient = 'flex-end'
  }


  return (


    <Page>
      <TopBarWrapper>
        <LogOutLink />
        <SettingsBtn
          preferences={data.getViewer.prefs}
          setPreferences={setPreferences}
          update={updatePrefs}
        />
      </TopBarWrapper>


      <Image
        src={image}
        alt="weather"
        fade={fade}
      />

      <Container style={{ justifyContent: orient }}>
        {preferences.greeting ? (
          <UserGreeting name={data.getViewer.firstName} />) : (null)}
        {preferences.weatherCur ? (
          <WeatherWrapper>
            {temp}
            ºF with
            {' '}
            {description}
          </WeatherWrapper>
        ) : null}
        {preferences.searchBar ? (
          <SearchBar />) : null}

      </Container>
    </Page>
  )
}

export default MainPage
