import { connect } from "react-redux";
import Store from "../../types/reducer";
import Users from "./Users";

const mapStateToProps = ({ github } : { github: Store }) => ({
    userData: github.userData,
});


const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
