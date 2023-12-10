
import { render, screen, fireEvent } from "@testing-library/react";
import EmojiCard from "../components/organisms/EmojiCard";

describe("<EmojiCard/>", () => {
    test("Render an emoji card", () => {


        const happy = {
            'name': 'Feliz',
            'imageUri': 'feliz.png',
            'description': ' Este emoji está tan contento que si pudiera, estaría dando saltos de alegría y arrojando confeti por todas partes. Es como la versión emoji de una fiesta sorpresa: llena de entusiasmo y diversión.'
        }

        render(<EmojiCard path={happy.imageUri} name={happy.name} description={happy.description}/>)

        const titleEmojiHappy = screen.getByText("Feliz");
        const altEmojiSuspicious = screen.getByAltText("Feliz");


        expect(titleEmojiHappy).toBeInTheDocument();
        expect(altEmojiSuspicious).toBeInTheDocument();
    })
})