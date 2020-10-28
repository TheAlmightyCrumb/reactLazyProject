import mixpanel from "mixpanel-browser";

mixpanel.init("586d399b70e5262c98605e5d9db58bf8");

export default function track(eventName, options = {}) {
    return mixpanel.track(eventName, options);
}