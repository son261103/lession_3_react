import './App.css';
import EventDemo1 from "./component/EventDemo1";
import EventDemo2 from "./component/EventDemo2";
import EventDemo3 from "./component/EventDemo3";
import EvenDemo4 from "./component/EvenDemo4";
import FormDemo1 from "./component/FormDemo1";
import FormDemo2 from "./component/FormDemo2";
import ListRender from "./component/ListRender";
import ListObjRender from "./component/ListObjRender";

function App() {

    // hàm nhận dữ liệu từ even demo 3 để sử lý
    const handleReciver = (param) => {
        alert("xin chào " + param);
    }

    const handleSubmit = (args, vall) => {
        alert(args + vall)
    }

    const handleSubmitForm2 = (params) => {
        console.log(params)
    }

    return (
        <div className="container border my-3">
            <header>
                <img src={"https://vptech.vn/wp-content/uploads/2023/07/Phone-2.png"} alt={"ảnh của tôi"}/>
                <EventDemo1/>
                <EventDemo2/>
                <EventDemo3 renderCompany="vptech" onReciver={handleReciver}/>
                <EvenDemo4 onSubmit={handleSubmit}/>
                <hr/>
                <FormDemo1/>
                <hr/>
                <FormDemo2 onSubmit={handleSubmitForm2}/>
                <hr/>
                <ListRender/>
                <hr/>
                <ListObjRender/>
            </header>
        </div>
    );
}

export default App;
