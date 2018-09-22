package com.sleepyweasel.hedgehog.traditions.dto;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class TraditionPayload {

  private final Long id;
  private final String name;
  private final String description;

}
