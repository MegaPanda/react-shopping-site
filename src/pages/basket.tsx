import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearBasket } from '../actions/basketActions';
import BasketItemUnit from '../components/basketItem';
import { BasketState } from '../reducers/basketItemReducer';

const BasketItems = ({basket_state}: {basket_state: BasketState}) => {
    const dispatch = useDispatch();
    /* conditional redering of whether there's any items in the basket */
    if (basket_state.total_quantity === 0) {
        return (
            <div className="pt-32 text-center">
                <h2>It's a bit empty here...</h2>
                <h4>Follow the footprint to explore more!</h4>
                <div className="pt-2">
                    <Link to="/products" className="inline-block">
                        <svg className="m-auto" width="180" height="75" viewBox="0 0 155 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="paw-prints">
                            <g id="paw5" className="animate-showPawPrint" style={{animationDelay: "1.2s"}}>
                            <path id="finger1" d="M142.114 51C142.114 52.841 143.606 54.3333 145.447 54.3333C147.288 54.3333 148.78 52.841 148.78 51C148.78 49.1591 147.288 47.6667 145.447 47.6667C143.606 47.6667 142.114 49.1591 142.114 51Z" fill="#4F4F4F"/>
                            <path id="finger2" d="M147.447 57C147.447 58.841 148.939 60.3333 150.78 60.3333C152.621 60.3333 154.114 58.841 154.114 57C154.114 55.1591 152.621 53.6667 150.78 53.6667C148.939 53.6667 147.447 55.1591 147.447 57Z" fill="#4F4F4F"/>
                            <path id="finger3" d="M147.447 65C147.447 66.841 148.939 68.3333 150.78 68.3333C152.621 68.3333 154.114 66.841 154.114 65C154.114 63.1591 152.621 61.6667 150.78 61.6667C148.939 61.6667 147.447 63.1591 147.447 65Z" fill="#4F4F4F"/>
                            <path id="finger4" d="M142.114 71C142.114 72.8409 143.606 74.3333 145.447 74.3333C147.288 74.3333 148.78 72.8409 148.78 71C148.78 69.159 147.288 67.6667 145.447 67.6667C143.606 67.6667 142.114 69.159 142.114 71Z" fill="#4F4F4F"/>
                            <path id="Vector" d="M138.3 68.12C139.66 66.96 140.82 65.9867 142.18 64.8133C142.9 64.2 143.62 63.4133 143.94 62.48C143.994 62.3333 144.034 62.1867 144.06 62.04C144.114 61.7067 144.114 61.3467 144.114 61C144.114 60.6533 144.114 60.2933 144.047 59.9467C144.02 59.8 143.98 59.6533 143.927 59.5067C143.607 58.5733 142.887 57.8 142.167 57.1733C140.807 56.0133 139.647 55.04 138.287 53.8667C136.54 52.12 134.607 49.9733 131.9 50.3733C130.54 50.76 129.194 51.7333 128.807 53.48C128.607 54.4533 129.394 57.56 129.394 60.8667V61.1067C129.394 64.4133 128.62 67.52 128.807 68.4934C129.194 70.24 130.554 71.2134 131.9 71.6C134.62 72.0134 136.554 69.8667 138.3 68.12V68.12Z" fill="#4F4F4F"/>
                            </g>
                            <g id="paw4" className="animate-showPawPrint" style={{animationDelay: "0.9s"}}>
                            <path id="finger1_2" d="M111.201 8.11049C111.831 9.84041 113.743 10.7324 115.473 10.1027C117.203 9.47309 118.095 7.56028 117.466 5.83035C116.836 4.10043 114.923 3.20847 113.193 3.83811C111.463 4.46775 110.571 6.38056 111.201 8.11049Z" fill="#4F4F4F"/>
                            <path id="finger2_2" d="M118.265 11.9245C118.894 13.6545 120.807 14.5464 122.537 13.9168C124.267 13.2871 125.159 11.3743 124.529 9.64439C123.9 7.91447 121.987 7.02251 120.257 7.65215C118.527 8.28179 117.635 10.1946 118.265 11.9245Z" fill="#4F4F4F"/>
                            <path id="finger3_2" d="M121.001 19.4421C121.631 21.172 123.543 22.064 125.273 21.4343C127.003 20.8047 127.895 18.8919 127.266 17.1619C126.636 15.432 124.723 14.5401 122.993 15.1697C121.263 15.7993 120.371 17.7121 121.001 19.4421Z" fill="#4F4F4F"/>
                            <path id="finger4_2" d="M118.041 26.9043C118.671 28.6343 120.584 29.5262 122.314 28.8966C124.044 28.2669 124.936 26.3541 124.306 24.6242C123.676 22.8943 121.764 22.0023 120.034 22.6319C118.304 23.2616 117.412 25.1744 118.041 26.9043Z" fill="#4F4F4F"/>
                            <path id="Vector_2" d="M113.473 25.5023C114.354 23.9471 115.111 22.6357 115.988 21.068C116.455 20.2454 116.862 19.2599 116.844 18.2734C116.844 18.1173 116.831 17.9658 116.806 17.8189C116.742 17.4874 116.619 17.1491 116.501 16.8234C116.382 16.4976 116.259 16.1593 116.078 15.8564C116.002 15.7277 115.915 15.6035 115.814 15.4839C115.194 14.7163 114.253 14.2359 113.362 13.8933C111.688 13.2684 110.265 12.7505 108.586 12.1131C106.347 11.0691 103.796 9.71317 101.389 11.0148C100.244 11.8433 99.3109 13.2185 99.545 14.9921C99.69 15.9751 101.492 18.6254 102.623 21.7326L102.705 21.9581C103.836 25.0654 104.172 28.2492 104.68 29.1C105.641 30.6091 107.251 31.0586 108.649 30.9613C111.347 30.4194 112.429 27.741 113.473 25.5023V25.5023Z" fill="#4F4F4F"/>
                            </g>
                            <g id="paw3" className="animate-showPawPrint" style={{animationDelay: "0.6s"}}>
                            <path id="finger1_3" d="M78.1138 51C78.1138 52.841 79.6061 54.3333 81.4471 54.3333C83.288 54.3333 84.7804 52.841 84.7804 51C84.7804 49.1591 83.288 47.6667 81.4471 47.6667C79.6061 47.6667 78.1138 49.1591 78.1138 51Z" fill="#4F4F4F"/>
                            <path id="finger2_3" d="M83.4471 57C83.4471 58.841 84.9395 60.3333 86.7804 60.3333C88.6214 60.3333 90.1138 58.841 90.1138 57C90.1138 55.1591 88.6214 53.6667 86.7804 53.6667C84.9395 53.6667 83.4471 55.1591 83.4471 57Z" fill="#4F4F4F"/>
                            <path id="finger3_3" d="M83.4471 65C83.4471 66.841 84.9395 68.3333 86.7804 68.3333C88.6214 68.3333 90.1138 66.841 90.1138 65C90.1138 63.1591 88.6214 61.6667 86.7804 61.6667C84.9395 61.6667 83.4471 63.1591 83.4471 65Z" fill="#4F4F4F"/>
                            <path id="finger4_3" d="M78.1138 71C78.1138 72.8409 79.6061 74.3333 81.4471 74.3333C83.288 74.3333 84.7804 72.8409 84.7804 71C84.7804 69.159 83.288 67.6667 81.4471 67.6667C79.6061 67.6667 78.1138 69.159 78.1138 71Z" fill="#4F4F4F"/>
                            <path id="Vector_3" d="M74.3004 68.12C75.6604 66.96 76.8204 65.9867 78.1804 64.8133C78.9004 64.2 79.6204 63.4133 79.9404 62.48C79.9938 62.3333 80.0338 62.1867 80.0604 62.04C80.1138 61.7067 80.1138 61.3467 80.1138 61C80.1138 60.6533 80.1138 60.2933 80.0471 59.9467C80.0204 59.8 79.9804 59.6533 79.9271 59.5067C79.6071 58.5733 78.8871 57.8 78.1671 57.1733C76.8071 56.0133 75.6471 55.04 74.2871 53.8667C72.5404 52.12 70.6071 49.9733 67.9004 50.3733C66.5404 50.76 65.1938 51.7333 64.8071 53.48C64.6071 54.4533 65.3938 57.56 65.3938 60.8667L65.3938 61.1067C65.3938 64.4133 64.6204 67.52 64.8071 68.4934C65.1938 70.24 66.5538 71.2134 67.9004 71.6C70.6204 72.0134 72.5538 69.8667 74.3004 68.12V68.12Z" fill="#4F4F4F"/>
                            </g>
                            <g id="paw2" className="animate-showPawPrint" style={{animationDelay: "0.3s"}}>
                            <path id="finger1_4" d="M37.6936 8.60307C38.3232 10.333 40.236 11.225 41.9659 10.5953C43.6959 9.96567 44.5878 8.05286 43.9582 6.32294C43.3285 4.59301 41.4157 3.70105 39.6858 4.3307C37.9559 4.96034 37.0639 6.87314 37.6936 8.60307Z" fill="#4F4F4F"/>
                            <path id="finger2_4" d="M44.7574 12.4171C45.387 14.1471 47.2998 15.039 49.0297 14.4094C50.7597 13.7797 51.6516 11.8669 51.022 10.137C50.3923 8.40707 48.4795 7.51511 46.7496 8.14475C45.0197 8.77439 44.1277 10.6872 44.7574 12.4171Z" fill="#4F4F4F"/>
                            <path id="finger3_4" d="M47.4935 19.9347C48.1232 21.6646 50.036 22.5565 51.7659 21.9269C53.4958 21.2973 54.3878 19.3845 53.7581 17.6545C53.1285 15.9246 51.2157 15.0326 49.4858 15.6623C47.7558 16.2919 46.8639 18.2047 47.4935 19.9347Z" fill="#4F4F4F"/>
                            <path id="finger4_4" d="M44.534 27.3969C45.1636 29.1269 47.0764 30.0188 48.8063 29.3892C50.5363 28.7595 51.4282 26.8467 50.7986 25.1168C50.1689 23.3869 48.2561 22.4949 46.5262 23.1245C44.7963 23.7542 43.9043 25.667 44.534 27.3969Z" fill="#4F4F4F"/>
                            <path id="Vector_4" d="M39.9656 25.9949C40.8468 24.4397 41.604 23.1283 42.4806 21.5606C42.9474 20.738 43.355 19.7525 43.3365 18.766C43.3364 18.6099 43.3238 18.4584 43.2987 18.3115C43.2348 17.98 43.1117 17.6417 42.9931 17.316C42.8746 16.9902 42.7514 16.6519 42.5702 16.349C42.495 16.2203 42.4073 16.0961 42.307 15.9765C41.6871 15.2089 40.746 14.7285 39.8551 14.3859C38.1804 13.761 36.7574 13.2431 35.0781 12.6057C32.8394 11.5617 30.2885 10.2058 27.8818 11.5074C26.7361 12.3359 25.8035 13.7111 26.0376 15.4847C26.1826 16.4677 27.9843 19.118 29.1153 22.2252L29.1973 22.4507C30.3283 25.558 30.6641 28.7418 31.1725 29.5926C32.1332 31.1017 33.7441 31.5512 35.1418 31.4539C37.8391 30.912 38.9216 28.2336 39.9656 25.9949V25.9949Z" fill="#4F4F4F"/>
                            </g>
                            <g id="paw1" className="animate-showPawPrint">
                            <path id="finger1_5" d="M14 50.8863C14 52.7272 15.4924 54.2196 17.3333 54.2196C19.1743 54.2196 20.6667 52.7272 20.6667 50.8863C20.6667 49.0453 19.1743 47.5529 17.3333 47.5529C15.4924 47.5529 14 49.0453 14 50.8863Z" fill="#4F4F4F"/>
                            <path id="finger2_5" d="M19.3333 56.8863C19.3333 58.7272 20.8257 60.2196 22.6667 60.2196C24.5076 60.2196 26 58.7272 26 56.8863C26 55.0453 24.5076 53.5529 22.6667 53.5529C20.8257 53.5529 19.3333 55.0453 19.3333 56.8863Z" fill="#4F4F4F"/>
                            <path id="finger3_5" d="M19.3333 64.8863C19.3333 66.7272 20.8257 68.2196 22.6667 68.2196C24.5076 68.2196 26 66.7272 26 64.8863C26 63.0453 24.5076 61.5529 22.6667 61.5529C20.8257 61.5529 19.3333 63.0453 19.3333 64.8863Z" fill="#4F4F4F"/>
                            <path id="finger4_5" d="M14 70.8862C14 72.7272 15.4924 74.2196 17.3333 74.2196C19.1743 74.2196 20.6667 72.7272 20.6667 70.8862C20.6667 69.0453 19.1743 67.5529 17.3333 67.5529C15.4924 67.5529 14 69.0453 14 70.8862Z" fill="#4F4F4F"/>
                            <path id="Vector_5" d="M10.1867 68.0063C11.5467 66.8463 12.7067 65.8729 14.0667 64.6996C14.7867 64.0863 15.5067 63.2996 15.8267 62.3663C15.88 62.2196 15.92 62.0729 15.9467 61.9263C16 61.5929 16 61.2329 16 60.8863C16 60.5396 16 60.1796 15.9333 59.8329C15.9067 59.6863 15.8667 59.5396 15.8133 59.3929C15.4933 58.4596 14.7733 57.6863 14.0533 57.0596C12.6933 55.8996 11.5333 54.9263 10.1733 53.7529C8.42667 52.0063 6.49333 49.8596 3.78667 50.2596C2.42667 50.6463 1.08 51.6196 0.693335 53.3663C0.493335 54.3396 1.28 57.4463 1.28 60.7529L1.28 60.9929C1.28 64.2996 0.506668 67.4063 0.693335 68.3796C1.08 70.1263 2.44 71.0996 3.78667 71.4863C6.50667 71.8996 8.44 69.7529 10.1867 68.0063V68.0063Z" fill="#4F4F4F"/>
                            </g>
                            </g>                             
                        </svg>
                    </Link>                   
                </div>
            </div>
        )
    } else {
        return (
            <div className="py-32 px-2 max-w-xl m-auto">
                <h4 className="px-4 py-2">You have <span className="font-bold">{basket_state.total_quantity}</span> item(s) in the basket.</h4>
                {/* basket items and total price */}
                <div className="divide-y-2 divide-gray-400 divide-solid">
                    {basket_state.items.map((item, index) => 
                        <BasketItemUnit item={item} key={index}/>
                    )}
                    <h4 className="pt-4 pr-2 text-xl text-right font-bold">Subtotal: &nbsp;&nbsp;<span className="text-yellow-700 font-bold">${basket_state.total_price}</span></h4>
                </div>
                {/* clear basket and checkout*/}
                <div className="sm:px-0 text-left">
                    <button className="p-1 text-xs font-bold border border-gray-400 rounded-sm hover:border-transparent hover:bg-red-500 hover:text-white" onClick={() => dispatch(clearBasket())}>CLEAR BASKET</button>
                    <Link to="/checkout" className="block py-2 mt-2 text-sm text-center font-bold rounded-sm bg-green-600 hover:bg-green-800 text-white">CHECKOUT</Link>
                </div>
            </div>
        )
    }
};

export default BasketItems;