import * as React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import CategoryCard from './categoryCard'
import { ReactComponent as BooksLogo } from '../../assets/books.svg'
import { ReactComponent as ComputerLogo } from '../../assets/computer.svg'
import { ReactComponent as FilmLogo } from '../../assets/film.svg'
import { ReactComponent as KnowledgeLogo } from '../../assets/knowledge.svg'
import CategoryPage from './index'



const result:[string,JSX.Element][] = [['Computers', <ComputerLogo />], ['Film', <FilmLogo />], ['General Knowledge', <KnowledgeLogo />],['Books', <BooksLogo />]]

describe('categoryCard', () => {
    it.each(result)('renders category name %s and corresponding icon', async (name, icon) => {
        
        const { container } = render(<CategoryCard name={ name }  icon={ icon} colour={{}}/>)
        await waitFor (() => {
            const svg: any =  container.getElementsByTagName('svg')//container.children[0]//.getElementsByTagName('svg')
            expect(svg).toBeTruthy()
        })
    
        expect(container.textContent).toMatch( name);    
    })

    it('should change colour when clicked', async () => {
        const setColour = jest.fn()
        const useStateMock: any = (init: any) => [init, setColour];
        const useStateSpy = jest.spyOn(React, 'useState');

        useStateSpy.mockImplementation(useStateMock);
        

        const { container } = render(<CategoryCard setColour={ setColour } colour={{}} name="Computer" icon={<ComputerLogo />}/>);
        const button = container.children[0];
        let style = window.getComputedStyle(button);
        fireEvent.click(button);

        expect(setColour).toHaveBeenCalled();
        expect(style.backgroundColor).toBe('rgb(232, 218, 239)')// green

    });


})