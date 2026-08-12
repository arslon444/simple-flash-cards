package org.example.web.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.example.domain.model.Card;
import org.example.domain.service.CardService;
import org.example.web.mapper.CardMapperWeb;
import org.example.web.model.CardWeb;
import org.example.web.model.DeckWeb;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/dashboard/deck")
public class CardController {
    private final CardService cardService;
    private final CardMapperWeb cardMapperWeb;

    @PostMapping("/createcard")
    public CardWeb createCard(@Valid @RequestBody CardWeb request) {
        Card card = cardService.createCard(request.getFront(), request.getBack(), request.getDeckId());
        return cardMapperWeb.toWeb(card);
    }

    @GetMapping("/getcards/{deckId}")
    public List<CardWeb> getCards(@PathVariable UUID deckId) {
        List<Card> cards = cardService.getCardByDeck(deckId);
        return cards.stream()
                .map(cardMapperWeb::toWeb)
                .toList();
    }

    @PutMapping("/edit/update")
    public CardWeb updateCard(@RequestBody CardWeb request) {
        Card card = cardService.updateCard(request.getFront(), request.getBack(), request.getId());
        return cardMapperWeb.toWeb(card);
    }

    @GetMapping("/getrandomcard/{deckId}")
    public Card getRandomCard(@PathVariable UUID deckId) {
        return cardService.getRandomCard(deckId);
    }

    @DeleteMapping("/edit/delete")
    public void deleteCard(@RequestBody DeckWeb request) {
        cardService.deleteCard(request.getId());
    }
}
