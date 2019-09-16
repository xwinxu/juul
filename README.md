# Hack the North 2019 Finalist

## Background
Juul has not only taken over the e-cigarette industry, but also people's lives. Nicotine content in one Juul pod is equivalent to those in a pack of 10 cigarettes. Addiction thus becomes a serious health problem, in particular to children and teens who obtain Juuls secondhand. Juul marketing plays to their vulnerability with flavors such as watermelon and strawberry lemonade. What can we make as an add-on to reduce nicotine dependence and allow smokers to quit smoking by transitioning using Juul?

## About Innovape
We created an attachment to a Juul that allows users to control the nicotine vape rate in real time through the Innovape mobile app. Users are provided the option to start a quitting plan, with individualized goal setting and projected outcomes given user behavior. Our app stays with the user throughout their journey and asks for their emotional state. Their feedback allows us to deliver a personalized nicotine reduction algorithm to each user, with the purpose being that the user will not notice the reduced nicotine over time. We do so by dynamic adjustments of nicotine release flow based on user analytics such as the average frequency of puffs, post-experience ratings, and daily usage rates. Innovape is compatible with any Juul device.

## Tech Stack
We attached an Arduino to the Juul in order to control the vaporization rate. The Arduino communicates with our react native mobile app through an EC2 instance, where the Arduino sends data when the user inhales, and the mobile app sends signals to control the flow rate. We used the React-native framework for the app with rapid design iteration cycles made possible by Expo.

## Challenges and Achievements
The biggest challenge was that Juul's proprietary device prevented easy communication between Juul and a mobile device. Research on nicotine replacement therapy does not show promising quit rates. Though Juul collects many metrics from their users, those data are unavailable. The lack of data posed a significant challenge on our personalized nicotine reduction algorithm.

We're very proud of our user-focused design of the product, such as the beautiful user interface on the Innovape app. We managed to work with unfamiliar voltages, overcame the proprietary design of the Juul hardware, and managed to integrate hardware with software in a tight timeline.

Throughout the process, we learned to program Arduinos, build integrated circuitry, how to communicate between a mobile device to unrelated hardware, and apply Gaussian statistical reasoning.

#### Built with love (and sleep deprivation) by Winnie Xu, Olivia Li, Hugo Burbelo, and Tianyu Lu.
