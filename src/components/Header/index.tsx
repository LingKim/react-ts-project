import * as React from 'react'
import './index.scss'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from "react";
import logo from "@images/grade-icon1.png"

// class Store {
// 	@observable name = '李老板';
// 	@observable age = '18';
// 	@observable firstName = 'li';
// 	@observable lastName = 'lin';
// 	@computed get userName() {
// 		return this.firstName + '' + this.lastName
// 	}
// }

// let store = new Store();

const Header = observer(() => {

	// let sum = observable({
	// 	title: '下雨了',
	// 	id: 1
	// });

	// const [count, setCount] = useState(1);

	// useEffect(() => {
	// 	document.title = sum.title
	// }, []);

	// useEffect(() => {
	// 	const timers = setInterval(action(() => {

	// 	}), 1000);
	// 	return () => {
	// 		clearInterval(timers)
	// 	}
	// }, []);

	return (
		<>
		    <h1>react+ts项目启动</h1>
			{/* <div className="test">22334222332</div> */}
			{/* <img src={logo} alt="" width="90px" height="90px" /> */}
			{/*<div className="header">数值:{count}</div>*/}
			{/*<h1>{sum.id}</h1>*/}
			{/*<button onClick={() => setCount(count+1)}>点击</button>*/}
			{/*<button onClick={() => setCount(count+1)}>点击</button>*/}
		</>
	)
});

export default Header