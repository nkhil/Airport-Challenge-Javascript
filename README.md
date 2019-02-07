Airport challenge in JavaScript
=================
```
                                               _
                 ___                          (_)
               _/XXX\
_             /XXXXXX\_                                    __
X\__    __   /X XXXX XX\                          _       /XX\__      ___
    \__/  \_/__       \ \                       _/X\__   /XX XXX\____/XXX\
  \  ___   \/  \_      \ \               __   _/      \_/  _/  -   __  -  \
 ___/   \__/   \ \__     \\__           /  \_//  _ _ \  \     __  /  \____/
/  __    \  /     \ \_   _//_\___    __/    //           \___/  \/     __/
__/_______\________\__\_/________\__/_/____/_____________/_______\____/____
                                  ___
                                 /L|0\
                                /  |  \
                               /       \
                              /    |    \
                             /           \
                            /  __  | __   \
                           /  __/    \__   \
                          /  /__   |  __\   \
                         /___________________\
                         /          |         \
                              /   _|_   \
                      /      ____/___\____     \
                      ___________[o0o]___________
```

Summary
---------
The airport challenge (first completed in Ruby in week 1 of Makers bootcamp) completed in JavaScript. 

Process
--------
This was completed following a strict TDD process (red-green-refactor) using Jasmine

Setup
-------
To setup this project:

- Clone or fork the repo
- Run `npm install` to install the dependencies
- Run `npm test` to run tests

User stories
-----------
```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```