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
}
