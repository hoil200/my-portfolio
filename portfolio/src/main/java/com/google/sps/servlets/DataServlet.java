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

import java.io.IOException;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  private ArrayList<String> shows;

  @Override
  public void init(){
      shows = new ArrayList<String>();
      shows.add("The Good Doctor");
      shows.add("Grey\'s Anatomy");
      shows.add("House");
      shows.add("Code Black");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //String show = shows.get((int) (Math.random() * shows.size()));
    //response.setContentType("text/html;");
    //response.getWriter().println(show);


    // Convert the server stats to JSON
    Gson gson = new Gson();
    String json = gson.toJson(shows);
    //DataServlet dataServlet = shows;
    //String json = convertToJsonUsingGson(shows);


    // Send the JSON as the response
    response.setContentType("text/html;");
    response.getWriter().println(json);
  }


  
}
