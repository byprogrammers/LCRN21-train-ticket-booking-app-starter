const onboarding_screens = [
    {
        id: 1,
        image: require('../assets/images/splash_1.png'),
        title: "Search your trip easily",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus varius nulla, quis dictum augue."
    },
    {
        id: 2,
        image: require('../assets/images/splash_2.png'),
        title: "Explore destinations and promotions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus varius nulla, quis dictum augue."
    },
    {
        id: 3,
        image: require('../assets/images/splash_3.png'),
        title: "Manage your trips",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus varius nulla, quis dictum augue."
    }
]

const login = "LOGIN"
const register = "REGISTER"
const forgot_password = "FORGOT_PASSWORD"

export default {
    onboarding_screens,
    login,
    register,
    forgot_password
}