let json = [
  {
    "id": 323,
    "username": "rinood30",
    "profile": {
      "full_name": "Shabrina Fauzan",
      "birthday": "1988-10-30",
      "phones": [
        "08133473821",
        "082539163912"
      ]
    },
    "articles:": [
      {
        "id": 3,
        "title": "Tips Berbagi Makanan",
        "published_at": "2019-01-03T16:00:00"
      },
      {
        "id": 7,
        "title": "Cara Membakar Ikan",
        "published_at": "2019-01-07T14:00:00"
      }
    ]
  },
  {
    "id": 201,
    "username": "norisa",
    "profile": {
      "full_name": "Noor Annisa",
      "birthday": "1986-08-14",
      "phones": []
    },
    "articles:": [
      {
        "id": 82,
        "title": "Cara Membuat Kue Kering",
        "published_at": "2019-10-08T11:00:00"
      },
      {
        "id": 91,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-11-11T13:00:00"
      },
      {
        "id": 31,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-11-11T13:00:00"
      }
    ]
  },
  {
    "id": 42,
    "username": "karina",
    "profile": {
      "full_name": "Karina Triandini",
      "birthday": "1986-04-14",
      "phones": [
        "06133929341"
      ]
    },
    "articles:": []
  },
  {
    "id": 201,
    "username": "icha",
    "profile": {
      "full_name": "Annisa Rachmawaty",
      "birthday": "1987-12-30",
      "phones": []
    },
    "articles:": [
      {
        "id": 39,
        "title": "Tips Berbelanja Bulan Tua",
        "published_at": "2019-04-06T07:00:00"
      },
      {
        "id": 43,
        "title": "Cara Memilih Permainan di Steam",
        "published_at": "2019-06-11T05:00:00"
      },
      {
        "id": 58,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-09-12T04:00:00"
      }
    ]
  }
];
let noPhone = [];
let haveArticle = [];
let haveAnnis = [];
let haveArticle2020 = [];
let born1989 = [];
let haveArticleTips = [];
let haveArticleBeforeAug = [];
let startDate = new Date("2020-01-01 00:00:00");
let endDate = new Date("2020-12-31 23:59:59");
let augustDate = new Date("2019-07-31 23:59:59");

for (var i = 0; i < json.length; i++) {
	// check no phone user
	if(json[i].profile.phones.length < 1)
		noPhone.push(json[i].id+' '+json[i].username)
	// check user with articles
	if(json[i]['articles:'].length > 0)
		haveArticle.push(json[i].id+' '+json[i].username)
	// check user with annis name
	if(json[i].profile.full_name.toLowerCase().indexOf('annis') >= 0)
		haveAnnis.push(json[i].id+' '+json[i].username)
	// check user with article on 2020
	for (var j = 0; j < json[i]['articles:'].length; j++) {
		let check = new Date(json[i]['articles:'][j].published_at);
		if(check >= startDate && check <= endDate){
			haveArticle.push(json[i].id+' '+json[i].username)
			break
		}
	}
	// check user born on 1986
	if(json[i].profile.birthday.indexOf('1986') >= 0)
		born1989.push(json[i].id+' '+json[i].username)

	for (var j = 0; j < json[i]['articles:'].length; j++) {
		// check article with title contain tips
		if(json[i]['articles:'][j].title.toLowerCase().indexOf('tips') >= 0)
			haveArticleTips.push(json[i]['articles:'][j].id+' '+json[i]['articles:'][j].title)
		// check article published before august 2019
		let check = new Date(json[i]['articles:'][j].published_at);
		if(check <= augustDate){
			haveArticleBeforeAug.push(json[i]['articles:'][j].id+' '+json[i]['articles:'][j].title)
		}
	}
}

console.log("1. Find users who doesn\'t have any phone numbers.")
console.log(noPhone)
console.log("================================================")
console.log("2. Find users who have articles.")
console.log(haveArticle)
console.log("================================================")
console.log("3. Find users who have \"annis\" on their name.")
console.log(haveAnnis)
console.log("================================================")
console.log("4. Find users who have articles on year 2020.")
console.log(haveArticle2020)
console.log("================================================")
console.log("5. Find users who are born on 1986.")
console.log(born1989)
console.log("================================================")
console.log("6. Find articles that contain \"tips\" on the title.")
console.log(haveArticleTips)
console.log("================================================")
console.log("7. Find articles published before August 2019.")
console.log(haveArticleBeforeAug)