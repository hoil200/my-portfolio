
package com.google.sps.data;

//class to hold comments
public final class Show {

  private final long id;
  private final String text;
  private final long timestamp;

public Show(long id, String text, long timestamp) {
    this.id = id;
    this.text = text;
    this.timestamp = timestamp;
  }
}