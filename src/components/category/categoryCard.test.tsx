import { render, screen, waitFor } from '@testing-library/react'
import CategoryCard from './categoryCard'
import { ReactComponent as BooksLogo } from '../../assets/books.svg'
import { ReactComponent as ComputerLogo } from '../../assets/computer.svg'
import { ReactComponent as FilmLogo } from '../../assets/film.svg'
import { ReactComponent as KnowledgeLogo } from '../../assets/knowledge.svg'


const result:[string,JSX.Element][] = [['Computer', <ComputerLogo />], ['Film', <FilmLogo />], ['General Knowledge', <KnowledgeLogo />],['Books', <BooksLogo />]]

describe('categoryCard', () => {
    it.each(result)('renders category name %s and corresponding icon', async (name, icon) => {
        
        const { container } = render(<CategoryCard name={ name }  icon={ icon}/>)
        waitFor (() => {
            const svg: any =  screen.getByTitle(name)
            expect(svg).toBeTruthy()
        })
    
        expect(container.textContent).toMatch( name);
        

    })

})