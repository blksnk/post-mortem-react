import React, { Component } from 'react'
import style from './Obseques.module.css'
import editIcon from './icons/editIcon.svg'

class SummaryList extends Component {
  handleEditCallback = (event) => {
    let targetPage = parseInt(event.target.getAttribute('targetpage'));
    this.props.callbackHandleEdit(targetPage);
  }

  displayListItem = (item) => {
    return (
      <div>{item}</div>
    )
  }

  render () {
    return (
      <div className={style.summaryList}>
        <div className={style.funeralTypeBox + ' ' + style.summaryBox}>
          <div className={style.summaryBoxHeader}>
            <div>{this.props.funeralInputs.funeralType.value}</div>
            <div className={style.editIcon}><img src={editIcon} targetpage={0} onClick={this.handleEditCallback} alt="Icône de modification" /></div>
          </div>
        </div>
        <div className={style.funeralTypeDetailsBox}></div>
        <div className={style.musicBox + ' ' + style.summaryBox}>
          <div className={style.summaryBoxHeader}>
            <div>Musique</div>
            <div className={style.editIcon}><img src={editIcon} targetpage={4} onClick={this.handleEditCallback} alt="Icône de modification" /></div>
          </div>
          <div className={style.summaryBoxBody}>
            <div>{this.props.funeralInputs.musicList[0]}</div>
            <div>{this.props.funeralInputs.musicList[1]}</div>
            <div>{this.props.funeralInputs.musicList[2]}</div>
          </div>
        </div>
        <div className={style.locationBox + ' ' + style.summaryBox}>
          <div className={style.summaryBoxHeader}>
            <div>Lieux</div>
            <div className={style.editIcon}><img src={editIcon} targetpage={5} onClick={this.handleEditCallback} alt="Icône de modification" /></div>
          </div>
          <div className={style.summaryBoxBody}>
            <div>{this.props.funeralInputs.locationList[0]}</div>
            <div>{this.props.funeralInputs.locationList[1]}</div>
            <div>{this.props.funeralInputs.locationList[2]}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryList;