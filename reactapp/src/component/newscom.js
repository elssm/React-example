import React from "react"
import axios from 'axios'
import bannerImg from '../assets/img/news.jpg'
class NewsCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            datalist:[]
        }
    }
    async componentWillMount(){
        let res = await axios.get("http://localhost:8080/api/news")
        // console.log(res.data)
        let data = JSON.parse(res.data.data[0].content)
        console.log(data.sub_raw_datas)
        this.setState({
            datalist:data.sub_raw_datas
        })
    }
    render(){
        return (
            <div className="contentItem new">
                <div className="banner">
                    <img alt="banner" src={bannerImg} />
                    <h1>疫情追踪</h1>
                </div>

                <div className="newContent">
                    <div className="line"></div>
                    <div className="newList">
                        {
                            this.state.datalist.map((item,index)=>{
                                return (
                                    <div className="newsListItem" key={index}>
                                        <div className="time">{item.raw_data.showtime_string}</div>
                                        <div className="desc">
                                            {item.raw_data.desc}
                                        </div>
                                        {/* <div className="img">
                                            <img src={item.raw_data.event_img.url} alt='img' /> */}
                                        {/* </div> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default NewsCom