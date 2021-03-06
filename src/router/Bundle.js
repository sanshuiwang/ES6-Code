import React, {Component} from 'react';
/*
*我们现在看到，打包完后，所有页面只生成了一个build.js,当我们首屏加载的时候，就会很慢。因为他也下载了别的页面的js了哦。
*如果每个页面都打包了自己单独的JS，在进入自己页面的时候才加载对应的js，那首屏加载就会快很多哦。
*/
class Bundle extends Component {
  state = {
    mod: null
  }

  componentWillMount(){
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.load !== this.props.load){
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load((mod) =>{
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}

export default Bundle;
