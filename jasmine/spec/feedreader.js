/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * 1- allFeeds variable has been defined and that it is not empty.
         *  Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
        it('has URL', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0)
            })
        });


        // allFeeds.forEach(function(feed) {
        //     feed.id = feedId;
        //     feedList.append(feedItemTemplate(feed));
    
        //     feedId++;
        // });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined()
                expect(feed.name.length).not.toBe(0)
            })
        })
    });


    /* TODO: Write a new test suite named "The menu" */
        describe('The menu', function(){


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('hidden', function(){
            let body = document.querySelector('body')
            expect(body).toHaveClass('menu-hidden');
         })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('change visibility',function(){
            let body1 = document.querySelector('body')
            document.querySelector(".menu-icon-link").click()
            expect(body1).not.toHaveClass('menu-hidden')
            document.querySelector(".menu-icon-link").click()
            expect(body1).toHaveClass('menu-hidden')             
         })


    });



        

    
        describe('Initial Entries',function(){
            
        let feed = document.querySelector('.feed')
        
        beforeEach(function(done){
            loadFeed(0,done)
        });

        it('Not Empty',function(){
            entry = document.querySelectorAll(".feed .entry");
            expect(entry.length).not.toBe(0)
        })
        

        

        describe("New Feed Selection", function() {
            
            let feedAfterFirstLoad;
            let feedAfterSecondLoad;
    
            beforeEach(function(done) {
              loadFeed(0,function(){
            feedAfterFirstLoad = document.querySelector('.feed').innerHTML
                    loadFeed(1,function(){
                    feedAfterSecondLoad = document.querySelector('.feed').innerHTML
                    done();
                })    
              });
              

            });
    
    
            it("changes the content", function(done) {
                expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);
                done();
            });
            }) 
        });
        
}());
