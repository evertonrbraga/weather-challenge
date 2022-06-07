import {useState, useEffect} from 'react';

import api from '../../services/api';
import { toCelsius } from '../../utils';
import { DataType } from './types';
import * as S from './styles'

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [data, setData] = useState<DataType | null>(null)

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(position => {
      setLatitude(position.coords.latitude.toString())
      setLongitude(position.coords.longitude.toString())
    })
  }, [])

  const handleWeather = () => {
    api.get(`?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`).then(response => {
      setData(response.data)
    })
  }

  return (
      <S.Container>
        <S.Title>Dados Climáticos</S.Title>
          {data && (
            <S.Box>
              <S.Column>
                <S.Item>
                  <h2>Cidade</h2>
                  <p>{data.name}</p>
                </S.Item>
                <S.Item>
                  <h2 data-testid='temperatura'>Temperatura</h2>
                  <p>{toCelsius(data.main.temp)}</p>
                </S.Item>
              </S.Column>
              <S.Column>
                <S.Item>
                  <h2>Umidade</h2>
                  <p>{data.main.humidity}%</p>
                </S.Item>
                <S.Item>
                  <h2>Vento</h2>
                  <p>{data.wind.speed}km/h</p>
                </S.Item>
              </S.Column>
            </S.Box>
          )}
        
        <S.Button onClick={handleWeather}>Buscar</S.Button>
      </S.Container>
  );
}

export default App;
