import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../theme/color";
import style from "../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/image/image.png")}
            resizeMode="stretch"
            style={{ width: width / 9, height: height / 20 }}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                fontFamily: "Tinos-Regular",
                color: Colors.active,
              }}
            >
              Smith Rollins
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Image
              source={require("../assets/image/Notifications.png")}
              resizeMode="stretch"
              style={{ width: width / 9.5, height: height / 20.5 }}
            />
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View style={{ marginTop: 20 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
            >
              <View style={{ flexDirection: "row" }}>
                <View>
                  <ImageBackground
                    source={require("../assets/image/Card.png")}
                    resizeMode="stretch"
                    style={{
                      width: width / 1.8,
                      height: height / 4,
                      padding: 20,
                    }}
                  >
                    <View>
                      <Image
                        source={require("../assets/image/Coin.png")}
                        resizeMode="stretch"
                        style={{ width: width / 7.5, height: height / 17 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Text style={style.subtxt}>Bitcoin</Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            style.subtxt,
                            {
                              paddingVertical: 5,
                              paddingHorizontal: 10,
                              marginHorizontal: 5,
                              borderRadius: 20,
                              backgroundColor: "#FF6838",
                              color: Colors.secondary,
                            },
                          ]}
                        >
                          -0.79%
                        </Text>
                      </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                      <Text style={[style.logintitle, { fontSize: 22 }]}>
                        $36,641.20
                      </Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                      <Text style={style.subtxt}>BTC</Text>
                    </View>
                  </ImageBackground>
                </View>

                <View style={{ margin: 10 }} />

                <View>
                  <ImageBackground
                    source={require("../assets/image/Card1.png")}
                    resizeMode="stretch"
                    style={{
                      width: width / 1.8,
                      height: height / 4,
                      padding: 20,
                    }}
                  >
                    <View>
                      <Image
                        source={require("../assets/image/Coin1.png")}
                        resizeMode="stretch"
                        style={{ width: width / 7.5, height: height / 17 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Text style={style.subtxt}>Ethereum</Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            style.subtxt,
                            {
                              paddingVertical: 5,
                              paddingHorizontal: 10,
                              marginHorizontal: 5,
                              borderRadius: 20,
                              backgroundColor: "#58BD7D",
                              color: Colors.secondary,
                            },
                          ]}
                        >
                          +1.32%
                        </Text>
                      </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                      <Text style={[style.logintitle, { fontSize: 22 }]}>
                        $28,312.20
                      </Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                      <Text style={style.subtxt}>ETH</Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={style.subtitle}>Portfolio</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Text style={style.txt}>Total Wallet Balance</Text>
            <TouchableOpacity
              onPress={() => this.RBSheet.open()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={[style.txt, { color: Colors.primary }]}>USD </Text>
              <Icon
                name="chevron-down-sharp"
                color={Colors.primary}
                size={20}
              />

              <RBSheet
                ref={(ref) => {
                  this.RBSheet = ref;
                }}
                height={300}
                openDuration={100}
                customStyles={{
                  container: {
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                  },
                }}
              >
                <View style={[style.main]}>
                  <View style={{ paddingTop: 30 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../assets/image/Coin3.png")}
                        style={{
                          resizeMode: "stretch",
                          height: height / 18,
                          width: width / 8,
                        }}
                      />
                      <View style={{ marginHorizontal: 10 }}>
                        <Text style={[style.subtitle1]}>Uniswap</Text>
                        <Text style={[style.subtxt]}>UNI</Text>
                      </View>
                      <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <Icons
                          name="bell-ring-outline"
                          color={Colors.active}
                          size={20}
                        />
                        <Text style={[style.subtxt]}>3.7%</Text>
                      </View>
                    </View>
                    <View style={[style.divider]} />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 20,
                      }}
                    >
                      <View style={{ marginRight: 20 }}>
                        <Text style={style.logintitle}>$28,312.16</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "#58BD7D",
                          borderRadius: 20,
                          paddingVertical: 5,
                          paddingHorizontal: 7,
                        }}
                      >
                        <Icon
                          name="caret-up-outline"
                          color={Colors.secondary}
                          size={15}
                        />
                        <Text
                          style={[style.subtxt, { color: Colors.secondary }]}
                        >
                          {" "}
                          +20%
                        </Text>
                      </View>
                      <Text
                        style={[
                          style.subtxt,
                          { color: "#58BD7D", marginHorizontal: 10 },
                        ]}
                      >
                        +0.9%
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginBottom: 20,
                      }}
                    >
                      <View style={{ flex: 1 }}>
                        <TouchableOpacity
                          // onPress={() => navigation.navigate('')}
                          style={style.btn}
                        >
                          <Text style={style.btntxt}>Buy</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ padding: 5 }} />
                      <View style={{ flex: 1 }}>
                        <TouchableOpacity
                          // onPress={() => navigation.navigate('')}
                          style={[
                            style.btn,
                            { backgroundColor: Colors.active },
                          ]}
                        >
                          <Text style={style.btntxt}>View Details</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </RBSheet>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <Text style={style.logintitle}>$6641.20</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#58BD7D",
                borderRadius: 20,
                paddingVertical: 4,
                paddingHorizontal: 6,
              }}
            >
              <Icon
                name="caret-up-outline"
                color={Colors.secondary}
                size={15}
              />
              <Text style={[style.subtxt, { color: Colors.secondary }]}>
                {" "}
                +13%
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
              backgroundColor: Colors.secondary,
              paddingVertical: 15,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/image/Analytics.png")}
                resizeMode="stretch"
                style={{ height: height / 18.5, width: width / 9 }}
              />
              <Text style={[style.txt1, { textAlign: "center", marginTop: 5 }]}>
                Analytics
              </Text>
            </View>

            <View style={style.verticaldivider} />

            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/image/Withdraw.png")}
                resizeMode="stretch"
                style={{ height: height / 18.5, width: width / 9 }}
              />
              <Text style={[style.txt1, { textAlign: "center", marginTop: 5 }]}>
                Withdraw
              </Text>
            </View>

            <View style={style.verticaldivider} />

            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../assets/image/Deposit.png")}
                resizeMode="stretch"
                style={{ height: height / 18.5, width: width / 9 }}
              />
              <Text style={[style.txt1, { textAlign: "center", marginTop: 5 }]}>
                Deposit
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={style.subtitle}>Market Trend</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/image/Coin3.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 20 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle]}>Uniswap</Text>
              <Text style={[style.subtxt]}>UNI</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $16,351.57
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>3.7%</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
              marginBottom: 60,
            }}
          >
            <Image
              source={require("../assets/image/Coin4.png")}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 20 }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtitle]}>Ripple</Text>
              <Text style={[style.subtxt]}>RIP</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Text style={[style.txt1, { fontFamily: "Tinos-Bold" }]}>
                $14,563.34
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="chevron-up-sharp" color={"#5FC88F"} size={20} />
                <Text style={[style.subtxt, { lineHeight: 13 }]}>2.5%</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
