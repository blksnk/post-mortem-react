import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Testament.module.css'

import { connect } from 'react-redux'
import {IS_OPENED, IS_ADD_OWNER_OPENED  } from '../../actions/rootActions.js'


class DisplayTestament extends Component {
    state = {  
        property: {
            title: '',
            img: '',
            owners: [],
        },
    }

    addNewProperty = () => {
        console.log(this.props.isOpened)
        this.props.OverlayIsOpened()
    }

    render() { 
        return (  
            <section>
                <header className={style.header}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <g clip-path="url(#clip1)">
                        <path d="M14.8341 3.38211L14.8341 3.38207C14.9323 3.31017 15.0658 3.3101 15.1642 3.38213L29.3846 13.794C29.3846 13.794 29.3846 13.794 29.3846 13.794C29.5093 13.8853 29.5362 14.0602 29.4451 14.1845L29.445 14.1847C29.3905 14.2591 29.3064 14.299 29.2189 14.299C29.1615 14.299 29.1046 14.2818 29.0546 14.2451L29.0544 14.245L15.2944 4.17024L14.9991 3.95397L14.7037 4.17024L0.943726 14.2451C0.943716 14.2451 0.943706 14.2451 0.943696 14.2451C0.819183 14.3362 0.644244 14.3092 0.553047 14.1846C0.461912 14.0602 0.488866 13.8853 0.613478 13.794C0.613488 13.794 0.613498 13.794 0.613508 13.794L14.8341 3.38211Z" fill="black" stroke="#5D1AD5"/>
                        <path d="M25.1333 28.5109H25.6333V28.0109V15.6037C25.6333 15.4494 25.7584 15.3242 25.9127 15.3242C26.067 15.3242 26.1922 15.4493 26.1923 15.6037C26.1923 15.6038 26.1923 15.6038 26.1923 15.6038V28.7904C26.1923 28.9448 26.0671 29.0699 25.9128 29.0699H18.1181C17.9721 29.0699 17.8513 28.9569 17.8403 28.8124L17.8404 28.8124L17.839 28.7986C17.8389 28.7971 17.8387 28.7949 17.8387 28.7904V21.2383C17.8387 19.6726 16.5657 18.3996 14.9999 18.3996C13.4342 18.3996 12.1612 19.6726 12.1612 21.2383V28.7904C12.1612 28.7932 12.1612 28.7954 12.1611 28.797C12.161 28.7982 12.1609 28.7992 12.1608 28.8L12.1606 28.8L12.1597 28.8126C12.1485 28.957 12.0278 29.0699 11.8818 29.0699H4.08709C3.93278 29.0699 3.80762 28.9448 3.80762 28.7904V15.6037C3.80762 15.4494 3.93278 15.3243 4.08709 15.3243C4.2414 15.3243 4.36656 15.4494 4.36656 15.6037V28.0109V28.5109H4.86656H11.1023H11.6023V28.0109V21.2382C11.6023 19.3653 13.127 17.8406 14.9999 17.8406C16.8729 17.8406 18.3976 19.3652 18.3976 21.2382V28.0109V28.5109H18.8976H25.1333Z" fill="black" stroke="#5D1AD5"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        <clipPath id="clip1">
                        <rect width="30" height="30" fill="white" transform="translate(0 1.19922)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24.5" cy="24.5" r="12.5" stroke="#5D1AD5" stroke-width="2"/>
                        <path d="M23.06 21.26H25.42V31H23.06V21.26ZM22.78 18.14C22.78 17.7133 22.9067 17.38 23.16 17.14C23.4133 16.8867 23.7733 16.76 24.24 16.76C24.6933 16.76 25.0467 16.8867 25.3 17.14C25.5667 17.38 25.7 17.7133 25.7 18.14C25.7 18.5667 25.5667 18.9067 25.3 19.16C25.0467 19.4 24.6933 19.52 24.24 19.52C23.7733 19.52 23.4133 19.4 23.16 19.16C22.9067 18.9067 22.78 18.5667 22.78 18.14Z" fill="#5D1AD5"/>
                    </svg>
                </header>
                <div className={style.property}>
                    <h2 className={style.title}>MON MINI TESTAMENT DE L'AMOUR</h2>
                    <h3 className={style.subtitle}>Mes trésors précieux à moi</h3>
                    <div className={style.addPropertyBtnWrapper}>
                        <button onClick={this.addNewProperty} className={style.addBtn}>
                            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 72.5H111.5V104C111.5 108.142 108.142 111.5 104 111.5H8C3.85787 111.5 0.5 108.142 0.5 104V72.5Z" fill="#3B3E42" fill-opacity="0.46" stroke="#969696"/>
                                <path d="M21.7861 75.936H23.3221L26.6981 86H25.3861L24.5221 83.44H20.5221L19.6581 86H18.3301L21.7861 75.936ZM20.8581 82.448H24.2021L22.5381 77.488L20.8581 82.448ZM29.6772 76.544C29.4212 76.544 29.2185 76.4747 29.0692 76.336C28.9305 76.1867 28.8612 75.9947 28.8612 75.76C28.8612 75.5147 28.9305 75.3227 29.0692 75.184C29.2185 75.0347 29.4212 74.96 29.6772 74.96C29.9332 74.96 30.1359 75.0347 30.2852 75.184C30.4452 75.3227 30.5252 75.5147 30.5252 75.76C30.5252 75.9947 30.4452 76.1867 30.2852 76.336C30.1359 76.4747 29.9332 76.544 29.6772 76.544ZM27.6452 88.832C28.5839 88.832 29.0532 88.2453 29.0532 87.072V78.32H30.3172V87.072C30.3172 88.5333 29.8372 89.4347 28.8772 89.776C28.5785 89.8827 28.2479 89.936 27.8852 89.936C27.2239 89.936 26.5092 89.7387 25.7412 89.344L25.8052 88.24C26.4772 88.6347 27.0905 88.832 27.6452 88.832ZM36.5164 78.16C37.5831 78.16 38.4418 78.5067 39.0924 79.2C39.7538 79.8933 40.0844 80.8853 40.0844 82.176C40.0844 83.456 39.7538 84.4427 39.0924 85.136C38.4418 85.8293 37.5831 86.176 36.5164 86.176C35.4498 86.176 34.5858 85.8293 33.9244 85.136C33.2738 84.4427 32.9484 83.456 32.9484 82.176C32.9484 80.8853 33.2738 79.8933 33.9244 79.2C34.5858 78.5067 35.4498 78.16 36.5164 78.16ZM38.8044 82.176C38.8044 81.2587 38.6124 80.544 38.2284 80.032C37.8444 79.5093 37.2791 79.248 36.5324 79.248C35.7964 79.248 35.2311 79.5093 34.8364 80.032C34.4418 80.544 34.2444 81.2587 34.2444 82.176C34.2444 83.0827 34.4311 83.7973 34.8044 84.32C35.1778 84.832 35.7324 85.088 36.4684 85.088C37.2151 85.088 37.7911 84.832 38.1964 84.32C38.6018 83.7973 38.8044 83.0827 38.8044 82.176ZM47.6988 84.48C47.1761 85.5893 46.3281 86.144 45.1548 86.144C44.2908 86.144 43.5921 85.904 43.0588 85.424C42.5361 84.944 42.2748 84.2027 42.2748 83.2V78.336H43.5388V83.104C43.5388 84.3947 44.1361 85.04 45.3308 85.04C46.0241 85.04 46.5841 84.7733 47.0108 84.24C47.4481 83.7067 47.6775 83.024 47.6988 82.192V78.336H48.9628V86H47.6988V84.48ZM56.2019 85.776C55.2846 86.2027 54.4473 86.2933 53.6899 86.048C53.1459 85.8773 52.7619 85.52 52.5379 84.976C52.4206 84.7093 52.3619 84.3893 52.3619 84.016V79.312H51.1299V78.352H52.3619V76.224H53.6099V78.352H56.0099V79.312H53.6099V84C53.6099 84.7787 53.9726 85.168 54.6979 85.168C55.0926 85.168 55.5353 85.072 56.0259 84.88L56.2019 85.776ZM60.8576 85.152C61.9136 85.152 62.5162 84.688 62.6656 83.76H63.9616C63.8442 84.528 63.5029 85.1253 62.9376 85.552C62.3829 85.968 61.6896 86.176 60.8576 86.176C59.8336 86.176 59.0016 85.8133 58.3616 85.088C57.7216 84.352 57.4016 83.376 57.4016 82.16C57.4016 80.944 57.7216 79.9733 58.3616 79.248C59.0122 78.5227 59.8709 78.16 60.9376 78.16C62.0149 78.16 62.8149 78.576 63.3376 79.408C63.8709 80.24 64.0576 81.2533 63.8976 82.448H58.6656C58.6656 83.2373 58.8576 83.888 59.2416 84.4C59.6256 84.9013 60.1642 85.152 60.8576 85.152ZM61.7856 79.36C61.5402 79.232 61.2416 79.168 60.8896 79.168C60.2389 79.168 59.7216 79.392 59.3376 79.84C58.9642 80.2773 58.7456 80.8267 58.6816 81.488H62.7616C62.7616 80.4213 62.4362 79.712 61.7856 79.36ZM69.5719 79.424C68.3666 79.424 67.7426 80.3733 67.6999 82.272V86H66.4359V78.336H67.6999V79.808C68.0839 78.7413 68.7613 78.208 69.7319 78.208C70.0413 78.208 70.3346 78.256 70.6119 78.352L70.5479 79.584C70.2279 79.4773 69.9026 79.424 69.5719 79.424ZM81.5582 84.48C81.0355 85.5893 80.1875 86.144 79.0142 86.144C78.1502 86.144 77.4515 85.904 76.9182 85.424C76.3955 84.944 76.1342 84.2027 76.1342 83.2V78.336H77.3982V83.104C77.3982 84.3947 77.9955 85.04 79.1902 85.04C79.8835 85.04 80.4435 84.7733 80.8702 84.24C81.3075 83.7067 81.5369 83.024 81.5582 82.192V78.336H82.8222V86H81.5582V84.48ZM87.2773 79.824C87.7786 78.7147 88.6373 78.16 89.8533 78.16C90.76 78.16 91.464 78.4587 91.9653 79.056C92.4773 79.6533 92.7333 80.4693 92.7333 81.504V86H91.4853V81.504C91.4853 80.768 91.3093 80.2133 90.9573 79.84C90.616 79.4667 90.1253 79.28 89.4853 79.28C88.8453 79.28 88.328 79.5413 87.9333 80.064C87.5386 80.5867 87.3306 81.312 87.3093 82.24V86H86.0453V78.352H87.1333L87.2773 79.824ZM41.6883 97.16C42.755 97.16 43.6136 97.5067 44.2643 98.2C44.9256 98.8933 45.2563 99.8853 45.2563 101.176C45.2563 102.456 44.9256 103.443 44.2643 104.136C43.6136 104.829 42.755 105.176 41.6883 105.176C40.6216 105.176 39.7576 104.829 39.0963 104.136C38.4456 103.443 38.1203 102.456 38.1203 101.176C38.1203 99.8853 38.4456 98.8933 39.0963 98.2C39.7576 97.5067 40.6216 97.16 41.6883 97.16ZM43.9763 101.176C43.9763 100.259 43.7843 99.544 43.4003 99.032C43.0163 98.5093 42.451 98.248 41.7043 98.248C40.9683 98.248 40.403 98.5093 40.0083 99.032C39.6136 99.544 39.4163 100.259 39.4163 101.176C39.4163 102.083 39.603 102.797 39.9763 103.32C40.3496 103.832 40.9043 104.088 41.6403 104.088C42.387 104.088 42.963 103.832 43.3683 103.32C43.7736 102.797 43.9763 102.083 43.9763 101.176ZM48.9347 98.488C49.4467 97.6027 50.1934 97.16 51.1747 97.16C52.156 97.16 52.972 97.528 53.6227 98.264C54.2734 98.9893 54.5987 99.9547 54.5987 101.16C54.5987 102.355 54.268 103.325 53.6067 104.072C52.9454 104.808 52.14 105.176 51.1907 105.176C50.6787 105.176 50.2147 105.048 49.7987 104.792C49.3934 104.536 49.0734 104.157 48.8387 103.656L48.5507 105H47.6707V94.104H48.9347V98.488ZM51.0947 98.28C50.4867 98.28 49.98 98.4773 49.5747 98.872C49.1694 99.256 48.956 99.7947 48.9347 100.488V101.736C48.9347 102.44 49.1427 103.005 49.5587 103.432C49.9854 103.848 50.4974 104.056 51.0947 104.056C51.692 104.056 52.2094 103.795 52.6467 103.272C53.084 102.739 53.3027 102.035 53.3027 101.16C53.3027 100.285 53.084 99.5867 52.6467 99.064C52.22 98.5413 51.7027 98.28 51.0947 98.28ZM57.9584 95.544C57.7024 95.544 57.4998 95.4747 57.3504 95.336C57.2118 95.1867 57.1424 94.9947 57.1424 94.76C57.1424 94.5147 57.2118 94.3227 57.3504 94.184C57.4998 94.0347 57.7024 93.96 57.9584 93.96C58.2144 93.96 58.4171 94.0347 58.5664 94.184C58.7264 94.3227 58.8064 94.5147 58.8064 94.76C58.8064 94.9947 58.7264 95.1867 58.5664 95.336C58.4171 95.4747 58.2144 95.544 57.9584 95.544ZM55.9264 107.832C56.8651 107.832 57.3344 107.245 57.3344 106.072V97.32H58.5984V106.072C58.5984 107.533 58.1184 108.435 57.1584 108.776C56.8598 108.883 56.5291 108.936 56.1664 108.936C55.5051 108.936 54.7904 108.739 54.0224 108.344L54.0864 107.24C54.7584 107.635 55.3718 107.832 55.9264 107.832ZM64.6857 104.152C65.7417 104.152 66.3444 103.688 66.4937 102.76H67.7897C67.6724 103.528 67.331 104.125 66.7657 104.552C66.211 104.968 65.5177 105.176 64.6857 105.176C63.6617 105.176 62.8297 104.813 62.1897 104.088C61.5497 103.352 61.2297 102.376 61.2297 101.16C61.2297 99.944 61.5497 98.9733 62.1897 98.248C62.8404 97.5227 63.699 97.16 64.7657 97.16C65.843 97.16 66.643 97.576 67.1657 98.408C67.699 99.24 67.8857 100.253 67.7257 101.448H62.4937C62.4937 102.237 62.6857 102.888 63.0697 103.4C63.4537 103.901 63.9924 104.152 64.6857 104.152ZM65.6137 98.36C65.3684 98.232 65.0697 98.168 64.7177 98.168C64.067 98.168 63.5497 98.392 63.1657 98.84C62.7924 99.2773 62.5737 99.8267 62.5097 100.488H66.5897C66.5897 99.4213 66.2644 98.712 65.6137 98.36ZM74.2801 104.776C73.3627 105.203 72.5254 105.293 71.7681 105.048C71.2241 104.877 70.8401 104.52 70.6161 103.976C70.4987 103.709 70.4401 103.389 70.4401 103.016V98.312H69.2081V97.352H70.4401V95.224H71.6881V97.352H74.0881V98.312H71.6881V103C71.6881 103.779 72.0507 104.168 72.7761 104.168C73.1707 104.168 73.6134 104.072 74.1041 103.88L74.2801 104.776Z" fill="#F2F5F8"/>
                                <rect x="0.5" y="0.5" width="111" height="111" rx="7.5" stroke="#969696"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.0003 24.416C54.8497 24.416 53.917 25.3488 53.917 26.4993V36.916H43.5003C42.3497 36.916 41.417 37.8488 41.417 38.9993V38.9993C41.417 40.1499 42.3497 41.0827 43.5003 41.0827H53.917V51.4993C53.917 52.6499 54.8497 53.5827 56.0003 53.5827V53.5827C57.1509 53.5827 58.0837 52.6499 58.0837 51.4993V41.0827H68.5003C69.6509 41.0827 70.5837 40.1499 70.5837 38.9993V38.9993C70.5837 37.8488 69.6509 36.916 68.5003 36.916H58.0837V26.4993C58.0837 25.3488 57.1509 24.416 56.0003 24.416V24.416Z" fill="#969696"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        isOpened: state.isOpened,
        isAddOwnerOpened: state.isAddOwnerOpened,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OverlayIsOpened: () => {
            dispatch( IS_OPENED() )
        },
        toggleAddOwner: () => {
            dispatch( IS_ADD_OWNER_OPENED() )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTestament);