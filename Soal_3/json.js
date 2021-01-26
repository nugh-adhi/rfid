let json = [
  {
    "inventory_id": 9382,
    "name": "Brown Chair",
    "type": "furniture",
    "tags": [
      "chair",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190471,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
  {
    "inventory_id": 9380,
    "name": "Big Desk",
    "type": "furniture",
    "tags": [
      "desk",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190642,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
  {
    "inventory_id": 2932,
    "name": "LG Monitor 50 inch",
    "type": "electronic",
    "tags": [
      "monitor"
    ],
    "purchased_at": 1579017842,
    "placement": {
      "room_id": 3,
      "name": "Lavender"
    }
  },
  {
    "inventory_id": 232,
    "name": "Sharp Pendingin Ruangan 2PK",
    "type": "electronic",
    "tags": [
      "ac"
    ],
    "purchased_at": 1578931442,
    "placement": {
      "room_id": 5,
      "name": "Dhanapala"
    }
  },
  {
    "inventory_id": 9382,
    "name": "Alat Makan",
    "type": "tableware",
    "tags": [
      "spoon",
      "fork",
      "tableware"
    ],
    "purchased_at": 1578672242,
    "placement": {
      "room_id": 10,
      "name": "Rajawali"
    }
  }
]
let itemMeetingRoom = [];
let itemElectronic = [];
let itemFurniture = [];
let itemPurchased = [];
let itemBrown = [];
let startDate = new Date("2020-01-16 00:00:00");
let endDate = new Date("2020-01-16 23:59:59");

for (var i = 0; i < json.length; i++) {
	// item in meeting room
	if( json[i].placement.name == 'Meeting Room')
		itemMeetingRoom.push(json[i].inventory_id+' '+json[i].name)
	// item electronic type
	if( json[i].type == 'electronic')
		itemElectronic.push(json[i].inventory_id+' '+json[i].name)
	// item furniture type
	if( json[i].type == 'furniture')
		itemFurniture.push(json[i].inventory_id+' '+json[i].name)
	// item purchased at 16 jan 2020
	let check = new Date(json[i].purchased_at * 1000);
	if(check >= startDate && check <= endDate){
		itemPurchased.push(json[i].inventory_id+' '+json[i].name)
	}
	// item with brown tag
	if( json[i].tags.includes('brown'))
		itemBrown.push(json[i].inventory_id+' '+json[i].name)
}

console.log("1. Find items in Meeting Room.")
console.log(itemMeetingRoom)
console.log("================================================")
console.log("2. Find all electronic devices.")
console.log(itemElectronic)
console.log("================================================")
console.log("3. Find all furnitures.")
console.log(itemFurniture)
console.log("================================================")
console.log("4. Find all items was purchased at 16 Januari 2020.")
console.log(itemPurchased)
console.log("================================================")
console.log("5. Find all items with brown color.")
console.log(itemBrown)