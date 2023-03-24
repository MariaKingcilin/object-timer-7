var library=[
{
	author:"'Bill Gates'",
	title:"'The Road Ahead'",
	libraryId:1254
},
{
	author:"'Steve Jobs'",
	title:"'Walter Isaacson'",
	libraryId:4264
},
{
	author:"'Suzanne Collins'",
	title:"'Mockingjay:The Final Book of The Hunger Games'",
	libraryId:3245
},
{
	author:"'Mark Twain'",
	title:"'Adventure of Tom sawyer'",
	libraryId:1345
},
{
	author:"'Sir Arthur Conan Doyle'",
	title:"'Adventure of Sherlock Holmes'",
	libraryId:2245
}];
library.sort(function(a,b)
{
	return a.libraryId-b.libraryId;
})
console.log(library);