// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;


import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import com.google.sps.data.Shows;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/dataStore")
public class DataServletStore extends HttpServlet {

 //private ArrayList<String> shows;
 
  
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    Query query = new Query("Comments").addSort("timestamp", SortDirection.DESCENDING);;
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    List<Shows> shows = new ArrayList<>();
    for (Entity entity : results.asIterable()){
      long id = entity.getKey().getId();  
      String text = (String) entity.getProperty("text-input");
      long timestamp = (long) entity.getProperty("timestamp");

      Shows texts = new Shows(id, text, timestamp);
     
      shows.add(texts);
    }

    // Convert the server stats to JSON
    Gson gson = new Gson();
    String json = gson.toJson(shows);
   
    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}
