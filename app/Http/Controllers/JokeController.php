<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JokeController extends Controller
{
    public function getJokes() {
        $response = Http::get('https://official-joke-api.appspot.com/jokes/programming/ten/');
        $jokes = $response->json();
        //Randomize array so it returns 3 different jokes on each request
        shuffle($jokes);
        return response()->json(array_slice($jokes, 0, 3));
    }

    public function index() {
        return view('index');
    }

}
