
package com.google.sps.data;

//class to hold comments
public final class Comments {

  private final long id;
  private final String text;
  private final String name;
  private final long timestamp;

public Comments(long id, String text,String name, long timestamp) {
    this.id = id;
    this.text = text;
    this.name = name;
    this.timestamp = timestamp;
  }
}