package org.example.web.controller;

import lombok.AllArgsConstructor;
import org.example.domain.model.Deck;
import org.example.domain.service.DeckService;
import org.example.web.mapper.DeckMapperWeb;
import org.example.web.model.DeckWeb;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/dashboard")
public class DeckController {
    private final DeckService deckService;
    private final DeckMapperWeb deckMapperWeb;

    @PostMapping("/createdeck")
    public DeckWeb createDeck(@RequestBody DeckWeb request) {
        UUID userId = (UUID) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Deck deck = deckService.createDeck(request.getName(), userId);
        return deckMapperWeb.toWeb(deck);
    }

    @GetMapping("/getdecks")
    public List<DeckWeb> getDecks() {
        UUID userId = (UUID) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Deck> decks = deckService.getDeckByUser(userId);

        return decks.stream()
                .map(deckMapperWeb::toWeb)
                .toList();
    }

    @PatchMapping("/edit/rename")
    public DeckWeb renameDeck(@RequestBody DeckWeb request) {
        Deck deck = deckService.renameDeck(request.getId(), request.getName());
        return deckMapperWeb.toWeb(deck);
    }

    @DeleteMapping("/edit/delete")
    public void deleteDeck(@RequestBody DeckWeb request) {
        deckService.deleteDeck(request.getId());
    }

}

