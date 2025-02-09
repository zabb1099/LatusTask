<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JokeController extends Controller
{
    public function getJokes() {
        $response = Http::get('https://official-joke-api.appspot.com/jokes/programming/ten/');
        return $response->json();
    }

}
