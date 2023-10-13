import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import axios from 'axios'
import Weather from '../components/Weather'

jest.mock('axios')


describe('Weather Component', () => {
    it('fetches and displays weather data', async () => {
        const mockWeatherData = {
            name: 'Pretoria',
            sys: {
                country: 'ZA',
            },
            main: {
                temp: 25,
                feels_like: 26,
                humidity: 50,
            },
            weather: [
                {
                    description: 'Partly cloudy',
                },
            ],
        }

        axios.get.mockResolvedValue({ data: mockWeatherData })

        render(<Weather />)

        await screen.findByText(/Pretoria | ZA/)

        // Verify that the weather data is displayed correctly
        expect(screen.getByText('25°')).toBeInTheDocument()
        expect(screen.getByText('Partly cloudy')).toBeInTheDocument()
        expect(screen.getByText('Feels like: 26°')).toBeInTheDocument()
        expect(screen.getByText('Humidity: 50%')).toBeInTheDocument()
    })
})
