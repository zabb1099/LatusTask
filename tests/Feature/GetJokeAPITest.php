<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetJokeAPITest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_joke_api(): void
    {
        $response = $this->get('/api/jokes');

        $response->assertStatus(200);
    }

    public function test_return_different_jokes()
    {
        $response1 = $this->get('/api/jokes');
        $jokes1 = $response1->json();


        // Second call
        $response2 = $this->get('/api/jokes');
        $jokes2 = $response2->json();
        $this->assertNotEquals($jokes1, $jokes2, 'Jokes are change each time');
    }
}
