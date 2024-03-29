import 'package:flutter/cupertino.dart';

import '../constants/image_strings.dart';

class BackgroundImage extends StatelessWidget {
  const BackgroundImage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage(commonBackgroundImage),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
