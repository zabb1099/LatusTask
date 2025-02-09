<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserDetails;
use Illuminate\Database\Seeder;

class UserDetailsTestSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        UserDetails::create(['first_name' => 'Test First Name One', 'last_name' => 'Test Last Name One', 'age' => 10, 'email' => 'testOne@email.com', 'favourite_colour' => 'purple']);
        UserDetails::create(['first_name' => 'Test First Name Two', 'last_name' => 'Test Last Name Two', 'age' => 20, 'email' => 'testTwo@email.com', 'favourite_colour' => 'white']);
        UserDetails::create(['first_name' => 'Test First Name Three', 'last_name' => 'Test Last Name Three', 'age' => 30, 'email' => 'testThree@email.com', 'favourite_colour' => 'silver']);
        UserDetails::create(['first_name' => 'Test First Name Four', 'last_name' => 'Test Last Name Four', 'age' => 40, 'email' => 'testFour@email.com', 'favourite_colour' => 'blue']);
        UserDetails::create(['first_name' => 'Test First Name Five', 'last_name' => 'Test Last Name Five', 'age' => 50, 'email' => 'testFive@email.com', 'favourite_colour' => 'yellow']);
        UserDetails::create(['first_name' => 'Test First Name Six', 'last_name' => 'Test Last Name Six', 'age' => 10, 'email' => 'testSix@email.com', 'favourite_colour' => 'purple']);
        UserDetails::create(['first_name' => 'Test First Name Seven', 'last_name' => 'Test Last Name Seven', 'age' => 20, 'email' => 'testSeven@email.com', 'favourite_colour' => 'white']);
        UserDetails::create(['first_name' => 'Test First Name Eight', 'last_name' => 'Test Last Name Eight', 'age' => 30, 'email' => 'testEight@email.com', 'favourite_colour' => 'silver']);
        UserDetails::create(['first_name' => 'Test First Name Nine', 'last_name' => 'Test Last Name Nine', 'age' => 40, 'email' => 'testNine@email.com', 'favourite_colour' => 'blue']);
        UserDetails::create(['first_name' => 'Test First Name Ten', 'last_name' => 'Test Last Name Ten', 'age' => 50, 'email' => 'testTen@email.com', 'favourite_colour' => 'yellow']);
    }
}
