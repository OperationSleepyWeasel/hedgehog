package com.sleepyweasel.hedgehog.traditions;

import com.google.common.collect.ImmutableList;
import com.sleepyweasel.hedgehog.traditions.dto.TraditionPayload;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/traditions")
class TraditionsEndpoint {

  @GetMapping
  List<TraditionPayload> getAll() {
    return ImmutableList.of(
        TraditionPayload.builder()
            .id(1L)
            .name("Ognisko")
            .description("Let it burn")
            .build(),
        TraditionPayload.builder()
            .id(2L)
            .name("Szukanie jeża")
            .description("Znajdźmy go!")
            .build()
    );
  }
}
