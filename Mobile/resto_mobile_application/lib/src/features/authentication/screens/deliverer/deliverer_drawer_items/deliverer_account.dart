import 'dart:convert';

import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../../../../common_widgets/background_image.dart';
import '../../../../../common_widgets/deliverer_drawer_item_appbar.dart';
import '../../../../../common_widgets/drawer_item_appbar.dart';
class DelivererAccount extends StatefulWidget {
  const DelivererAccount({Key? key}) : super(key: key);

  @override
  State<DelivererAccount> createState() => _DelivererAccountState();
}

class _DelivererAccountState extends State<DelivererAccount> {
  ///-----------------------For get image from gallery----------------------------///
  File? _image;
  Future getImage() async {
    final image = await ImagePicker().pickImage(source: ImageSource.gallery);
    if(image == null ) return;
    final imageTemporary = File(image.path);

    setState(() {
      _image = imageTemporary;
    });
  }
  ///----------------------------------------------------------------------------///


  late Future<Map<String, dynamic>> _futureData;
  @override
  void initState() {
    super.initState();
    _futureData = getUserDetails();
  }
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: const Color(0xFF161b1d),
        appBar: const DelivererDrawerItemAppbar(title: "My Account"),
        body: Stack(
          children: <Widget>[
            const BackgroundImage(),
            SingleChildScrollView(
              keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
              child: Container(
                padding: const EdgeInsets.all(10.0),
                margin: const EdgeInsets.all(10.0),
                decoration: BoxDecoration(
                  color: Colors.black38,
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Center(
                  child: FutureBuilder(
                    future: _futureData,
                    builder: (context, snapshot){
                      if(snapshot.hasData){
                        final String userImagePath = snapshot.data!['user']['ProfileImage'];
                        final String userName = snapshot.data!['user']['Name'];
                        final String userEmail = snapshot.data!['user']['Email'];
                        final String userContact = snapshot.data!['user']['ContactNumber'];
                        final String userAddress = snapshot.data!['user']['Address'];
                        final String imageUrl = 'http://localhost:5000/images/$userImagePath';
                        return Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            _image != null ?
                            Image.file(_image!, width: 50, height: 50, fit: BoxFit.cover) :
                            CircleAvatar(
                              radius: 70,
                              backgroundImage: NetworkImage(imageUrl),
                            ),
                            const SizedBox(height: 10.0,),
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                Expanded(child: Container(),),
                                Center(
                                  child: Container(
                                    width: 160,
                                    height: 35,
                                    padding: const EdgeInsets.only(left: 5, right: 5),
                                    child: AnimatedButton(
                                      icon: Icons.camera_alt,
                                      text: 'Choose From Gallery',
                                      buttonTextStyle: const TextStyle(
                                        color: Colors.white,
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      //color: const Color(0xFFfebf10),
                                      color: Colors.transparent,
                                      pressEvent: () {
                                        getImage();
                                      },
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 10.0,),
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  'Personal Info:',
                                  style: TextStyle(
                                    fontSize: 20,
                                    color: Colors.white,
                                  ),
                                ),
                                Expanded(
                                  flex: 1,
                                  child: Container(),
                                ),
                                Center(
                                  child: Container(
                                    width: 150,
                                    height: 35,
                                    padding: const EdgeInsets.only(left: 5, right: 5),
                                    child: AnimatedButton(
                                      text: "Upload Profile Img",
                                      buttonTextStyle: const TextStyle(
                                        color: Colors.black,
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      color: const Color(0xFFfebf10),
                                      pressEvent: () {

                                      },
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 10.0,),
                            TextFormField(
                              initialValue: userName,
                              style: const TextStyle(
                                fontSize: 15,
                                color: Color(0xFFfebf10),
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                labelText: 'Name',
                                labelStyle: const TextStyle(
                                  fontSize: 15,
                                  color: Color(0xFFfebf10),
                                ),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFFFFF33)),
                                ),
                                suffixIcon: const Icon(
                                  Icons.person,
                                  color: Color(0xFFfebf10),
                                ),
                              ),
                            ),
                            const SizedBox(height: 10.0,),
                            TextFormField(
                              initialValue: userEmail,
                              style: const TextStyle(
                                fontSize: 15,
                                color: Color(0xFFfebf10),
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                labelText: 'Email',
                                labelStyle: const TextStyle(
                                  fontSize: 15,
                                  color: Color(0xFFfebf10),
                                ),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFFFFF33)),
                                ),
                                suffixIcon: const Icon(
                                  Icons.email,
                                  color: Color(0xFFfebf10),
                                ),
                              ),
                            ),
                            const SizedBox(height: 10.0,),
                            TextFormField(
                              initialValue: userContact,
                              style: const TextStyle(
                                fontSize: 15,
                                color: Color(0xFFfebf10),
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                labelText: 'Contact Number',
                                labelStyle: const TextStyle(
                                  fontSize: 15,
                                  color: Color(0xFFfebf10),
                                ),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFFFFF33)),
                                ),
                                suffixIcon: const Icon(
                                  Icons.phone_android,
                                  color: Color(0xFFfebf10),
                                ),
                              ),
                            ),
                            const SizedBox(height: 10.0,),
                            TextFormField(
                              initialValue: userAddress,
                              style: const TextStyle(
                                fontSize: 15,
                                color: Color(0xFFfebf10),
                                fontWeight: FontWeight.bold,
                              ),
                              decoration: InputDecoration(
                                labelText: 'Address',
                                labelStyle: const TextStyle(
                                  fontSize: 15,
                                  color: Color(0xFFfebf10),
                                ),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFfebf10)),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10),
                                  borderSide: const BorderSide(color: Color(0xFFFFFF33)),
                                ),
                                suffixIcon: const Icon(
                                  Icons.location_on_outlined,
                                  color: Color(0xFFfebf10),
                                ),
                              ),
                            ),
                            const SizedBox(height: 10.0,),
                            Center(
                              child: Container(
                                width: 150,
                                height: 35,
                                padding: const EdgeInsets.only(left: 5, right: 5),
                                child: AnimatedButton(
                                  text: "Update Profile",
                                  buttonTextStyle: const TextStyle(
                                    color: Colors.black,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                                  color: const Color(0xFFfebf10),
                                  pressEvent: () {

                                  },
                                ),
                              ),
                            ),
                          ],
                        );
                      }else if (snapshot.hasError) {
                        return Text('${snapshot.error}');
                      }
                      return const CircularProgressIndicator();
                    },
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
  Future<Map<String, dynamic>> getUserDetails() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    String? userToken = pref.getString("JwtToken");
    print("In the getUserDetails() ${userToken!}");
    final response = await http.get(
      Uri.parse('http://localhost:5000/api/v1/Auth/Profile'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "Bearer $userToken",
      },
    );
    if (response.statusCode == 201) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to load data');
    }
  }
}