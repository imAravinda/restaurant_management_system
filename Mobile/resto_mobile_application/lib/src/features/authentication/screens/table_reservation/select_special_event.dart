import 'dart:convert';
import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:flutter/material.dart';
import 'package:resto_mobile_application/src/features/authentication/screens/table_reservation/select_table.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import '../../../../common_widgets/background_image.dart';
import '../../../../constants/image_strings.dart';

class SelectSpecialEvent extends StatefulWidget {
  const SelectSpecialEvent({Key? key}) : super(key: key);

  @override
  State<SelectSpecialEvent> createState() => _SelectSpecialEventState();
}

class _SelectSpecialEventState extends State<SelectSpecialEvent> {

  final List<SelectTables> data = [];

  final List<SpecialEvents> eventData = [];

  Text setColorToStatus(String status) {
    if (status == 'Available') {
      return Text(
        status,
        style: const TextStyle(
          color: Colors.green,
          fontSize: 16.0,
        ),
      );
    }
    return Text(
      status,
      style: const TextStyle(
        color: Colors.red,
        fontSize: 17.0,
      ),
    );
  }

  Image setImagePath(int personCount) {
    String imagePath = '';
    switch (personCount) {
      case 1:
        imagePath = onePerson;
        break;
      case 2:
        imagePath = twoPerson;
        break;
      case 3:
        imagePath = threePerson;
        break;
      case 4:
        imagePath = fourPerson;
        break;
      case 5:
        imagePath = fivePerson;
        break;
      case 6:
        imagePath = sixPerson;
        break;
      case 7:
        imagePath = sevenPerson;
        break;
      default:
        imagePath = eightPerson;
    }
    return Image.asset(
      imagePath,
      width: 80,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        const BackgroundImage(),
        Column(
          children: [
            Expanded(
              flex: 2,
              child: Padding(
                padding: const EdgeInsets.only(left: 15.0, top: 5.0, right: 5.0),
                child: FutureBuilder(
                  future: getSpecialEvents(),
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      return ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: snapshot.data!.length,
                        itemBuilder: (context, index) {
                          return Container(
                            width: 280,
                            padding: const EdgeInsets.all(5.0),
                            decoration: BoxDecoration(
                              color: Colors.black38,
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Padding(
                              padding: const EdgeInsets.all(2.0),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Expanded(
                                    flex: 1,
                                    child: Text(
                                      snapshot.data![index].eventName,
                                      style: const TextStyle(
                                        color: Color(0xFFfebf10),
                                        fontSize: 17.0,
                                      ),
                                    ),
                                  ),
                                  Expanded(
                                    flex: 2,
                                    child: Row(
                                      mainAxisAlignment: MainAxisAlignment.center,
                                      children: [
                                        Expanded(
                                          child: Padding(
                                            padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                                            child: Container(
                                              width: 10.0,
                                              decoration: BoxDecoration(
                                                borderRadius: BorderRadius.circular(10),
                                                border: Border.all(color: const Color(0xFFCD7F32), width: 1),
                                              ),
                                              child: Column(
                                                children: [
                                                  const Expanded(
                                                    child: Text(
                                                      'Bronze',
                                                      style: TextStyle(
                                                        color: Color(0xFFCD7F32),
                                                        fontSize: 17.0,
                                                      ),
                                                    ),
                                                  ),
                                                  const Expanded(
                                                    child: Text(
                                                      'Package',
                                                      style: TextStyle(
                                                        color: Color(0xFFCD7F32),
                                                        fontSize: 15.0,
                                                      ),
                                                    ),
                                                  ),
                                                  Expanded(
                                                    child: Text(
                                                      "Rs. ${snapshot.data![index].bronzePrice}",
                                                      style: const TextStyle(
                                                        color: Color(0xFFCD7F32),
                                                        fontSize: 15.0,
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                        ),
                                        Expanded(
                                          child: Padding(
                                            padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                                            child: Container(
                                              width: 10.0,
                                              decoration: BoxDecoration(
                                                borderRadius: BorderRadius.circular(10),
                                                border: Border.all(color: const Color(0xFFC0C0C0), width: 1),
                                              ),
                                              child: Column(
                                                children: [
                                                  const Expanded(
                                                    child: Text(
                                                      'Silver',
                                                      style: TextStyle(
                                                        color: Color(0xFFC0C0C0),
                                                        fontSize: 17.0,
                                                      ),
                                                    ),
                                                  ),
                                                  const Expanded(
                                                    child: Text(
                                                      'Package',
                                                      style: TextStyle(
                                                        color: Color(0xFFC0C0C0),
                                                        fontSize: 15.0,
                                                      ),
                                                    ),
                                                  ),
                                                  Expanded(
                                                    child: Text(
                                                      "Rs. ${snapshot.data![index].silverPrice}",
                                                      style: const TextStyle(
                                                        color: Color(0xFFC0C0C0),
                                                        fontSize: 15.0,
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                        ),
                                        Expanded(
                                          child: Padding(
                                            padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                                            child: Container(
                                              width: 10.0,
                                              decoration: BoxDecoration(
                                                borderRadius: BorderRadius.circular(10),
                                                border: Border.all(color: const Color(0xFFFFD700), width: 1),
                                              ),
                                              child: Column(
                                                children: [
                                                  const Expanded(
                                                    child: Text(
                                                      'Gold',
                                                      style: TextStyle(
                                                        color: Color(0xFFFFD700),
                                                        fontSize: 17.0,
                                                      ),
                                                    ),
                                                  ),
                                                  const Expanded(
                                                    child: Text(
                                                      'Package',
                                                      style: TextStyle(
                                                        color: Color(0xFFFFD700),
                                                        fontSize: 15.0,
                                                      ),
                                                    ),
                                                  ),
                                                  Expanded(
                                                    child: Text(
                                                      "Rs. ${snapshot.data![index].goldPrice}",
                                                      style: const TextStyle(
                                                        color: Color(0xFFFFD700),
                                                        fontSize: 15.0,
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Expanded(
                                    flex: 1,
                                    child: Center(
                                      child: Container(
                                        width: 130,
                                        height: 25,
                                        padding: const EdgeInsets.only(left: 5, right: 5, top: 5.0),
                                        child: AnimatedButton(
                                          text: "More Details",
                                          buttonTextStyle: const TextStyle(
                                            color: Colors.black,
                                            fontSize: 15,
                                          ),
                                          color: const Color(0xFFfebf10),
                                          pressEvent: () {},
                                          borderRadius: const BorderRadius.only(
                                            topLeft: Radius.circular(0),
                                            topRight: Radius.circular(80),
                                            bottomLeft: Radius.circular(80),
                                            bottomRight: Radius.circular(80),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          );
                        },
                      );
                    }else if (snapshot.hasError) {
                      return Text('${snapshot.error}');
                    }
                    return const SizedBox(
                      height: 40,
                      width: 40,
                      child: Center(
                        child: CircularProgressIndicator(
                          color: Color(0xFFfebf10),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
            Expanded(
              flex: 4,
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Center(
                  child: FutureBuilder(
                    future: getTables(),
                    builder: (context, snapshot) {
                      if (snapshot.hasData) {
                        return ListView.builder(
                            scrollDirection: Axis.horizontal,
                            itemCount: snapshot.data!.length,
                            itemBuilder: (context, index){
                              return Padding(
                                padding: const EdgeInsets.only(right: 10.0, left: 8.0),
                                child: Container(
                                  width: 180,
                                  height: 300,
                                  padding: const EdgeInsets.all(5.0),
                                  decoration: BoxDecoration(
                                    color: Colors.black38,
                                    borderRadius: BorderRadius.circular(20),
                                  ),
                                  child: Padding(
                                    padding: const EdgeInsets.all(10.0),
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Center(
                                          child: Text(
                                            'No. ${snapshot.data![index].tableNumber}',
                                            style: const TextStyle(
                                              color: Color(0xFFfebf10),
                                              fontSize: 17.0,
                                            ),
                                          ),
                                        ),
                                        const Spacer(),
                                        Center(
                                          child: ClipRRect(
                                            borderRadius: BorderRadius.circular(12),
                                            child: setImagePath(snapshot.data![index].numberOfPersons),
                                          ),
                                        ),
                                        const Spacer(),
                                        Text(
                                          '${snapshot.data![index].numberOfPersons} Persons',
                                          style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 17.0,
                                          ),
                                        ),
                                        const Spacer(),
                                        Row(
                                          mainAxisAlignment: MainAxisAlignment.start,
                                          children: [
                                            const Expanded(
                                              flex: 1,
                                              child: Text(
                                                'Price: ',
                                                style: TextStyle(
                                                  color: Colors.white,
                                                  fontSize: 16.0,
                                                ),
                                              ),
                                            ),
                                            Expanded(
                                              flex: 1,
                                              child: Text(
                                                'Rs. ${snapshot.data![index].price}',
                                                style: const TextStyle(
                                                  color: Color(0xFFfebf10),
                                                  fontSize: 16.0,
                                                ),
                                              ),
                                            ),
                                          ],
                                        ),
                                        const Spacer(),
                                        Row(
                                          mainAxisAlignment: MainAxisAlignment.start,
                                          children: [
                                            const Expanded(
                                              flex: 1,
                                              child: Text(
                                                'Status: ',
                                                style: TextStyle(
                                                  color: Colors.white,
                                                  fontSize: 16.0,
                                                ),
                                              ),
                                            ),
                                            Expanded(
                                              flex: 1,
                                              child: setColorToStatus(snapshot.data![index].status),
                                            ),
                                          ],
                                        ),
                                        const Spacer(),
                                        Center(
                                          child: Container(
                                            width: 150,
                                            height: 25,
                                            padding: const EdgeInsets.only(left: 5, right: 5),
                                            child: AnimatedButton(
                                              text: "Select Table",
                                              buttonTextStyle: const TextStyle(
                                                color: Colors.black,
                                                fontSize: 18,
                                              ),
                                              color: const Color(0xFFfebf10),
                                              pressEvent: () {},
                                              borderRadius: const BorderRadius.only(
                                                topLeft: Radius.circular(0),
                                                topRight: Radius.circular(80),
                                                bottomLeft: Radius.circular(80),
                                                bottomRight: Radius.circular(80),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              );
                            }
                        );
                      }else if (snapshot.hasError) {
                        return Text('${snapshot.error}');
                      }
                      return const SizedBox(
                        height: 40,
                        width: 40,
                        child: Center(
                          child: CircularProgressIndicator(
                            color: Color(0xFFfebf10),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
            Expanded(
              flex: 2,
              child: Column(
                children: [
                  Expanded(
                    flex: 2,
                    child: Column(
                      children: [
                        Expanded(
                          flex: 3,
                          child: Container(
                            color: Colors.black38,
                            child: Row(
                              children: [
                                Expanded(
                                  child: Padding(
                                    padding: const EdgeInsets.only(left: 20.0,),
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: const [
                                        SizedBox(
                                          height: 5.0,
                                        ),
                                        Center(
                                          child: Text(
                                            'Special Event:',
                                            style: TextStyle(
                                              color: Color(0xFFfebf10),
                                              fontSize: 17.0,
                                            ),
                                          ),
                                        ),
                                        SizedBox(
                                          height: 5.0,
                                        ),
                                        Text(
                                          'Birthday Party',
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 15.0,
                                          ),
                                        ),
                                        Text(
                                          'Bronze Package',
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 15.0,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                Expanded(
                                  child: Padding(
                                    padding: const EdgeInsets.only(left: 20.0,),
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: const [
                                        SizedBox(
                                          height: 5.0,
                                        ),
                                        Center(
                                          child: Text(
                                            'Table Details:',
                                            style: TextStyle(
                                              color: Color(0xFFfebf10),
                                              fontSize: 17.0,
                                            ),
                                          ),
                                        ),
                                        SizedBox(
                                          height: 5.0,
                                        ),
                                        Text(
                                          'Table No: 107',
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 15.0,
                                          ),
                                        ),
                                        Text(
                                          'No. Of Persons: 7',
                                          style: TextStyle(
                                            color: Colors.white,
                                            fontSize: 15.0,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 1,
                          child: Container(
                            color: Colors.black38,
                            child: const Center(
                              child: Text(
                                'Total Price: Rs. 4500',
                                style: TextStyle(
                                  color: Color(0xFFfebf10),
                                  fontSize: 17.0,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 1,
                    child: Container(
                      color: Colors.black38,
                      child: Center(
                        child: Container(
                          width: 150,
                          height: 35,
                          padding: const EdgeInsets.only(left: 5, right: 5, top: 5.0),
                          child: AnimatedButton(
                            text: "Book Table",
                            buttonTextStyle: const TextStyle(
                              color: Colors.black,
                              fontSize: 17,
                              fontWeight: FontWeight.bold,
                            ),
                            color: const Color(0xFFfebf10),
                            pressEvent: () {},
                            borderRadius: const BorderRadius.only(
                              topLeft: Radius.circular(0),
                              topRight: Radius.circular(80),
                              bottomLeft: Radius.circular(80),
                              bottomRight: Radius.circular(80),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }
  Future<List<SelectTables>> getTables() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    final response = await http.get(
      Uri.parse('http://$hostName:5000/api/v1/availabletables'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
    );
    if (response.statusCode == 200) {
      final ordersFoods = jsonDecode(response.body);
      return SelectTables.fromJsonList(ordersFoods['data']['availableTables']);
    } else {
      throw Exception('Failed to load data');
    }
  }
  Future<List<SpecialEvents>> getSpecialEvents() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    final response = await http.get(
      Uri.parse('http://$hostName:5000/api/v1/SpecialEvents'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
    );
    if (response.statusCode == 200) {
      final ordersFoods = jsonDecode(response.body);
      return SpecialEvents.fromJsonList(ordersFoods['data']['specialEvents']);
    } else {
      throw Exception('Failed to load data');
    }
  }
}
class SpecialEvents{
  final String eventName;
  final String item1;
  final String item2;
  final String item3;
  final int bronzePrice;
  final int silverPrice;
  final int goldPrice;
  SpecialEvents({
    required this.eventName,
    required this.item1,
    required this.item2,
    required this.item3,
    required this.bronzePrice,
    required this.silverPrice,
    required this.goldPrice,
  });
  factory SpecialEvents.fromJson(Map<String, dynamic> json) {
    return SpecialEvents(
      eventName: json['EventName'],
      item1: json['Item1'],
      item2: json['Item2'],
      item3: json['Item3'],
      bronzePrice: json['BronzePrice'],
      silverPrice: json['SilverPrice'],
      goldPrice: json['GoldPrice'],
    );
  }
  static List<SpecialEvents> fromJsonList(dynamic jsonList){
    final specialEventList = <SpecialEvents>[];
    if (jsonList is List<dynamic>) {
      for (final json in jsonList) {
        specialEventList.add(SpecialEvents.fromJson(json),);
      }
    }
    return specialEventList;
  }
}