import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:resto_mobile_application/src/common_widgets/Menu_Container.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../common_widgets/background_image.dart';
import '../../../../common_widgets/menu_appbar.dart';


class ProductMenuTitles extends StatefulWidget {

  const ProductMenuTitles({Key? key}) : super(key: key);

  @override
  State<ProductMenuTitles> createState() => _ProductMenuTitlesState();
}

class _ProductMenuTitlesState extends State<ProductMenuTitles> {

  List<FoodMenuItems> data = [];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0xFF161b1d),
        appBar: const MenuAppBar(),
        body: Stack(
          children: <Widget>[
            const BackgroundImage(),
            Center(
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: FutureBuilder(
                  future: fetchData(),
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      return GridView.builder(
                        itemCount: snapshot.data!.length,
                        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 2,
                          crossAxisSpacing: 10,
                          mainAxisSpacing: 10,
                        ),
                        itemBuilder: (BuildContext context, int index) {
                          return MenuContainer(
                            itemImagePath: 'http://192.168.8.181:5000/Foodimages/${snapshot.data![index].itemImagePath}',
                            itemName: snapshot.data![index].category,
                          );
                        },
                      );
                    }else if (snapshot.hasError) {
                      return Text('${snapshot.error}');
                    }
                    return const CircularProgressIndicator();
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
  Future<List<dynamic>> fetchData() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    print("In the fetchdata() ${userToken!}");
    final response = await http.get(
      Uri.parse('http://192.168.8.181:5000/api/v1/Foods'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
    );
    if (response.statusCode == 200) {
      return FoodMenuItems.fromJsonList(json.decode(response.body));
    } else {
      throw Exception('Failed to load data');
    }
  }
}
//use the fromJson method of our model class to convert the JSON data to an object.
class FoodMenuItems{
  final String itemImagePath;
  final String category;
  FoodMenuItems({required this.itemImagePath, required this.category,});
  factory FoodMenuItems.fromJson(Map<String, dynamic> json){
    return FoodMenuItems(
      itemImagePath: json['FoodImage'],
      category: json['Category'],
    );
  }
  static List<FoodMenuItems> fromJsonList(dynamic jsonList){
    final foodMenuItemsList = <FoodMenuItems>[];
    if (jsonList is List<dynamic>) {
      for (final json in jsonList) {
        foodMenuItemsList.add(
          FoodMenuItems.fromJson(json),
        );
      }
    }
    return foodMenuItemsList;
  }
}