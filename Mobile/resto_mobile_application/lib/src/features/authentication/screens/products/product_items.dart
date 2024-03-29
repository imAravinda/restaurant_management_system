import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:resto_mobile_application/src/features/authentication/screens/Products/products_menu_categories.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import '../../../../common_widgets/background_image.dart';
import '../../../../common_widgets/food_item_container.dart';
import '../../../../common_widgets/menu_item_appbar.dart';
import '../../../../constants/image_strings.dart';

class ProductItems extends StatelessWidget {
  final int choice;
  final String category;
  ProductItems({Key? key, required this.category, required this.choice}) : super(key: key);

  final List<FoodItems> data = [];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0xFF161b1d),
        appBar: MenuItemAppBar(
          title: "Catalog of $category",
          navigationScreen: () => ProductMenuTitles(choice: choice,),
          choice: choice,
        ),
        body: Stack(
          children: <Widget>[
            const BackgroundImage(),
            Center(
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: FutureBuilder(
                  future: fetchData(category),
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      return GridView.builder(
                        itemCount: snapshot.data!.length,
                        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 1,
                          //crossAxisSpacing: 10,
                          mainAxisSpacing: 10,
                          mainAxisExtent: 120,
                        ),
                        itemBuilder: (BuildContext context, int index) {
                          return FoodItemContainer(
                            itemImagePath: 'http://$hostName:5000/Foodimages/${snapshot.data![index].foodImagePath}',
                            itemName: snapshot.data![index].foodName,
                            itemPrice: snapshot.data![index].price,
                            itemCategory: snapshot.data![index].category,
                            itemId: snapshot.data![index].foodId,
                            choice: choice,
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
          ],
        ),
      ),
    );
  }

  Future<List<dynamic>> fetchData(String category) async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    final response = await http.get(
      Uri.parse('http://$hostName:5000/api/v1/Foods/$category'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
    );
    if (response.statusCode == 200) {
      final food = json.decode(response.body);
      return FoodItems.fromJsonList(food['data']['findFoods']);
    } else {
      throw Exception('Failed to load data');
    }
  }
}

//use the fromJson method of our model class to convert the JSON data to an object.
class FoodItems{
  final String foodImagePath;
  final String foodName;
  final String category;
  final String foodId;
  final int price;
  FoodItems({required this.foodImagePath, required this.foodName, required this.category, required this.price, required this.foodId});
  factory FoodItems.fromJson(Map<String, dynamic> json){
    return FoodItems(
      foodImagePath: json['FoodImage'],
      foodName: json['FoodName'],
      price: json['Price'],
      category: json['Category'],
      foodId: json['_id'],
    );
  }
  static List<FoodItems> fromJsonList(dynamic jsonList){
    final foodItemsList = <FoodItems>[];
    if (jsonList is List<dynamic>) {
      for (final json in jsonList) {
        foodItemsList.add(
          FoodItems.fromJson(json),
        );
      }
    }
    return foodItemsList;
  }
}
