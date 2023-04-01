import 'dart:convert';
import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../common_widgets/background_image.dart';
import '../../../../common_widgets/order_item_container.dart';
import '../../../../constants/image_strings.dart';
import '../Customer/customer_main_page.dart';
import 'delivery_online_order.dart';
class DeliverySaveOrder extends StatelessWidget {
  final int choice;
  final String paymentMethod;
  final String address;
  final String customerId;
  final num totalPrice;

  DeliverySaveOrder({Key? key,
    required this.paymentMethod,
    required this.address,
    required this.totalPrice,
    required this.choice,
    required this.customerId
  }) : super(key: key);

  final List<FoodList> orderFoods = [];
  final List<CartItems> data = [];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0xFF161b1d),
        appBar: AppBar(
          foregroundColor: const Color(0xFFfebf10),
          elevation: 0,
          leading: IconButton(
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (_){
                    return DeliveryOnlineOrder(totalPrice: totalPrice, choice: choice,);
                  },
                ),
              );
            },
            icon: const Icon(Icons.chevron_left),
          ),
          title: const Text('Checkout'),
          actions:  <Widget>[
            Padding(
              padding: const EdgeInsets.only(right: 20.0),
              child: IconButton(
                onPressed: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (_){
                        return const CustomerMainPage(choice: 2,);
                      },
                    ),
                  );
                },
                icon: const Icon(Icons.home),
              ),
            ),
          ],
          backgroundColor: const Color(0xFF161b1d),
          centerTitle: true,
        ),
        body: Stack(
          children: [
            const BackgroundImage(),
            Column(
              children: [
                Expanded(
                  flex: 5,
                  child: SingleChildScrollView(
                    child: Container(
                      decoration: const BoxDecoration(
                        color: Colors.black38,
                        borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(20),
                          topRight: Radius.circular(20),
                          bottomLeft: Radius.circular(20),
                          bottomRight: Radius.circular(20),
                        ),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(15.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(
                              height: 300,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      const Divider(color: Color(0xFFfebf10),),
                                      const SizedBox(height: 5.0,),
                                      const Text(
                                        'Payment Method:',
                                        style: TextStyle(
                                          fontSize: 18,
                                          color: Colors.white,
                                        ),
                                      ),
                                      const SizedBox(height: 5.0,),
                                      Text(
                                        paymentMethod,
                                        style: const TextStyle(
                                          fontSize: 15,
                                          color: Color(0xFFfebf10),
                                        ),
                                      ),
                                      const SizedBox(height: 5.0,),
                                    ],
                                  ),
                                  const Divider(color: Color(0xFFfebf10),),
                                  const SizedBox(height: 5.0,),
                                  const Text(
                                    'Deliver To:',
                                    style: TextStyle(
                                      fontSize: 18,
                                      color: Colors.white,
                                    ),
                                  ),
                                  const SizedBox(height: 5.0,),
                                  Text(
                                    address,
                                    style: const TextStyle(
                                      fontSize: 15,
                                      color: Color(0xFFfebf10),
                                    ),
                                  ),
                                  const Divider(color: Color(0xFFfebf10),),
                                  const SizedBox(height: 5.0,),
                                  const Text(
                                    'Total Price:',
                                    style: TextStyle(
                                      fontSize: 18,
                                      color: Colors.white,
                                    ),
                                  ),
                                  const SizedBox(height: 5.0,),
                                  Text(
                                    "Rs. $totalPrice",
                                    style: const TextStyle(
                                      fontSize: 15,
                                      color: Color(0xFFfebf10),
                                    ),
                                  ),
                                  const SizedBox(height: 5.0,),
                                  Center(
                                    child: FutureBuilder(
                                      future: fetchOrderData(),
                                      builder: (context, snapshot){
                                        if (snapshot.hasData) {
                                          for (int i = 0; i < snapshot.data!.length; i++) {
                                            orderFoods.add(FoodList(foodId: snapshot.data![i].foodId, qty: snapshot.data![i].quantity));
                                          }
                                          return const Divider(color: Color(0xFFfebf10),);
                                        }else if (snapshot.hasError) {
                                          return Text('${snapshot.error}');
                                        }
                                        return const SizedBox(
                                          height: 20,
                                          width: 20,
                                          child: Center(
                                            child: CircularProgressIndicator(
                                              color: Color(0xFFfebf10),
                                            ),
                                          ),
                                        );
                                      },
                                    ),
                                  ),
                                  const SizedBox(height: 5.0,),
                                  const Text(
                                    'Order Items:',
                                    style: TextStyle(
                                      fontSize: 18,
                                      color: Colors.white,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            SizedBox(
                              height: 180,
                              child: Center(
                                child: FutureBuilder(
                                  future: fetchOrderData(),
                                  builder: (context, snapshot) {
                                    if (snapshot.hasData) {
                                      return ListView.builder(
                                        scrollDirection: Axis.vertical,
                                        itemCount: snapshot.data!.length,
                                        itemBuilder: (context, index) {
                                          return OrderItemContainer(
                                            foodQuantity: snapshot.data![index].quantity,
                                            foodName: snapshot.data![index].foodName,
                                          );
                                        },
                                      );
                                    }else if (snapshot.hasError) {
                                      return Text('${snapshot.error}');
                                    }
                                    return const SizedBox(
                                      height: 20,
                                      width: 20,
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
                            const Divider(color: Color(0xFFfebf10),),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
                Expanded(
                  flex: 1,
                  child: Container(
                    decoration: const BoxDecoration(
                      color: Colors.black38,
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(20),
                        topRight: Radius.circular(20),
                        bottomLeft: Radius.circular(20),
                        bottomRight: Radius.circular(20),
                      ),
                    ),
                    child: Center(
                      child: Container(
                        width: 150,
                        height: 35,
                        padding: const EdgeInsets.only(left: 5, right: 5),
                        child: AnimatedButton(
                          text: "Place Order",
                          buttonTextStyle: const TextStyle(
                            color: Colors.black,
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                          color: const Color(0xFFfebf10),
                          pressEvent: () {
                            orderItems(orderFoods, paymentMethod, totalPrice, 'Online Order', customerId);
                          },
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
          ],
        ),
      ),
    );
  }
  void orderItems(List<FoodList> foods, String paymentMethod, num totalPrice, String type, String customerId) async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    final http.Response response = await http.post(
      Uri.parse("http://$hostName:5000/api/v1/OrderItem"),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
      body: jsonEncode(<String, dynamic>{
        "Foods":foods,
        "paymentMethod":paymentMethod,
        "TotalPrice":totalPrice,
        "Type":type,
        "Customer":customerId
      }),
    );
    if(response.statusCode == 201) {
      final json = jsonDecode(response.body);
      final orderDetails = json["data"];
      final msg = json["message"];
      print(msg);
      print(orderDetails);
    }else{
      final json = jsonDecode(response.body);
      final msg = json["message"];
      print("Order Unsuccuessfull");
    }
  }
  //For get order data
  Future<List<dynamic>> fetchOrderData() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    print("In the fetchdata() ${userToken!}");
    final response = await http.get(
      Uri.parse('http://$hostName:5000/api/v1/CartItems'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
    );
    if (response.statusCode == 200) {
      final cartFood = json.decode(response.body);
      print(cartFood);
      return CartItems.fromJsonList(cartFood);
    } else {
      throw Exception('Failed to load data');
    }
  }
}

//For get orderlist data
class CartItems{
  final String foodName;
  final String foodId;
  final int quantity;
  CartItems({
    required this.quantity,
    required this.foodId,
    required this.foodName,
  });
  factory CartItems.fromJson(Map<String, dynamic> json){
    return CartItems(
      quantity: json['quantity'],
      foodId: json['Foodid'],
      foodName: json['name'],
    );
  }
  static List<CartItems> fromJsonList(dynamic jsonList){
    final cartItemsList = <CartItems>[];
    if (jsonList is List<dynamic>) {
      for (final json in jsonList) {
        cartItemsList.add(CartItems.fromJson(json),);
      }
    }
    return cartItemsList;
  }
}
class FoodList {
  final String foodId;
  final int qty;
  FoodList({required this.foodId, required this.qty});

  Map<String, dynamic> toJson() => {
    'food': foodId,
    'Quantity': qty,
  };
}