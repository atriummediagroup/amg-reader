# amg-reader
The official blog reader app for Atrium Media Group


## Api Endpoints

### GET `/api/posts`

Gets all the blog posts in order of newest to oldest

##### Parmaters - Optional
`pagesize=X` The number of posts given in the result (integer, defaults to 10)

`cagegory=X` Takes the slug of a category (ie. `education`) and returns all the posts that are in that category. 

**Note** Must be an exact match to the category slug, partial matches will return nothing.

`title=X` Takes a title parameter and returns all the posts that contain the parameter in the title.

**Note** Will mdo partial matches, as long as parameter is in the title it will return that post

**Note 2** Can take multiple words, split up like this `title=most%20useful`

#### Example

**GET** `http://amglaurier.com/api/posts/?pagesize=10&category=education&title=business%20electives`

**Returns**


	{
		"count": 1,
		"next": null,
		"previous": null,
		"results": [
			{
				"slug": "the-3-most-useful-non-business-electives-that-ever",
				"id": 172,
				"category_title": "School",
				"author": 25,
				"previous_author": "",
				"draft": false,
				"title": "The 3 Most Useful Non-Business Electives that Every Business Student Should Consider",
				"created": "2017-07-18T00:40:59Z",
				"image_url": "http://amglaurier.com/uploads/blogs/stack-of-books.webp",
				"content": "<p>Within the past month or so, you have likely received an email notifying you that registration for next semester&rsquo;s courses is open. If you are like most students, you probably started texting friends and scouring facebook groups to find the easiest electives. After all, who doesn&rsquo;t want less work and a GPA boost rolled into one course? However, it seems that in the quest to find the perfect &ldquo;bird courses&rdquo;, many business students miss out on interesting and useful courses that can enhance their academic experience and prove useful in their career. Here is a list of the three most useful electives every business student should consider.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n\t<li>\r\n\t<p><strong>CP104 - Introduction To Programming</strong>: Having even basic knowledge of programming can be an asset in your business career. Sure, you won&rsquo;t become a coding genius after an intro course, but understanding the syntax of programming languages can give you an edge over your peers. In addition, the logical problem-solving approach this course takes will prove valuable in this technology-centric world.</p>\r\n\t</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol start=\"2\">\r\n\t<li>\r\n\t<p><strong>PO210 - Introduction To Law</strong>: Learning about laws and regulations is useful for any area of business. Although the course isn&rsquo;t business oriented, you will acquire an understanding of how law affects political decisions and, in turn, influences the private sphere. Contract law, tort law, and constitutional law - all of which are relevant to business - are just some of the topics covered. Additionally, the term assignment, a case brief, provides a challenging opportunity to improve your qualitative research skills (an important asset in any job).</p>\r\n\t</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol start=\"3\">\r\n\t<li>\r\n\t<p><strong>EC223 - Canadian Banking &amp; Financial System</strong>: Okay, maybe an economics course is cheating, but EC223 offers extremely relevant material - some of which is not covered in BBA courses. EC223 will allow you to understand monetary policy, commercial financial institutions and the role of the Central Bank at a deeper level than introductory economic courses. This course takes a look at the big picture and can be supplementary to your business courses that look at some of the same themes on a micro scale.</p>\r\n\t</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Enrolling in these courses can help you develop both your qualitative and quantitative skills, which allows for the potential to become a more well-rounded business person. Perhaps you may even enjoy one of these courses so much that you decide to pursue a minor in the subject, which is never a bad thing from an employer&#39;s perspective.</p>"
			}
		]
	}

`count` The total number of posts matching the query

`next` The url of a request that will return the next page of responses (page size is either specific of 10 by default)

`previous` The url of a request that will return the previous page of responses if you are not on the first page.

`results` An array containing blog posts the match the query

`Blog Post Example`

This is what a blog post contains in response to this query

	{
		"slug": "the-3-most-useful-non-business-electives-that-ever",
		"id": 172,
		"category_title": "School",
		"author": 25,
		"previous_author": "",
		"draft": false,
		"title": "The 3 Most Useful Non-Business Electives that Every Business Student Should Consider",
		"created": "2017-07-18T00:40:59Z",
		"image_url": "http://amglaurier.com/uploads/blogs/stack-of-books.webp",
		"content" : "A really long string with lots of formatting"	
	}
	
**Note** `author` is an id relating to the author that can be retrieved with a GET request to `http://amglaurier.com/users/AUTHOR_ID`

## Front-End Design

### Colors

These are the scss colors we will use:

$colors: (
	red: #d9534f
	off-black: #444
	white: #fff
	black: #333
)

### Fonts

These are the fonts first for headings second for body

@import "roboto";
@import "sans-serif";

### Icons

Various icons for display and navigation

arrow-round-back
menu
home
paper (blog)
book (magazine)
images (photography)

