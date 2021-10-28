import React from 'react'
import { ReactComponent as SportsLogo } from '../../assets/sports.svg'
import { ReactComponent as BooksLogo } from '../../assets/books.svg'
import { ReactComponent as ComputerLogo } from '../../assets/computer.svg'
import { ReactComponent as KnowledgeLogo } from '../../assets/knowledge.svg'
import { ReactComponent as MythologyLogo } from '../../assets/mythology.svg'
import { ReactComponent as GamesLogo } from '../../assets/boardGames.svg'

import CategoryCard from './categoryCard'


const iconArray:[string, JSX.Element][] = [ ["Sports",<SportsLogo />], ["Books",<BooksLogo />], ["Computer",<ComputerLogo />], ["Board Games",<GamesLogo />], ["General Knowledge",<KnowledgeLogo />], ["Mythology",<MythologyLogo />]]

const CategoryPage = (): JSX.Element => {
    return(
        <div>
        {
            iconArray.map((logo: [string, JSX.Element]) => (
                <CategoryCard name={logo[0]} icon={logo[1]} />
            ))
        }
        </div>
    )
}

export default CategoryPage